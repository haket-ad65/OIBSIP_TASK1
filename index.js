
const display = document.getElementById('display');
let currentValue = '';
let answer = 0;

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'clear') {
            currentValue = '';
            display.value = '';
        } else if (value === 'del') {
            currentValue = currentValue.slice(0, -1);
            display.value = currentValue;
        } else if (value === 'ans') {
            currentValue += answer;
            display.value = currentValue;
        } else if (value === 'ENTER') {
            try {
                answer = eval(currentValue);
                display.value = answer;
                currentValue = answer.toString();
            } catch {
                display.value = 'Error';
                currentValue = '';
            }
        } else if (value === '√') {
            currentValue = Math.sqrt(eval(currentValue)).toString();
            display.value = currentValue;
        } else if (value === '±') {
            if (currentValue[0] === '-') {
                currentValue = currentValue.slice(1);
            } else {
                currentValue = '-' + currentValue;
            }
            display.value = currentValue;
        } else {
            currentValue += value;
            display.value = currentValue;
        }
    });
});
