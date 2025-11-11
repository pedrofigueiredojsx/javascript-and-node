const validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(validarNomeUsuario.test('pedro_123'))
console.log(validarNomeUsuario.test('sa'))
console.log(validarNomeUsuario.test('12111111111111111111'))