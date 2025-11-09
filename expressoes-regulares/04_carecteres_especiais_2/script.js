const dia = /\d\d/

console.log(dia.test('2025') && '2025'.length === 2)
console.log(dia.test('qwe'))
console.log(dia.test('05') && '05'.length === 2)
console.log(dia.test('adwe5'))

const palavraPeloMenosTresLetras = /\w\w\w/

console.log(palavraTresLetras.test('djx'))
console.log(palavraTresLetras.test('djxx'))
console.log(palavraTresLetras.test('dj'))
