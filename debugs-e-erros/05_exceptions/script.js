function saudacao(nome) {
  if (typeof nome != 'string') {
    throw new Error('o parametro nome precisa ser string')
  } else {
    console.log(`Ola ${nome}`)
  }
}

saudacao('Pedro')
saudacao(5)
