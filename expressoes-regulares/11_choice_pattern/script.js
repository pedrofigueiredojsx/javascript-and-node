const reg = /\w+: (Pedro|João|Maria)/ // Nome: asdjkasioda

console.log(reg.test("Nome: Pedro"))
console.log(reg.test("Nome: Jose"))
console.log(reg.test("Nome: Maria"))