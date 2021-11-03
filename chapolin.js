const vilao = require('./vilao')
const episodioPerdido = require('./episodioPerdido')
const fraseClassica = require('./fraseClassica')
const noticia = require('./noticia')
const liquido = require('./liquido')
const naoVilao = require('./naoVilao')
const objeto = require('./objeto')

function coisasAleatoriasDoMundoChapolin() {
  console.log('Mais rápido que uma tartaruga.')
  console.log('Mais forte que um rato.')
  console.log('Mais inteligente que um asno.')
  console.log('Ele é o...')
  console.log('CHAPOLIN!')

  console.log('Vejamos alguns dados aleatórios do mundo Chapolin.')
  console.log(`Vilão: ${vilao()}`)
  console.log(`Episódio perdido: ${episodioPerdido()}`)
  console.log(`Frase clásica: ${fraseClassica()}`)
  console.log(`Notícia: ${noticia()}`)
  console.log(`Líquido: ${liquido()}`)
  console.log(`Personagem não-vilão: ${naoVilao()}`)
  console.log(`Objeto: ${objeto()}`)
}

coisasAleatoriasDoMundoChapolin()
