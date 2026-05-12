const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

// Celsius → Fahrenheit
celsius.addEventListener('input', () => { //   Toda vez que alguém digitar no campo Celsius, execute esse código
    const c = parseFloat(celsius.value); //Pega o valor digitado no campo Celsius e transforma em número

    if (!isNaN(c)) { //Se isso FOR um número, então continua
        const f = (c * 9/5) + 32;
        fahrenheit.value = f.toFixed(2);
    } else {
        fahrenheit.value = '';
    }
});

// Fahrenheit → Celsius
fahrenheit.addEventListener('input', () => {
    const f = parseFloat(fahrenheit.value);

    if (!isNaN(f)) {
        const c = (f - 32) * 5/9;
        celsius.value = c.toFixed(2);
    } else {
        celsius.value = '';
    }
});