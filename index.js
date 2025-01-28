const container = document.querySelector('.container');
const color = document.querySelector('input');

const defaultColor = '#fff';
container.style.backgroundColor = `${defaultColor}`;

function onChangeBg(){
    container.style.backgroundColor = `${color.value}`
}


// Nesse código, utilizei variáveis para armazenar elementos do HTML com o querySelector e depois a utilizei para alterar a cor de fundo com base na preferência do usuário.