const umOuMaisNumeros = /\d+/

console.log(umOuMaisNumeros.test(124512))
console.log(umOuMaisNumeros.test(''))
console.log(umOuMaisNumeros.test('asdasdasd'))
console.log(umOuMaisNumeros.test('1'))
console.log(umOuMaisNumeros.test('2332121'))