function checarNumero(num) {
  let number = Number(num)
  if (Number.isNaN(number)) {
    alert('Por favor, passe só numeros para o programa')
  } else {
    return number
  }
}

// checarNumero(5)
// checarNumero('12')
// checarNumero('asdasds')

let number = prompt('Digite um numero')

checarNumero(number)