class Cachorro {
  constructor(raca, cor) {
    this.raca = raca
    this.cor = cor
  }

  latir() {
    console.log('Au au')
  }
}

Cachorro.prototype.raca = 'SRD'

let labrador = new Cachorro('Laba-drador', 'Amarelo')

let patas = Symbol()

Cachorro.prototype[patas] = 4

console.log(labrador.patas)

labrador.latir()

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)

// acessando symbol
console.log(Cachorro.prototype[patas])
console.log(labrador[patas])
