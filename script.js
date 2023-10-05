const main = document.querySelector('.main');
const result = document.querySelector('.result')

function Operation(symbol) {
    return ['+', '-', '*', '/'].includes(symbol);
}

main.addEventListener('click', function(event) {
    if(!event.target.classList.contains('btn')) return;
    const value = event.target.innerText;

    switch(value) {
        case 'Clear':
            result.innerText = '';
            break;

        case '=':
            result.innerText = eval(result.innerText).toFixed(2);
            break;
        
            default:
                if (Operation(value) && Operation(lastValue)) {
                    // Если текущий символ и последний символ - арифметические операторы, не добавляем его
                    return;
                }
                result.innerText += value;
                lastValue = value;
        }
    });
    
