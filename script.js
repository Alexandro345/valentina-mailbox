// LISTA DE CARTAS (Agrega aquí todas las que quieras)
const misCartas = [
    { id: 1, titulo: "CARTA 01", mensaje: "Eres la persona más especial del mundo. Gracias por estar conmigo hoy y siempre. ♥" },
    { id: 2, titulo: "CARTA 02", mensaje: "Hoy me acordé de ti y sonreí. Solo quería recordarte cuánto te quiero." },
    { id: 3, titulo: "CARTA 03", mensaje: "¡Esta es una carta sorpresa! Espero que te guste mucho este buzón." },
    { id: 4, titulo: "CARTA 04", mensaje: "¡Mira! Una cuarta carta aparece mágicamente en la lista." },
];

const grid = document.getElementById('lista-cartas');
const contador = document.getElementById('contador-cartas');
const overlay = document.getElementById('overlay');
const imgModal = document.getElementById('img-modal');
const papel = document.getElementById('carta-papel');
const mensajeTexto = document.getElementById('mensaje-carta');

// 1. Cargar las cartas automáticamente
function inicializarBuzon() {
    contador.innerText = `Tienes ${misCartas.length} cartas`;
    
    misCartas.forEach((carta, index) => {
        const div = document.createElement('div');
        div.className = 'sobre-item';
        div.style.animationDelay = `${index * 0.1}s`; // Efecto cascada
        
        div.innerHTML = `
            <img src="sobre-cerrado.png" class="pixel-art">
            <span>${carta.titulo}</span>
        `;
        
        div.onclick = () => abrirCarta(carta.mensaje);
        grid.appendChild(div);
    });
}

// 2. Lógica de apertura
function abrirCarta(mensaje) {
    mensajeTexto.innerText = mensaje;
    overlay.classList.add('activo');
    
    // Secuencia de animación fluida
    setTimeout(() => {
        imgModal.src = 'sobre-abierto.png'; // Cambia imagen
        setTimeout(() => {
            papel.classList.add('abierta'); // Saca el papel
        }, 300);
    }, 500);
}

// 3. Lógica de cierre
function cerrarCarta() {
    papel.classList.remove('abierta');
    
    setTimeout(() => {
        imgModal.src = 'sobre-cerrado.png';
        overlay.classList.remove('activo');
    }, 400);
}

// Iniciar
inicializarBuzon();