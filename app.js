// ¡Buena suerte!
const generateButton = document.querySelector('.card__dice');
const adviceNumber = document.querySelector('.card__number');
const adviceText = document.querySelector('.card__quote');

function generateAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      adviceNumber.textContent = "advice #" + data.slip.id;
      adviceText.textContent = data.slip.advice;
      console.log(data)
    })
    .catch(error => console.log(error));
}

generateButton.addEventListener('click', generateAdvice);

