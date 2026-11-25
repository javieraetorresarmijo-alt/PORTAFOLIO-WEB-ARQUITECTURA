//año actual en el pie de la pagina
const anio = document.querySelector("#anio");
if (anio) {
    anio.textContent = new Date().getFullYear();
}
//rueda del raton mueve la fila de obras en horizontal
const fila = document.querySelector(".obras__fila");
const zonaObras = document.querySelector("main.obras");

if(fila&&zonaObras){
    zonaObras.addEventListener("wheel", (evento) => {
        //si el gesto es horizontal, el navegador lo maneja solo
        if (Math.abs(evento.deltaX) > Math.abs(evento.deltaY)) return;

        //firefox puede enviar el valor en lineas en vez de pixeles
        const delta = evento.deltaMode ===1 ? evento.deltaY * 40 : evento.deltaY;

        const alInicio = fila.scrollLeft <= 0;
        const alFinal = fila.scrollLeft + fila.clientWidth >= fila.scrollWidth - 1;

        //en los extremos dejo que la pagina siga su scroll normal 
        if ((delta < 0 && alInicio) || (delta > 0 && alFinal)) return;

        evento.preventDefault();
        fila.scrollLeft += delta;
    }, { passive: false });
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

   // al cambiar de idioma se actualizan los textos de la galeria y visor
   const traducirGaleria = () => {
    mostrarImagen(actual);
    visor.querySelector(".visor__cerrar").setAttribute("aria-label", traducir("msg.cerrar"));
   };
   document.addEventListener("idioma-cambiado", traducirGaleria);
   traducirGaleria();
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
                mostrarAviso(traducir("msg.nombre"), true);
            } else if (!correoValido) {
                mostrarAviso(traducir("msg.correo"), true);
            } else if (mensaje.length < 10) {
                mostrarAviso(traducir("msg.mensaje"), true);
            } else {
                const asunto = traducir("msg.asunto");
                const cuerpo = `${traducir("msg.cuerpoNombre")}: ${nombre}\n${traducir("msg.cuerpoCorreo")}: ${correo}\n\n${mensaje}`;
                window.location.href = `mailto:torresarmijo.arq@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
                mostrarAviso(traducir("msg.abriendo"), false);
                formulario.reset();
            }
        });
    }