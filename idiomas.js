//selectgor de idioma ES / EN
const TEXTOS_EN = {
    //menu y pie
    "nav.portafolio": "Full portfolio →",
    "nav.obras": "Works",
    "nav.sobre": "About me",
    "nav.contacto": "Contact →",
    "pie.titulo": "Contact",
    "pie.lema": "Have a project in mind? Let's talk!",
    "pie.correo": "Email:",
    "pie.lugar": "Valencia, Spain",
    "pie.portafolio": "Full portfolio",
    "lbl.nombre": "Name",
    "lbl.correo": "Email",
    "lbl.mensaje": "Message",
    "lbl.enviar": "Send",
    "lbl.enviarFlecha": "Send →",

    //ficha de las obras
    "ficha.proyecto": "Project",
    "ficha.descripcion": "Description",
    "ficha.institucion": "Institution",
    "ficha.autora": "Author",
    "ficha.autoras": "Authors",
    "ficha.facultad": "School of Architecture · Universidad Mayor",

    //paginacion
    "pag.todas": "← All works",
    "pag.todasNext": "All works →",
    "pag.prev1": "← Go to work 1",
    "pag.prev2": "← Go to work 2",
    "pag.prev3": "← Go to work 3",
    "pag.next2": "Go to work 2 →",
    "pag.next3": "Go to work 3 →",
    "pag.next4": "Go to work 4 →",

    //index
    "index.title": "Javiera Torres Armijo · Architect · Portfolio",
    "index.desc": "Portfolio of Javiera Torres Armijo, architect, graphic and web designer. Selected works 2020 - 2025",
    "index.presentacion": "I enjoy bringing an idea into life, from the first sketch to the final render, always with an eye on aesthetics and graphic impact.",
    "index.c1.titulo": "Ten Ten Technical School",
    "index.c1.sub": "CORMA Competition · Studio VII →",
    "index.c2.titulo": "Mapocho Connector Park",
    "index.c2.sub": "Bridge building · Studio VIII →",
    "index.c3.titulo": "Vicuña Sports Center",
    "index.c3.sub": "Sports center project · Studio IX →",
    "index.c4.titulo": "Terminal station<br>Santiago - Melipilla Train",
    "index.c4.sub": "Final degree project →",
    "index.aviso": "Scroll to see more works",

    //contacto
    "contacto.title": "Contact · Javiera Torres Armijo",
    "contacto.desc": "Portfolio of Javiera Torres Armijo, architect, graphic and web designer. Contact",

    //obra1
    "o1.title": "Ten Ten Technical School · Javiera Torres Armijo",
    "o1.desc": "Professional technical school with three timber structures in Ten Ten, Castro, for the 2020 CORMA competition.",
    "o1.titulo": "Ten - Ten<br>Technical School",
    "o1.proyecto": "Studio VII · CORMA Competition, Wood Week 2020",
    "o1.desc1": "Professional technical school in Ten Ten (Castro), Los Lagos Region, specialized in agriculture, tourism and forestry.",
    "o1.desc2": "Three joined timber naves, looking like a large greenhouse. Each nave forms boxes holding the school's programs, and a central circulation with interruptions avoids a monotonous route.",
    "o1.desc3": "Radiata pine timber structure. The north facing dormers, deliberately oriented, bring natural light to classrooms and gardens and allow convective ventilation inside the building.",

    //obra2
    "o2.title": "Mapocho Connector Park · Javiera Torres Armijo",
    "o2.desc": "Bridge building connecting both banks of the Mapocho River, with a planted facade",
    "o2.titulo": "Mapocho<br>Connector Park",
    "o2.proyecto": "Studio VIII · Mapocho Connector Project",
    "o2.desc1": "A bridge that spans the Mapocho River, connecting its two banks. Beneath it, an open public space accommodates markets, while its planted facade integrates the structure with the surrounding park.",
    "o2.desc2": "The form emerges from a simple gesture: cutting across the river strip and separating its two sides, then reconnecting them through a volume that extends from one bank to the other.",
    "o2.desc3": "Its structure consists of a field of columns and a truss grid that support the volume above the river, leaving the ground level open for public use.",

    //obra3
    "o3.title": "Vicuña Sports Center · Javiera Torres Armijo",
    "o3.desc": "A six storey sports and cultural center featuring a perforated Corten steel facade.",
    "o3.titulo": "Vicuña Sports Center",
    "o3.proyecto": "Studio IX · Vicuña Sports Center",
    "o3.desc1": "A six storey sports and cultural center that brings together a range of physical and cultural activities within a single building",
    "o3.desc2": "Programmatic and circulation diagrams illustrate how different uses are distributed across the six floors and how people move throughout the building.",
    "o3.desc3": "Its perforated Corten steel facade gives the building its distinctive identity.",

    //obra4
    "o4.title": "Terminal Station, Santiago - Melipilla Train Project · Javiera Torres Armijo",
    "o4.desc": "A terminal station and urban park along the Santiago - Melipilla train line",
    "o4.titulo": "<span class=\"obra__linea-menor\">Terminal station</span> Santiago - Melipilla train",
    "o4.proyecto": "Final degree project · 2022",
    "o4.desc1": "Intermodal terminal station of the Santiago - Melipilla train, bringing together train, intercity buses, taxis and parking, alongside an urban park.",
    "o4.desc2": "The railway line divides the city in two. The station spans over the tracks and connects both sides with an elevated pedestrian crossing.",
    "o4.desc3": "A large steel roof covers the platform with a minimum of columns and leaves the sides free for green areas and an access plaza.",
    "o4.desc4": "The new line is 61 km long with 11 stations, cutting travel time from 2 hrs to 46 min.",
    "o4.descargar": "Download project report (PDF) ↓",

    //sobre mi
    "sobre.title": "About me · Javiera Torres Armijo",
    "sobre.desc": "Portfolio of Javiera Torres Armijo, architect, graphic and web designer. About me",
    "sobre.texto": "Architect by training, designer by conviction. <br> I explore how imagery can shape architecture, taking each idea from concept to a clear, functional proposal with its own identity. I'm motivated by working with teams that want to create innovative, interesting projects.",
    "sobre.hExp": "Experience",
    "sobre.hForm": "Education",
    "sobre.hComp": "Skills",
    "sobre.hIdi": "Languages",
    "role.web": "Freelance web designer",
    "role.arq": "Freelance architect",
    "role.inv": "Research assistant",
    "role.prac": "Professional internship",
    "edu.cert": "Professional Certificate",
    "edu.certDesc": "Web page development and design, Labora",
    "edu.master": "Master's in Graphic Design",
    "edu.titulo": "Architecture degree",
    "edu.bach": "Bachelor's in Architecture",
    "nivel.alto": "High",
    "nivel.medio": "Medium",
    "nivel.nativo": "Native",
    "len.es": "Spanish",
    "len.en": "English"
};

