//script.js
// Password
const CONTRASENA = "071523";

// Variable to store the entered password
let contrasenaIngresada = "";

// Function to add a number to the display
function agregarNumero(numero) {
    const textoCodigo = document.getElementById('texto-codigo');
    const display = document.querySelector('.display');

    if (textoCodigo.textContent === 'Contraseña') {
        textoCodigo.textContent = '';
    }

    textoCodigo.textContent += '*';
    contrasenaIngresada += numero;

    display.classList.add('modo-password');

    if (contrasenaIngresada.length === CONTRASENA.length) {
        if (contrasenaIngresada === CONTRASENA) {
            mostrarContador();
        } else {
            alert("Contraseña incorrecta. Inténtalo de nuevo.");
            textoCodigo.textContent = 'Contraseña';
            display.classList.remove('modo-password');
            contrasenaIngresada = "";
        }
    }
}

// Function to show the counter and hide the safe
function mostrarContador() {
    const container = document.querySelector('.container');
    const seccionContador = document.getElementById('seccion-contador');
    container.style.display = 'none';
    seccionContador.style.display = 'block';
}

// Function to update the counter
function actualizarContador() {
    const fechaInicio = new Date('2023-05-15T00:00:00');
    const ahora = new Date();
    const diferenciaMs = ahora.getTime() - fechaInicio.getTime();

    // Calculate years, months, and days
    const anos = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24 * 365.25));
    const meses = Math.floor((diferenciaMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
    const dias = Math.floor((diferenciaMs % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));
    
    // Calculate hours, minutes, and seconds
    const horas = Math.floor((diferenciaMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenciaMs % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenciaMs % (1000 * 60)) / 1000);

    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Function to show the photo gallery
function mostrarGaleria() {
    const seccionContador = document.getElementById('seccion-contador');
    const seccionGaleria = document.getElementById('seccion-galeria');
    const seccionCarta = document.getElementById('seccion-carta');

    seccionContador.style.display = 'none';
    seccionCarta.style.display = 'none';
    seccionGaleria.style.display = 'block';
}

// Function to show the letter
function mostrarCarta() {
    const seccionGaleria = document.getElementById('seccion-galeria');
    const seccionCarta = document.getElementById('seccion-carta');

    seccionGaleria.style.display = 'none';
    seccionCarta.style.display = 'block';
}

// Update the counter every second
setInterval(actualizarContador, 1000);