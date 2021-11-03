const { numeroAleatorio } = require('./utiliarios')

function episodioPerdido() {
  const episodios = [
    'Aparição do Chimpandolfo no episódio do poço d\'água com o Racha Cuca',
    'A caranguinha do Dr. Chapatin',
    'Tribo Discoteca'
  ]

  return episodios[numeroAleatorio(episodios)]
}

module.exports = episodioPerdido
