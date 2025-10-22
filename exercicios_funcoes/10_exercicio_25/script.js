// function numerosPares(num) {
//   for (; num > 0; num--) {
//     if (num % 2 === 0) {
//       console.log(num)
//     }
//   }
// }

// numerosPares(50)

function imprimePar(num) {
  for (let i = num; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
}

imprimePar(15)
imprimePar(48)