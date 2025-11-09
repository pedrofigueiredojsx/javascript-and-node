const reg1 = /[12345]/

console.log(reg1.test('temos o número 6'))
console.log(reg1.test('temos o número 3'))
console.log(reg1.test('temos o número 23'))
console.log(reg1.test('temos o número 60'))

const reg2 = /[0-9]/

console.log(reg2.test('Temos o número de 012930193012'))
console.log(reg2.test('Temos o número'))