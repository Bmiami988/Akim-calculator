const display = document.getElementById('screen');
const buttons = document.querySelectorAll('button');

let expression = '';
let result = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            expression = '';
            display.value = '';
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            display.value = expression;
        } else if (value === '=') {
            try {
                result = eval(expression);
                display.value = result;
                expression = result.toString();
            } catch (error) {
                display.value = 'Error';
                expression = '';
            }
        } else if (value === 'sin') {
            const angle = parseFloat(expression);
            const result = Math.sin(angle * Math.PI / 180);
            display.value = result;
            expression = result.toString();
        } else if (value === 'cos') {
            const angle = parseFloat(expression);
            const result = Math.cos(angle * Math.PI / 180);
            display.value = result;
            expression = result.toString();
        } else if (value === 'tan') {
            const angle = parseFloat(expression);
            const result = Math.tan(angle * Math.PI / 180);
            display.value = result;
            expression = result.toString();
        } else if (value === 'log') {
            const number = parseFloat(expression);
            const result = Math.log10(number);
            display.value = result;
            expression = result.toString();
        } else if (value === 'x^y') {
            expression += '**';
            display.value = expression;
        } else if (value === 'SQRT') {
            const number = parseFloat(expression);
            const result = Math.sqrt(number);
            display.value = result;
            expression = result.toString();
        } else if (value === 'ln') {
            const number = parseFloat(expression);
            const result = Math.log(number);
            display.value = result;
            expression = result.toString();
        }
        else if (value === '%') {
            const number = parseFloat(expression);
            const result = number / 100;
            display.value = result;
            expression = result.toString();
        } 
        else {
            expression += value;
            display.value = expression;
        }
    });
});

