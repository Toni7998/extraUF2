document.addEventListener('DOMContentLoaded', function () {
    
    // Seleccionem els elements
    const playButton = document.getElementById('playButton');
    const landingSound = document.getElementById('landingSound');
    const rocket = document.getElementById('rocket');

    // Afegim l'event de clic al botó
    playButton.addEventListener('click', function () {
    
        // Reproduim el audio
        landingSound.play();

        // Iniciaem l' animación de la nau 
        rocket.style.bottom = '45%';
    });

});