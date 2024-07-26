document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('number-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const numberAInput = document.getElementById('number-A');
        const numberBInput = document.getElementById('number-B');

          // Função para converter vírgulas em pontos e fazer parsing do número
        function parseNumber(value) {
        return parseFloat(value.replace(',', '.'));
        }

        // Converter os valores dos inputs, que podem conter vírgulas
        const numberA = parseNumber(numberAInput.value);
        const numberB = parseNumber(numberBInput.value);

        if (isNaN(numberA) || isNaN(numberB)) {
            messageDiv.innerHTML = 'Por favor, insira números válidos.';
            messageDiv.className = 'error';
        } else if (numberA > numberB) {
            messageDiv.innerHTML = `O número A: <b>${numberA}</b> é maior que o B: <b>${numberB}</b> !`;
            messageDiv.className = 'success';
        } else if (numberA < numberB) {
            messageDiv.innerHTML = `O número A: <b>${numberA}</b> não é maior que o B: <b>${numberB}</b> !`;
            messageDiv.className = 'error';
        } else {
            messageDiv.innerHTML = `Ambos números são iguais, não possuem um maior ou menor.`;
            messageDiv.className = 'samenumber';
        }

        numberAInput.value = '';
        numberBInput.value = '';

        messageDiv.style.display = 'block'; // Aparecer a mensagem
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const starContainer = document.querySelector('.star-container');
    const starCount = 500; // Número de estrelas

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starContainer.appendChild(star);
    }
});