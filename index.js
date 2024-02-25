const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function() {
    alert('Mor, yo sabía que usted diría que sí, entonces nos vemos el viernes, paso por ti a las 8, un besote guapa');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function() {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    noBtn.style.top = randomY + '%'; // Cambiado de computedStyleMap a style
    noBtn.style.left = randomX + '%'; // Cambiado de computedStyleMap a style
    noBtn.style.transform = `translate(-${randomX}px, -${randomY}%)`; // Corregido el uso de template literals y algunas variables mal escritas
});
