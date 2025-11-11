const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(validaMarca.test('Marca: Nike'))
console.log(validaMarca.test('Marca: ddf'))
console.log(validaMarca.test('Marca: 232'))
console.log(validaMarca.test('Marca: '))
console.log(validaMarca.test('232s'))