// alt y aria-label: clave es el texto en español, como esta en el html
const ATRIBUTOS_EN = {
    "Principal": "Main",
    "Cambiar idioma": "Change language",
    "Descripción del proyecto": "Project description",
    "Galería de imágenes": "Image gallery",
    "Imagen anterior": "Previous image",
    "Imagen siguiente": "Next image",
    "Otras obras": "Other works",
    "Cerrar": "Close",

    //index
    "Imagen principal del Liceo Técnico Ten Ten": "Main image of the Ten Ten Technical School",
    "Imagen principal de Parque conector Mapocho": "Main image of the Mapocho Connector Park",
    "Imagen principal de Polideportivo Vicuña": "Main image of the Vicuña Sports Center",
    "Imagen principal de Estación terminal, Proyecto Tren Santiago - Melipilla": "Main image of the Terminal Station, Santiago - Melipilla Train Project",

    //obra1
    "Imagen exterior del Liceo técnico Ten Ten, con volúmenes de cubierta a dos aguas": "Exterior view of the Ten Ten Technical School, with gable roofed volumes",
    "Esquemas de forma y estructura del Liceo técnico Ten Ten": "Form and structure diagrams of the Ten Ten Technical School ",
    "Imagen interior 1": "Interior view 1",
    "Imagen interior 2": "Interior view 2",
    "Imagen interior 3": "Interior view 3",

    //obra2
    "Vista externa del edificio conector sobre el parque": "Exterior view of the connector building over the park",
    "Esquemas estructura y forma Parque Conector Mapocho": "Structure and form diagrams, Mapocho Connector Park",
    "Planta del primer nivel con ferias": "First floor plan with markets",
    "Planta del primer nivel sin ferias": "First floor plan without markets",
    "Cortes Parque Conector Mapocho": "Sections, Mapocho Connector Park",
    "Elevación Parque Conector Mapocho": "Elevation, Mapocho Connector Park",
    "Escantillon e isometrica de estructura": "Typical section and structural isometric",
    "Isometrica de contexto": "Context isometric",
    "Imagen del espacio público bajo el edificio": "View of the public space under the building",
    "Ilustración exterior Parque Conector Mapocho": "Exterior illustration, Mapocho Connector Park",

    //obra3
    "Vista externa del Polideportivo Vicuña": "Exterior view of the Vicuña Sports Center",
    "Esquemas de forma y estructura del Polideportivo Vicuña": "Form and structure diagrams of the Vicuña Sports Center",
    "Render del polideportivo con fachada de acero corten perforado": "Render of the sports center with perforated Corten steel facade",
    "Diagramas de programa y circulaciones Polideportivo Vicuña": "Program and circulation diagrams, Vicuña Sports Center ",
    "Isométrica con contexto Polideportivo Vicuña": "Isometric with context, Vicuña Sports Center",
    "Plantas 1 y 2 nivel Polideportivo Vicuña": " Floor plans, levels 1 and 2, Vicuña Sports Center",
    "Plantas 3 y 4 nivel Polideportivo Vicuña": " Floor plans, levels 3 and 4, Vicuña Sports Center",
    "Plantas 5 y 6 nivel Polideportivo Vicuña": " Floor plans, levels 5 and 6, Vicuña Sports Center",
    "Corte BB Polideportivo Vicuña": "Section BB, Vicuña Sports Center",
    "Corte 2 Polideportivo Vicuña": "Section 2, Vicuña Sports Center",
    "Elevación norte Polideportivo Vicuña": "North elevation, Vicuña Sports Center",
    "Elevación poniente Polideportivo Vicuña": "West elevation, Vicuña Sports Center",

    //obra4
    "Vista externa de estación terminal": "Exterior view of the terminal station",
    "Diagrama del proyecto Estación terminal Tren Santiago - Melipilla": "Project diagram, Terminal Station, Santiago - Melipilla Train",
    "Planimetría del parque urbano": "Urban park site plan",
    "Planimetría del primer nivel": "First level plan",
    "Planimetría del segundo nivel": "Second level plan",
    "Planimetría del tercer nivel": "Third level plan",
    "Cortes de la estación (1 de 2)": "Station sections (1 of 2)",
    "Cortes de la estación (2 de 2)": "Station sections (2 of 2)",
    "Elevaciones de la estación": "Station Elevations",
    "Isométrica de estructura": "Structural isometric",
    "Render parque urbano": "Urban Park render",

    //sobre mi
    "Render exterior de un proyecto de Javiera Torres Armijo": "Exterior render of a project by Javiera Torres Armijo"
};

