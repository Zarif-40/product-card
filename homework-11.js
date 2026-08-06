const form = document.querySelector('.footer__form');
const emailInput = document.querySelector('.footer__input');

form.addEventListener('submit', (event) => {
event.preventDefault();
 const emailValue = emailInput.value;
 console.log({email: emailValue});
 form.reset();
});