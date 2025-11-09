// let b = 2

try {
  let a = 2 + b
} catch (error) {
  console.log(error)
  // throw new Error(error)
} finally {
  console.log('Executou')
}

console.log('teste')
