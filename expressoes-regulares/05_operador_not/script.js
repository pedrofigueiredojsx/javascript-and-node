const notab = /[^ab]/
console.log(notab.test('a'))
console.log(notab.test('Aqui tem a'))

const nottoaz = /[^a-z]/
console.log(nottoaz.test('Aqui tem a'))
console.log(nottoaz.test('2313'))
console.log(nottoaz.test('abs'))

const az = /[a-z]/
console.log(az.test('asdasdqw213qeq'))
