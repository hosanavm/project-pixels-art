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

function pintar() {
    const pixels = document.querySelectorAll('.pixel');// pega todos os elementos com a classe pixel
    for (let index = 0; index < pixels.length; index += 1) { // percorre os elementos
      const pixelEscolhido = pixels[index];// armazena os pixels
      pixelEscolhido.addEventListener('click', () => { // evento que pinta o pixel
        const corEscolhida = document.querySelector('.selected');// pega a cor com a classe selected
        const cssCor = window.getComputedStyle(corEscolhida);// busca o css do elemento buscado
        const corUsada = cssCor.getPropertyValue('background');// pega a propriedade background
        event.target.style.background = corUsada;// leva o background para o pixel escolhido
      });
    }
  }
  pintar();// chama a função
  // .getComputedStyle encontrado em https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp