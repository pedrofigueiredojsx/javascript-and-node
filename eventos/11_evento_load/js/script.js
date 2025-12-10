// window.addEventListener('load', function () {
//   this.alert('Assine os nossos termos de uso')
// })

window.addEventListener('beforeunload', function (e) {
  event.returnValue = null
})