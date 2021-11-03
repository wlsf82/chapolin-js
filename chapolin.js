const { dadoAleatorio } = require('./utilitarios')

const viloes = require('./dados/viloes')
const episodiosPerdidos = require('./dados/episodiosPerdidos')
const frasesClassicas = require('./dados/frasesClassicas')
const noticias = require('./dados/noticias')
const liquidos = require('./dados/liquidos')
const naoViloes = require('./dados/naoViloes')
const objetos = require('./dados/objetos')
const ditosPopulares = require('./dados/ditosPopulares')
const palavrasMagicas = require('./dados/palavrasMagicas')
const apelidos = require('./dados/apelidos')

coisasAleatoriasDoMundoChapolin()

function coisasAleatoriasDoMundoChapolin() {
  console.log('')
  console.log('Mais rápido que uma tartaruga.')
  console.log('Mais forte que um rato.')
  console.log('Mais inteligente que um asno.')
  console.log('Ele é o...')
  console.log('CHAPOLIN!')
  console.log('')
  console.log('Vejamos alguns dados aleatórios do mundo Chapolin.')
  console.log('')

  setTimeout(() => {
    console.log(`Vilão: ${dadoAleatorio(viloes)}`)
    console.log(`Episódio perdido: ${dadoAleatorio(episodiosPerdidos)}`)
    console.log(`Frase clássica: ${dadoAleatorio(frasesClassicas)}`)
    console.log(`Notícia: ${dadoAleatorio(noticias)}`)
    console.log(`Líquido: ${dadoAleatorio(liquidos)}`)
    console.log(`Personagem não-vilão: ${dadoAleatorio(naoViloes)}`)
    console.log(`Objeto: ${dadoAleatorio(objetos)}`)
    console.log(`Ditado popular: ${dadoAleatorio(ditosPopulares)}`)
    console.log(`Palavra mágica: ${dadoAleatorio(palavrasMagicas)}`)
    console.log(`Apelido: ${dadoAleatorio(apelidos)}`)
  }, 2000)
}
