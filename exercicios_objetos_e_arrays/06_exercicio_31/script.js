let numeros = [2, 3, 5, 12, 7, 76, 23]
let nomes = ['Pedro', 'Matheus']

function verificarTamanhoArray(array) {
  if (array.length > 5) {
    console.log('Muitos elementos')
  } else {
    console.log('Poucos elementos')
  }
}

verificarTamanhoArray(numeros)
verificarTamanhoArray(nomes)
