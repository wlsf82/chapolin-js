const { numeroAleatorio } = require('./utiliarios')

function liquido() {
  const liquidos = [
    'Delibitador potencial',
    'Extrato de energia volátil',
    'Tinta invisibilizadora'
  ]

  return liquidos[numeroAleatorio(liquidos)]
}

module.exports = liquido
