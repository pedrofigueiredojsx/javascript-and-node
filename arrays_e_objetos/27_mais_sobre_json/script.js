let pessoa = {
  "nome": "Pedro",
  "idade": 27,
  "profissao": "Programador",
  "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa)
// console.log(pessoaTexto.nome)
console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)
console.log(pessoaJSON)
console.log(pessoaJSON.hobbies[0])