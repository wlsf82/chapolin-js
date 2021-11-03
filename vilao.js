const { numeroAleatorio } = require('./utiliarios')

function vilao() {
  const viloes = [
    'Chinezinho',
    'Poucas Trancas',
    'Rasga Bucho',
    'Racha Cuca',
    'Bruna Varatuxa'
  ]

  return viloes[numeroAleatorio(viloes)]
}

module.exports = vilao
