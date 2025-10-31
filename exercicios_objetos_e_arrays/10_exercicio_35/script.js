const calculadora = {
  somar(a, b) {
    return a + b
  },
  subtrair(a, b) {
    return a - b
  },
  divir(a, b) {
    return a / b
  },
  multiplicar(a, b) {
    return a * b
  },
}

const calculadoraProf = {
  somar: function (a, b) {
    return a + b
  },
  subtrair: function (a, b) {
    return a - b
  },
  divir: function (a, b) {
    return a / b
  },
  multiplicar: function (a, b) {
    return a * b
  },
}

console.log(calculadora.somar(1, 3))
console.log(calculadora.subtrair(7, 1))
console.log(calculadora.divir(10, 2))
console.log(calculadora.multiplicar(3, 3))
