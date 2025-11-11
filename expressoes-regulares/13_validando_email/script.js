const validarEmail = /\w+@\w+\.\w+/

console.log(validarEmail.test('pedro@gmail.com'))
console.log(validarEmail.test('pedro@gmail'))
console.log(validarEmail.test('@gmail.com'))
console.log(validarEmail.test('pedro@gmail.com.br'))
console.log(validarEmail.test('gmail@gmail.gmail.gmail'))
