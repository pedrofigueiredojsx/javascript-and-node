let num = 1
let num1 = 5
let num2 = 3
let num3 = 4

function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i])
  }
}

imprimirNumeros(num, num1, num2)
console.log('pausa')
imprimirNumeros(num2, num3)
console.log('pausa')
imprimirNumeros(2, 3, 4, 1, 6, 2, 5, 7, 8)
