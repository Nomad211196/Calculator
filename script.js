const main = document.querySelector('.main');
const result = document.querySelector('.result');
let pointEntered = false;

function Operation(symbol) {
    return ['+', '-', '*', '/'].includes(symbol);
}

main.addEventListener('click', function(event) {
    if (!event.target.classList.contains('btn')) return;
    const value = event.target.innerText;
    const currentText = result.innerText;
    const lastChar = currentText.charAt(currentText.length - 1);

    switch (value) {
        case 'Clear':
            result.innerText = '';
            pointEntered = false;
            break;

        case '=':
            result.innerText = eval(result.innerText).toFixed(2);
            pointEntered = true;
            break;

        case '.':
            if (pointEntered || lastChar === '' || lastChar === '.' || Operation(lastChar)) {
                return;
            }
            result.innerText += value;
            pointEntered = true;
            break;

        case '+':
        case '-':
        case '*':
        case '/':
            if (lastChar === '.' || Operation(lastChar)) {
                return;
            }

            result.innerText += value;
            lastValue = value;
            pointEntered = false;
            break;

        default:
            if (Operation(value)) {
                pointEntered = false;
            }

            result.innerText += value;
            lastValue = value;
            break;
    }
});
