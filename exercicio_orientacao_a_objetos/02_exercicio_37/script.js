class Carrinho {
  constructor(itens = []) {
    this.itens = itens
    this.qtd = itens.reduce((sum, item) => sum + item.qtd, 0)
    this.valorTotal = itens.reduce((sum, item) => sum + (item.preco * item.qtd), 0)
  }

  addItem(item) {
    let itemExistente = this.itens.find(i => i.id === item.id)
    
    if (itemExistente) {
      itemExistente.qtd += item.qtd
    } else {
      this.itens.push({ ...item })
    }

    this.qtd += item.qtd
    this.valorTotal += item.preco * item.qtd
  }

  removeItem(item) {
    let itemExistente = this.itens.find(i => i.id === item.id)
    
    if (itemExistente) {
      // Se a quantidade a remover é maior ou igual ao que tem, remove o item completamente
      if (item.qtd >= itemExistente.qtd) {
        this.qtd -= itemExistente.qtd
        this.valorTotal -= itemExistente.preco * itemExistente.qtd
        this.itens = this.itens.filter(i => i.id !== item.id)
      } else {
        // Caso contrário, apenas diminui a quantidade
        itemExistente.qtd -= item.qtd
        this.qtd -= item.qtd
        this.valorTotal -= item.preco * item.qtd
      }
    }
  }
}

let carrinho = new Carrinho([
  {
    id: 1,
    nome: 'Camisa',
    qtd: 1,
    preco: 20,
  },
  {
    id: 2,
    nome: 'Calça',
    qtd: 2,
    preco: 50,
  },
])

console.log('Carrinho inicial:', carrinho)

carrinho.addItem({ id: 1, nome: 'Camisa', qtd: 2, preco: 20 })
console.log('Após adicionar 2 camisas:', carrinho)

carrinho.addItem({ id: 3, nome: 'Boné', qtd: 1, preco: 15 })
console.log('Após adicionar 1 boné:', carrinho)

carrinho.removeItem({ id: 1, nome: 'Camisa', qtd: 1, preco: 20 })
console.log('Após remover 1 camisa:', carrinho)

carrinho.removeItem({ id: 3, nome: 'Boné', qtd: 2, preco: 15 })
console.log('Após remover boné (qtd maior que existente):', carrinho)