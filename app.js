window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
    // Obtener los valores de inclinación y orientación del dispositivo
    const tiltLR = event.gamma; // Inclinación izquierda-derecha
    const tiltFB = event.beta; // Inclinación adelante-atrás

    // Calcular la posición del joystick en función de los valores de inclinación y orientación
    const joystick = document.getElementById('joystick');
    const joystickWidth = joystick.offsetWidth;
    const joystickHeight = joystick.offsetHeight;
    const joystickLeft = (tiltLR / 90) * (joystickWidth / 2) + (joystickWidth / 2);
    const joystickTop = (-tiltFB / 90) * (joystickHeight / 2) + (joystickHeight / 2);

    // Actualizar la posición del joystick en la pantalla
    const stick = document.getElementById('stick');
    stick.style.left = joystickLeft + 'px';
    stick.style.top = joystickTop + 'px';
}
