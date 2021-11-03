const { numeroAleatorio } = require('./utiliarios')

function noticia() {
  const noticias = [
    'Extra, extra, 14 pessoas enganadas',
    'Extra, extra, 15 pessoas enganadas',
    'Os policiais perseguem os contrabandistas',
    'Acabou a greve das empregadas',
    'Os policiais perseguem as empregadas'
  ]

  return noticias[numeroAleatorio(noticias)]
}

module.exports = noticia
