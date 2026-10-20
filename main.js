
//año actual en el pie de la pagina
const anio = document.querySelector("#anio");
if (anio) {
    anio.textContent = new Date().getFullYear();
}
//flechas para mover la fila de obras(en index)
const fila = document.querySelector(".obras__fila");
const flechaIzq = document.querySelector("#flecha-izq");
const flechaDer = document.querySelector("#flecha-der");

if (fila && flechaIzq && flechaDer) {
    // direccion: -1 izquierda, 1 derecha
    const mover = (direccion) => {
        const tarjeta = fila.querySelector(".obras__item");
        const hueco = parseFloat(getComputedStyle(fila).columnGap);
        fila.scrollBy({ left: direccion * (tarjeta.offsetWidth + hueco), behavior: "smooth" });
    };
    flechaIzq.addEventListener("click", () => mover(-1));
    flechaDer.addEventListener("click", () => mover(1));
}

//galeria de la obra: imagen grande, flechas, miniaturas
const miniaturas = document.querySelectorAll(".miniatura");
if (miniaturas.length > 0) {
    const principal = document.querySelector(".galeria-obra__img");
    const pie = document.querySelector(".galeria-obra__pie");
    const contador = document.querySelector(".galeria-obra__contador");
    const flechaAnterior = document.querySelector("#flecha-anterior");
    const flechaSiguiente = document.querySelector("#flecha-siguiente");
    const lista = document.querySelector(".miniaturas");

    //visor pantalla completa
    const visor = document.createElement("dialog");
    visor.className = "visor";
    visor.innerHTML = `
        <button class="visor__cerrar" type="button" aria-label="Cerrar">&times;</button>
        <img class="visor__img" src="" alt="">
        <p class="visor__pie"></p>`;
    document.body.appendChild(visor);
    const visorImg = visor.querySelector(".visor__img");
    const visorPie = visor.querySelector(".visor__pie");

    let actual = 0;

    const mostrarImagen = (indice) => {
        //%hace que al pasar de la ultima se vuelva a la primera
        actual = (indice + miniaturas.length) % miniaturas.length;
        const img = miniaturas[actual].querySelector("img");

        principal.src = img.src;
        principal.alt = img.alt;
        pie.textContent = img.alt;
        contador.textContent = `${actual + 1} / ${miniaturas.length}`;
        visorImg.src = img.src;
        visorImg.alt = img.alt;
        visorPie.textContent = `${actual + 1} / ${miniaturas.length} · ${img.alt}`;

        //marca la miniatura activa y la centra en la fila
        miniaturas.forEach((mini, i) => mini.classList.toggle("miniatura--activa", i === actual));
        const mini = miniaturas[actual];
        lista.scrollTo({ left: mini.offsetLeft - (lista.clientWidth - mini.offsetWidth) / 2, behavior: "smooth" });
    };

    miniaturas.forEach((mini, indice) => {
        mini.addEventListener("click", () => mostrarImagen(indice));

    });
    flechaAnterior.addEventListener("click", () => mostrarImagen(actual - 1));
    flechaSiguiente.addEventListener("click", () => mostrarImagen(actual + 1));
    principal.addEventListener("click", () => visor.showModal());

    visor.querySelector(".visor__cerrar").addEventListener("click", () => visor.close());
    visor.addEventListener("click", (evento) => {
        if (evento.target === visor) visor.close();
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "ArrowRight") mostrarImagen(actual + 1);
        if (evento.key === "ArrowLeft") mostrarImagen(actual - 1);
    });

    mostrarImagen(0);
    }



    //formulario de contacto
    const formulario = document.querySelector("#formulario");
    const aviso = document.querySelector("#mensaje-formulario");

    if (formulario && aviso) {
        const mostrarAviso = (texto, esError) => {
            aviso.textContent = texto;
            aviso.className = "formulario__mensaje " + (esError ? "formulario__mensaje--error" : "formulario__mensaje--ok");
        };

        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault(); //evita q formulario se envie solo
            const nombre = formulario.elements.nombre.value.trim();
            const correo = formulario.elements.correo.value.trim();
            const mensaje = formulario.elements.mensaje.value.trim();
            const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

            if (nombre.length < 2) {
                mostrarAviso("Escribe tu nombre.", true);
            } else if (!correoValido) {
                mostrarAviso("Escribe un correo válido, por ejemplo nombre@correo.com", true);
            } else if (mensaje.length < 10) {
                mostrarAviso("El mensaje es muy corto (mínimo 10 caracteres).", true);
            } else {
                const asunto = "Contacto desde el portafolio";
                const cuerpo = `Nombre: ${nombre}\nCorreo: ${correo}\n\n${mensaje}`;
                window.location.href = `mailto:torresarmijo.arq@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
                mostrarAviso("Abriendo tu programa de correo...", false);
                formulario.reset();
            }
        });
    }