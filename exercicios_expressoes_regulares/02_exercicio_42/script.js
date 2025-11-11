const validarId = /\d+ID\b/

console.log(validarId.test('2131289389123ID'))
console.log(validarId.test('2131289389123'))
console.log(validarId.test('asdas'))
console.log(validarId.test('asdfaID'))
console.log(validarId.test('ID'))
console.log(validarId.test('IDasdsads'))
console.log(validarId.test('ID12312412'))
console.log(validarId.test('1412412ID'))