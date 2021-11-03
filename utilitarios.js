function numeroAleatorio(array) {
  return Math.floor(Math.random() * array.length)
}

function dadoAleatorio(array) {
  return array[numeroAleatorio(array)]
}

module.exports = { dadoAleatorio }
