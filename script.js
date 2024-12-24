function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1)

    if (display.value !== '' && !['+', '-', '*', '/'].includes(lastChar)) {
        display.value += operator;
     }
}

function clean()
{
    document.getElementById('display').value = "";
}

function back() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
}