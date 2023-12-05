const input = document.querySelector('login-input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', login-Imput.value);
  window.location = 'pages/game.html';
  
}





form.addEventListener('submit', handleSubmit);
input.addEventListener('input', validateInput);

