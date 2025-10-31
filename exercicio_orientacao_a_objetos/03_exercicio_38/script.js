class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua
    this.bairro = bairro
    this.cidade = cidade
    this.estado = estado
  }

  set novaRua(novaRua) {
    this.rua = novaRua
  }

  set novoBairro(novoBairro) {
    this.bairro = novoBairro
  }

  set novaCidade(novaCidade) {
    this.cidade = novaCidade
  }

  set novoEstado(novoEstado) {
    this.estado = novoEstado
  }
}

let endereco = new Endereco('Rua x', 'Barro y', 'Cidade Z', 'Estado Foo')

console.log(endereco)

endereco.novaRua = 'Rua yxz'

console.log(endereco)

endereco.novaCidade = 'Sao Paulo'

console.log(endereco)
