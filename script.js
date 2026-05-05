// --- CONFIGURACIÓN DE CARTAS ---
// Lista de Cartas xd
const misCartas = [
    { 
        id: 1, 
        titulo: "CARTA ZERO", 
        mensaje: `Tu sonrisa ilumina mis días y tu presencia llena mi corazón de alegría. 🐱💕\n\nNo hay palabras suficientes para decirte cuánto te quiero. Gracias por existir, por ser tú, por hacer que todo valga la pena. 🌟\n\nCon todo mi amor, Alexandro.💘\n\nEsta fue la primera que te hice en digital. Quería agregar aqui también.`,
        imagen: "" 
    },
        { 
        id: 2, 
        titulo: "NEW", 
        mensaje: `Hola, cree este sitio con el objetivo de escriberte mis sentimientos y recuerdos en forma de cartas, como no podré entregartelas directamente, las escribiré en digital. 😼. Considero que me resulta más fácil expresarme escribiendote. Asi que si tengo muchos errores ortográficos, NO ME DIGAS NADA, en pc no se escribir. \n\nTe obsequio este Buzón digital para que puedas ver cómo me siento, y lo que aveces pienso. Tengo que estarlo actualizando manualmente, asi que te avisaré si lo modifico o agrego otra función y/o carta. \n\nNo quiero que  te pongas triste ni nada mal, quiero que lo veas y te alegre, aunque sea un poco. Sé que no es un regalo muy increíble, es muy sencillo pero me nació hacertelo y me costó muchas desveladas y examenes DX. \n\nDime que te pareció el regalo, yo hice todo, los pixel arts, la pagina, los scrpits, estilos, (Con la ayuda de mi amigito Chatgipiti)`,
        imagen: "" 
    },
    { 
        id: 3, 
        titulo: "RECUERDO", 
        mensaje: `Mira, esta es de mis fotos favoritas, la guardo con mucha nostalgia y amor. Tal vez es muy sencilla, pero trae me trae recuerdos y sentimientos.\n\nSimplemente nuestras manos juntas, con el meñique todo chueco de ambos XD. \n\nEsta foto fue tomada un Sábado después de clases. Fue un 8 de Febrero. `,
        imagen: "nuestra-foto.jpeg" 
    },
    { 
        id: 4, 
        titulo: "RECUERDO DOSH", 
        mensaje: `Este día, fue cuando empecé mi jugada maestra. Me acuerdo que estaba bien nerviosooo AJAJJAJAJAA. Tuve que despistar con darle uno a Isa también JAJAJAA. Aunque no me gusta que me digan Jorgito XDD. \n\nScreenshot tomada el 30 de Octubre del 2024, wow hacee muchoo.`,
        imagen: "first-mov.jpeg" 
    },
    { 
        id: 5, 
        titulo: "RECUERDO TRES", 
        mensaje: `La carta que me regalaste. Mostrandome tus sinceros sentimientos, me encantó (A cada rato la vuelvo a leer). Muchas gracias de verdad, por haberme dado tan preciado recuerdo y por los `,
        imagen: ""
    },
    { 
        id: 5, 
        titulo: "TE ESCRIBIRÉ", 
        mensaje: `Prometo siempre escribirte cosas lindas aquí. ✨\n\nAsi que te informaré si lo actualizo!`,
        imagen: ""
    },
    { 
        id: 6, 
        titulo: "TE PROMETO QUE", 
        mensaje: `Te amaré de aquí, hasta la última estrella, de aquí hasta que el sol deje de brillar, de aqui hasta el fin de los tiempos y sobre todo, de aquí hasta la última partícula del mundo. 💗`,
        imagen: ""
    },
    { 
        id: 7, 
        titulo: "TE AMO", 
        mensaje: `Te amo. Y no como unas palabras bonitas que se lanzan al viento, sino como una promesa. Una promesa de seguir eligiéndote, incluso cuando el mundo sea incierto.`,
        imagen: ""
    },
    { 
        id: 8, 
        titulo: "TE ANHELO", 
        mensaje: `Te anhelo de la forma más pura y e innocente, anhelo con mucha fuerza el poder llegar a decirte "Buenas noches", darte besos en la frente y decirte que te adoro cuando te sientes mal, te anhelo de maneras en las que solo quiero estar a tu lado y nada más, simplemente te amo.`,
        imagen: ""
    },
    { 
        id: 9, 
        titulo: "TE AMO Y PIENSO", 
        mensaje: `"Te pienso y la noche se llena de color.\nTe amo y mis ojos brilla de amor.\nTe pienso y mi voz se vuelve canción.\nTe amo y la lluvia hace conm el sol.\nTe pienso y en los relojes se para el tiempo.\nTe amo y en la sequía cae agua del cielo.\nTe pienso y nos veo juntos en los espejos.\nTe amo y no tengo más miedos.\nTe pienso y las flores crecen en los desiertos.\nTe amo y ne vez de guerras hay besos.\nTe pienso y hay paz en el silencio.\nTe amo y la realidad se vuelve un sueño.\nte pienso y así, hacver nada no es perder tiempo.\nTe amo y lo que siento se expande como el universo."\n Ed Laverde, un poema que me encontré de él y que me gustó mucho, y te lo quise compartir. `,
        imagen: ""
    },
    { 
        id: 10, 
        titulo: "QUIERO", 
        mensaje: `Quiero que sepas, que me enamoré de ti no por tu físico, si no porque me rugió ese bello sentimiento. Me enamoré de ti por la forma en la que eres, por tu forma de ser, que me enamora más y más. Quiero conocerte más, porque conocerte fue como escuchar una canción por primera vez, y saber que sería mi favor. De la que no me cansaría de escuchar una y otra vez, porque siempre seguirás siendo hermosa para mi.\nQuiero que el amor que venga se parezca a ti, con tus miedos y fobias, tus virtudes, tu inteligencia, madurez y tu sentido del humor. Aún sabiendo que nadie en la Tierra es perfecto, tú eres para mi la mujer más perfecta. Te quiero a ti. Porque tú tienes el balance perfecto para mi, para sentir, para enamorarme cada día, para ser feliz. \nTe amo más de lo que pueda demostrarte realmente, te amo con toda mi alma.`,
        imagen: ""
    }

];

