const CURRENT_YEAR = 2023;
const CORRECT_ANSWER = 'Ответ правильный'
const ERROR_ANSWER = 'Ответ неправильный'

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

buttonNode.addEventListener('click', function() {
    const inputValue = inputNode.value;

    if (!inputValue) {
        return;
    }

    const answer = inputNode.value;

    let output = CORRECT_ANSWER;

    if (answer !== CURRENT_YEAR) {
        output = ERROR_ANSWER;
    }

    outputNode.innerHTML = output;
})