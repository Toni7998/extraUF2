document.addEventListener('DOMContentLoaded', function () {

    // Seleccionem els elements
    const playButton = document.getElementById('playButton');
    const landingSound = document.getElementById('landingSound');

    // Afegim l'event de clic al botó
    playButton.addEventListener('click', function () {

        // Reproduim el audio
        landingSound.play();

        // Iniciaem l' animación de la nau 

        // Aquí puedes agregar la lógica para la animación de la nave
        console.log('Animación de aterrizaje iniciada');
    });

});