// --- ELEMENTOS DEL DOM ---
const grid = document.getElementById('lista-cartas');
const contador = document.getElementById('contador-cartas');
const overlay = document.getElementById('overlay');
const imgModal = document.getElementById('img-modal');
const papel = document.getElementById('carta-papel');
const mensajeTexto = document.getElementById('mensaje-carta');
const motor = document.getElementById('sonido-motor');
const avionCont = document.querySelector('.avioneta-container');

// --- LÓGICA DEL BUZÓN ---
function inicializarBuzon() {
    if(!contador) return;
    contador.innerText = `Tienes ${misCartas.length} mensajes guardados`;
    
    misCartas.forEach((carta, index) => {
        const div = document.createElement('div');
        div.className = 'sobre-item';
        div.style.animationDelay = `${index * 0.1}s`;
        div.innerHTML = `
            <img src="sobre-cerrado.png" class="pixel-art">
            <span>${carta.titulo}</span>
        `;
        div.onclick = () => abrirCarta(carta.mensaje, false, carta.imagen);
        grid.appendChild(div);
    });
}
//Cartas
function abrirCarta(mensaje, esRupia = false, rutaImagen = "") {
    mensajeTexto.innerText = mensaje;
    overlay.classList.add('activo');
    
    const fotoPrevia = document.getElementById('foto-recuerdo');
    if (fotoPrevia) fotoPrevia.remove();

    if (esRupia) {
        imgModal.src = 'rupi-azul.png';
        imgModal.classList.add('animation-zelda');
        setTimeout(() => { papel.classList.add('abierta'); }, 8000); 
    } else {
        imgModal.src = 'sobre-abierto.png';
        imgModal.classList.remove('animation-zelda');

        if (rutaImagen) {
            const nuevaImg = document.createElement('img');
            nuevaImg.src = rutaImagen;
            nuevaImg.id = 'foto-recuerdo';
            nuevaImg.className = 'foto-carta';

            mensajeTexto.after(nuevaImg);
        }
        setTimeout(() => { papel.classList.add('abierta'); }, 200);
    }
}

function cerrarCarta() {
    papel.classList.remove('abierta');
    
    const contenedorTexto = document.querySelector('.texto-interior');
    if (contenedorTexto) {
        contenedorTexto.scrollTop = 0;
    }
    setTimeout(() => {
        overlay.classList.remove('activo');
        setTimeout(() => {
            imgModal.src = 'sobre-cerrado.png';
            const fotoPrevia = document.getElementById('foto-recuerdo');
            if (fotoPrevia) fotoPrevia.remove();
        }, 300);
    }, 300);
}

//Rupia atsul
function descubrirRupia() {
    const sonido = document.getElementById('sonido-zelda');
    if(sonido) {
        sonido.currentTime = 0;
        sonido.play();
    }
    const mensajeZelda = `¡Has obtenido una RUPIA AZUL! 🔷\n\nEste pequeño tesoro es para recordarte lo especial que eres. \n\nQuería agregar un Easteregg de un juego que te gusta, me lo acabas de decir y se me ocurrió buscar información. Me dices que te parece.`;
    abrirCarta(mensajeZelda, true);
    document.getElementById('zona-secreta').style.display = 'none';
}

// --- LÓGICA DE AUDIO (AVIONETA) ---
let loopActivo = false;

function actualizarEfectoDoppler() {
    if (!motor || !avionCont) return;

    const rect = avionCont.getBoundingClientRect();
    const anchoPantalla = window.innerWidth;

    // Solo procesar si el avión está cruzando la pantalla
    if (rect.right > 0 && rect.left < anchoPantalla) {
        if (motor.paused) motor.play().catch(() => {});

        const centroAvion = rect.left + rect.width / 2;
        const centroPantalla = anchoPantalla / 2;
        const distanciaAlCentro = Math.abs(centroAvion - centroPantalla);

        // Volumen de aproximidadd
        let proximidad = 1 - (distanciaAlCentro / (anchoPantalla / 2));
        motor.volume = Math.max(0, Math.min(proximidad * 0.3, 0.3)); 
    } else {
        if (!motor.paused) motor.pause();
    }

    requestAnimationFrame(actualizarEfectoDoppler);
}

// Activar audio con el primer clic del usuario
window.addEventListener('click', () => {
    if (!loopActivo) {
        loopActivo = true;
        actualizarEfectoDoppler();
    }
}, { once: true });

// Iniciar buzón al cargar
window.onload = inicializarBuzon;