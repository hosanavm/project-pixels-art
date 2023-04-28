function escolheCor(event) {
    const selecionaCor = document.querySelector('.selected');// pega o elemento com a classe selected 
    selecionaCor.classList.remove('selected');// remove a classe
    event.target.classList.add('selected');// adiciona a classe ao clicar
}

const corPaleta = document.querySelector('#colorOne');
corPaleta.addEventListener('click', escolheCor); // evento que seleciona a cor ao clicar

const corPaletaTwo = document.querySelector('#colorTwo');
corPaletaTwo.addEventListener('click', escolheCor); // evento que seleciona a cor ao clicar

const corPaletaThree = document.querySelector('#colorThree');
corPaletaThree.addEventListener('click', escolheCor); // evento que seleciona a cor ao clicar

const corPaletaFour = document.querySelector('#colorFour');
corPaletaFour.addEventListener('click', escolheCor); // evento que seleciona a cor ao clicar