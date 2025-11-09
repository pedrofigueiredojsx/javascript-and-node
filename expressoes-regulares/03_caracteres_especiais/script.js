const pontoRegex = /./
console.log('.')
console.log(pontoRegex.test('asdasd'))
console.log(pontoRegex.test(' '))
console.log(pontoRegex.test('1223'))
console.log(pontoRegex.test('122asdasd3'))
console.log(pontoRegex.test('@@##$'))

const dRegex = /\d/ // [0-9]
console.log('d')
console.log(dRegex.test('asdasd'))
console.log(dRegex.test(' '))
console.log(dRegex.test('1223'))
console.log(dRegex.test('122asdasd3'))
console.log(dRegex.test('@@##$'))

const dRegex2 = /\D/ // [^0-9]
console.log('D')
console.log(dRegex2.test('asdasd'))
console.log(dRegex2.test(' '))
console.log(dRegex2.test('1223'))
console.log(dRegex2.test('122asdasd3'))
console.log(dRegex2.test('@@##$'))

const sRegex = /\s/
console.log('s')
console.log(sRegex.test('asdasd'))
console.log(sRegex.test(' '))
console.log(sRegex.test('1223'))
console.log(sRegex.test('122asdasd3'))
console.log(sRegex.test('@@##$'))

const wRegex = /\w/
console.log('w')
console.log(wRegex.test('asdasd'))
console.log(wRegex.test(' '))
console.log(wRegex.test('1223'))
console.log(wRegex.test('122asdasd3'))
console.log(wRegex.test('@@##$'))