for(let i = 1; i<= 9; i++){
    ATRIBUTOS_EN[`Ver imagen ${i}`] = `View image ${i}`;
}

//mensaje que usan main.js (formulario y visor)
const MENSAJES = {
    es:{
       "msg.nombre" : "Escribe tu nombre",
       "msg.correo": "Escribe un correo válido, por ejemplo nombre@correo.com",
       "msg.mensaje": "El mensaje es muy corto (mínimo 10 caracteres).",
       "msg.abriendo": "Abriendo tu programa de correo...",
       "msg.asunto": "Contacto desde el portafolio",
       "msg.cuerpoNombre": "Nombre",
       "msg.cuerpoCorreo": "Correo",
       "msg.cerrar": "Cerrar"
    },

    en:{
       "msg.nombre" : "Please enter your name",
       "msg.correo": "Please enter a valid email, for example nombre@correo.com",
       "msg.mensaje": "The message is too short (minimum 10 characters).",
       "msg.abriendo": "Opening your email app...",
       "msg.asunto": "Contact from portfolio",
       "msg.cuerpoNombre": "Name",
       "msg.cuerpoCorreo": "Email",
       "msg.cerrar": "Close"
    }
};

let idiomaActual  = "es";
try{
    idiomaActual = localStorage.getItem("idioma") === "en" ? "en" : "es";
} catch (e) {}

function traducir(clave){
    return MENSAJES[idiomaActual][clave];
}

//guardo valor original (español) la 1 vez y lo restaura al volver a ES
function traducirAtributo(atributo, claveGuardada, ingles){
    document.querySelectorAll(`[${atributo}]`).forEach((el) => {
        if (el.dataset[claveGuardada]=== undefined) el.dataset[claveGuardada] = el.getAttribute(atributo);
        const original = el.dataset[claveGuardada];
        el.setAttribute(atributo, ingles && ATRIBUTOS_EN[original] ? ATRIBUTOS_EN[original] : original);        
    });
}

function aplicarIdioma(idioma){
    idiomaActual = idioma;
    const ingles = idioma === "en";
    document.documentElement.lang = idioma;

    //texto simple
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        if (el.dataset.es === undefined) el.dataset.es = el.textContent;
        el.textContent = ingles && TEXTOS_EN[el.dataset.i18n] ? TEXTOS_EN[el.dataset.i18n] : el.dataset.es;

    });

    //texto con etiquetas dentro (br o span)
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        if(el.dataset.esHtml === undefined) el.dataset.esHtml = el.innerHTML;
        el.innerHTML = ingles && TEXTOS_EN[el.dataset.i18nHtml] ? TEXTOS_EN[el.dataset.i18nHtml] : el.dataset.esHtml;
    });

    //meta description
    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
        if (el.dataset.esContent === undefined) el.dataset.esContent = el.getAttribute("content");
        el.setAttribute("content", ingles && TEXTOS_EN[el.dataset.i18nContent] ? TEXTOS_EN[el.dataset.i18nContent] : el.dataset.esContent);        
    });


    traducirAtributo("alt", "esAlt", ingles);
    traducirAtributo("aria-label", "esAria", ingles);

    //boton muestra el idioma que se puede cambiar
    const boton = document.querySelector("#boton-idioma");
    if(boton) boton.textContent = ingles ? "ES" : "EN";

    try{
        localStorage.setItem("idioma", idioma);
    } catch (e) {}

    //avisa a main para actualizar galería
    document.dispatchEvent(new CustomEvent("idioma-cambiado"));
}

const botonIdioma = document.querySelector("#boton-idioma");
if(botonIdioma){
    botonIdioma.addEventListener("click", () => aplicarIdioma(idiomaActual === "es" ? "en" : "es"));
}
aplicarIdioma(idiomaActual);
