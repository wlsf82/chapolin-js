const { numeroAleatorio } = require('./utiliarios')

function naoVilao() {
  const viloes = [
    'Camponesa de nobre coração que vai todos os dias ao bosque recolher lenha',
    'Chimpandolfo',
    'Professor Baratinha'
  ]

  return viloes[numeroAleatorio(viloes)]
}

module.exports = naoVilao
