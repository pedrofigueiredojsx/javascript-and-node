async function somar(a, b) {
  return a + b
}

console.log(somar(3, 3))
somar(3, 3).then((value) => console.log(value))
