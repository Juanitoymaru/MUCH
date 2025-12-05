document.addEventListener('DOMContentLoaded', () => {
    const corazon = document.getElementById('corazon-globo');
    const textoPrincipal = document.getElementById('texto-principal');
    const body = document.body;

    let clicks = 0;
    const maxClicks = 5; // Número de veces que dirá "Mucho" antes de explotar

    corazon.addEventListener('click', () => {
        clicks++;

        if (clicks <= maxClicks) {
            // 1. Aumentar el tamaño del corazón
            const scaleFactor = 1 + (clicks * 0.5); // Aumenta 50% por clic
            corazon.style.transform = `rotate(-45deg) scale(${scaleFactor})`;
            
            // 2. Mostrar "Mucho"
            textoPrincipal.textContent = "Mucho";

            // Si es el último clic, prepara la explosión
            if (clicks === maxClicks) {
                // 3. Llenar la pantalla antes de la explosión
                setTimeout(() => {
                    corazon.style.transition = 'all 1s ease-in';
                    corazon.style.transform = 'rotate(-45deg) scale(100)'; // Escala gigante
                    
                    // 4. Espera a que crezca y luego explota
                    setTimeout(explotarCorazon, 1000); 
                }, 500);
            }

        } else {
            // Esto evita clics adicionales si ya se inició la explosión
            return;
        }
    });

    function explotarCorazon() {
        // Ocultar el corazón y el texto
        corazon.classList.add('explosion');
        textoPrincipal.textContent = "";

        // Mostrar el mensaje final en el cuerpo
        const mensajeFinal = document.createElement('h1');
        mensajeFinal.textContent = 'MUCHISIMOOO';
        mensajeFinal.style.cssText = 'color: black; font-size: 5vw; z-index: 100; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);';
        body.appendChild(mensajeFinal);
    }
});
