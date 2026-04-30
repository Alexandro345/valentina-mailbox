// --- AQUÍ AGREGAS TUS CARTAS ---
const misCartas = [
    { id: 1, titulo: "CARTA 01", mensaje: "Tu sonrisa ilumina mis días y tu presencia llena mi corazón de alegría. 🐱💕No hay palabras suficientes para decirte cuánto te quiero Gracias por existir, por ser tú, por hacer que todo valga la pena. 🌟Con todo mi amor,Alexandro.💘" },
    { id: 2, titulo: "RECUERDO", mensaje: "Todavía me acuerdo de aquel día en el parque..." },
    { id: 3, titulo: "SUEÑO", mensaje: "Algún día viajaremos juntos a ver las estrellas de verdad." },
    { id: 4, titulo: "GATITO", mensaje: "Mira hacia abajo, el gato nos está cuidando mientras leemos." },
    { id: 5, titulo: "PROMESA", mensaje: "Prometo siempre escribirte cosas lindas aquí." },
    // Solo copia y pega la línea de arriba para agregar más
];

const grid = document.getElementById('lista-cartas');
const contador = document.getElementById('contador-cartas');
const overlay = document.getElementById('overlay');
const imgModal = document.getElementById('img-modal');
const papel = document.getElementById('carta-papel');
const mensajeTexto = document.getElementById('mensaje-carta');

function inicializarBuzon() {
    contador.innerText = `Tienes ${misCartas.length} mensajes guardados`;
    
    misCartas.forEach((carta, index) => {
        const div = document.createElement('div');
        div.className = 'sobre-item';
        div.style.animationDelay = `${index * 0.1}s`;
        
        div.innerHTML = `
            <img src="sobre-cerrado.png" class="pixel-art">
            <span>${carta.titulo}</span>
        `;
        
        div.onclick = () => abrirCarta(carta.mensaje);
        grid.appendChild(div);
    });
}

function abrirCarta(mensaje) {
    mensajeTexto.innerText = mensaje;
    overlay.classList.add('activo');
    
    setTimeout(() => {
        imgModal.src = 'sobre-abierto.png';
        setTimeout(() => {
            papel.classList.add('abierta');
        }, 300);
    }, 400);
}

function cerrarCarta() {
    papel.classList.remove('abierta');
    setTimeout(() => {
        imgModal.src = 'sobre-cerrado.png';
        overlay.classList.remove('activo');
    }, 400);
}

// Arrancar la aplicación
window.onload = inicializarBuzon;
