const { numeroAleatorio } = require('./utiliarios')

function fraseClassica() {
  const episodios = [
    'Não contavam com minha astúcia!',
    'Sigam-me os bons',
    'Meus movimentos são friamente calculados'
  ]

  return episodios[numeroAleatorio(episodios)]
}

module.exports = fraseClassica
