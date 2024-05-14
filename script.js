const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

const colores = ['#f00', '#00f', '#0f0', '#ff0', '#0ff', '#f0f' , '#f00ff', '#000',];

// Tamaño del canvas
const anchoCanvas = canvas.width;
const altoCanvas = canvas.height;

// Tamaño de la pelota
const radioPelota = 10;

// Posición inicial de la pelota
let xPelota = anchoCanvas / 3;
let yPelota = altoCanvas / 3;

// Velocidad diagonal de la pelota
let dx = 0.8;
let dy = 0.8;

// Obtener el índice del color actual
let indiceColor = Math.floor(Math.random() * colores.length);

// Función para dibujar la pelota
function dibujarPelota() {
    ctx.beginPath();
    ctx.arc(xPelota, yPelota, radioPelota, 0, 2* Math.PI);
    ctx.fillStyle = colores[indiceColor];
    ctx.fill();
}


// Función para actualizar la posición de la pelota
function actualizarPelota() {
    xPelota += dx;
    yPelota += dy;

    // Rebote en paredes horizontales
    if (yPelota + radioPelota > altoCanvas || yPelota - radioPelota < 0) {
        dy *= -1;
        indiceColor = Math.floor(Math.random() * colores.length);
    }

    // Rebote en paredes verticales
    if (xPelota + radioPelota > anchoCanvas || xPelota - radioPelota < 0) {
        dx *= -1;
        indiceColor = Math.floor(Math.random() * colores.length);
    }
}


// Función para animar el juego
function animar() {
    ctx.clearRect(0, 0, anchoCanvas, altoCanvas);

    dibujarPelota();
    actualizarPelota();

    requestAnimationFrame(animar);
}

// Iniciar la animación
animar();
