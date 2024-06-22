function confirmarAsistencia() {
    var fechaLimite = new Date('2024-07-01'); // Fecha límite de confirmación (por ejemplo, una semana antes del evento)
    var hoy = new Date();

    if (hoy <= fechaLimite) {
        document.getElementById('mensaje-confirmacion').innerHTML = '¡Gracias por confirmar tu asistencia! ¡Nos vemos en la fiesta!';
    } else {
        document.getElementById('mensaje-confirmacion').innerHTML = 'Lo siento, la fecha límite para confirmar asistencia ha pasado.';
    }
}
