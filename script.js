const main = document.querySelector('.main');
const result = document.querySelector('.result');
let pointEntered = false;
let lastValue = ''

function Operation(symbol) {
    return ['+', '-', '*', '/'].includes(symbol);
}

main.addEventListener('click', function(event) {
    if (!event.target.classList.contains('btn')) return;
    const value = event.target.innerText;

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
            if (pointEntered || result.innerText === '' || Operation(lastValue)) {
                return; 
            }
            result.innerText += value;
            pointEntered = true;
            break;
        default:
            if (Operation(value)) {
                pointEntered = false;
            }
            
            if (Operation(value) && Operation(lastValue)) {
                return;
            }
            result.innerText += value;
            lastValue = value;
    }
});
