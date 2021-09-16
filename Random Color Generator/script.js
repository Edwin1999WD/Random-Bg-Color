const body = document.querySelector('body');
const titulo = document.getElementById('titulo');
const button = document.querySelector('button');

button.addEventListener('click', ()=> {
  let color = '#';
  // GENERAR NUMERO HEXAGONAL ALEATORIO
   color += Math.random().toString(16).slice(2,8);
   // CAMBIAR BACKGROUND COLOR
   body.style.backgroundColor = color;
   titulo.innerText = color;
});