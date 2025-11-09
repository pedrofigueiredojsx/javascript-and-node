const cep = /\d{5}-\d{3}/

console.log(cep.test('88117-500'))
console.log(cep.test('dsf'))
console.log(cep.test('887-500'))
console.log(cep.test('99999-999'))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/

console.log(tel.test('(48)9999-9999'))
console.log(tel.test('(48)99959-9999'))