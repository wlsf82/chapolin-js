const { dadoAleatorio } = require('./utilitarios')
const viloes = require('./viloes')
const episodiosPerdidos = require('./episodiosPerdidos')
const frasesClassicas = require('./frasesClassicas')
const noticias = require('./noticias')
const liquidos = require('./liquidos')
const naoViloes = require('./naoViloes')
const objetos = require('./objetos')
const ditosPopulares = require('./ditosPopulares')
const palavrasMagicas = require('./palavrasMagicas')

function coisasAleatoriasDoMundoChapolin() {
  console.log('Mais rápido que uma tartaruga.')
  console.log('Mais forte que um rato.')
  console.log('Mais inteligente que um asno.')
  console.log('Ele é o...')
  console.log('CHAPOLIN!')

  console.log('Vejamos alguns dados aleatórios do mundo Chapolin.')
  setTimeout(() => {
    console.log(`Vilão: ${dadoAleatorio(viloes)}`)
    console.log(`Episódio perdido: ${dadoAleatorio(episodiosPerdidos)}`)
    console.log(`Frase clássica: ${dadoAleatorio(frasesClassicas)}`)
    console.log(`Notícia: ${dadoAleatorio(noticias)}`)
    console.log(`Líquido: ${dadoAleatorio(liquidos)}`)
    console.log(`Personagem não-vilão: ${dadoAleatorio(naoViloes)}`)
    console.log(`Objeto: ${dadoAleatorio(objetos)}`)
    console.log(`Ditados populares: ${dadoAleatorio(ditosPopulares)}`)
    console.log(`Palavras mágicas: ${dadoAleatorio(palavrasMagicas)}`)
  }, 2000)
}

coisasAleatoriasDoMundoChapolin()
