document.addEventListener('DOMContentLoaded', () => {
    const corazon = document.getElementById('corazon-globo');
    const textoPrincipal = document.getElementById('texto-principal');
    const body = document.body;

    let clicks = 0;
    const maxClicks = 5; // Número de veces que dirá "Mucho"
    let currentScale = 1; 

    // Usar 'click' y 'touchstart' para PC y móviles
    corazon.addEventListener('click', manejarInteraccion);
    corazon.addEventListener('touchstart', manejarInteraccion);

    function manejarInteraccion(e) {
        e.preventDefault(); 
        
        if (clicks >= maxClicks) return; 

        clicks++;

        // 1. Aumentar el tamaño del corazón
        currentScale += 0.6; // Incremento de tamaño
        
        // El CSS maneja la posición y el giro; solo agregamos la escala
        corazon.style.transform = `translate(-50%, -50%) rotate(-45deg) scale(${currentScale})`;
        
        // 2. Mostrar "Mucho"
        textoPrincipal.textContent = "Mucho";

        // Si es el último clic, inicia la secuencia de explosión
        if (clicks === maxClicks) {
            // 3. Llenar la pantalla (crecimiento final rápido)
            setTimeout(() => {
                corazon.style.transition = 'all 0.8s ease-in-out';
                // Escala gigante para que ocupe la pantalla
                corazon.style.transform = `translate(-50%, -50%) rotate(-45deg) scale(100)`; 
                
                // 4. Espera el llenado y luego explota
                setTimeout(explotarCorazon, 800); 
            }, 300);
        }
    }

    function explotarCorazon() {
        // 1. Ocultar el corazón
        corazon.classList.add('explosion');

        // 2. Mostrar el mensaje final
        const mensajeFinal = document.createElement('h1');
        mensajeFinal.className = 'final-message';
        mensajeFinal.textContent = '¡MUCHISIMOOO! ❤️';
        body.appendChild(mensajeFinal);
        
        // 3. Generar la lluvia de corazones
        generarEmojisCorazon(40); 
    }

    function generarEmojisCorazon(count) {
        for (let i = 0; i < count; i++) {
            const emoji = document.createElement('span');
            emoji.className = 'heart-emoji';
            emoji.textContent = '💖'; 
            
            // Posición inicial aleatoria
            emoji.style.left = `${Math.random() * 100}vw`; 
            emoji.style.bottom = `${Math.random() * 10}vh`;

            // Retrasos y duraciones aleatorias para un efecto de "confeti"
            emoji.style.animationDelay = `${Math.random() * 5}s`; 
            emoji.style.animationDuration = `${5 + Math.random() * 5}s`; 

            body.appendChild(emoji);
        }
    }
});
