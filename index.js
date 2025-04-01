const questionElement = document.querySelector('.question');
questionElement.textContent ='Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

const userAnswer = prompt('Vaše odpověď');
const answerTextElement = document.querySelector('.answer__text');
answerTextElement.textContent = userAnswer

const answerElement = document.querySelector('.answer')
if (userAnswer === 'Bell') {
    answerElement.classList.add('answer--correct');
} else {
    answerElement.classList.add('answer--wrong');

}