const pegaDadoAleatorio = require('./pegaDadoAleatorio')

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
const anuncios = require('./dados/anuncios')
const palavrasOuFrasesAleatorias = require('./dados/palavrasOuFrasesAleatorias')

coisasAleatoriasDoMundoChapolin()

function coisasAleatoriasDoMundoChapolin() {
  const DOIS_SEGUNDOS_EM_MS = 2000

  console.log('')
  console.log('Mais rápido que uma tartaruga.')
  console.log('Mais forte que um rato.')
  console.log('Mais inteligente que um asno.')
  console.log('Ele é o...')
  setTimeout(() => {
    console.log('')
    console.log('CHA PO LIN!')
    console.log('')
    setTimeout(() => {
      console.log('Vejamos alguns dados aleatórios do mundo Chaves e Chapolin.')
      setTimeout(() => {
        console.log('')
        console.log(`Vilão: ${pegaDadoAleatorio(viloes)}`)
        console.log(`Episódio perdido: ${pegaDadoAleatorio(episodiosPerdidos)}`)
        console.log(`Frase clássica: ${pegaDadoAleatorio(frasesClassicas)}`)
        console.log(`Notícia: ${pegaDadoAleatorio(noticias)}`)
        console.log(`Líquido: ${pegaDadoAleatorio(liquidos)}`)
        console.log(`Personagem não-vilão: ${pegaDadoAleatorio(naoViloes)}`)
        console.log(`Objeto: ${pegaDadoAleatorio(objetos)}`)
        console.log(`Ditado popular: ${pegaDadoAleatorio(ditosPopulares)}`)
        console.log(`Palavra mágica ou cabalística: ${pegaDadoAleatorio(palavrasMagicas)}`)
        console.log(`Apelido: ${pegaDadoAleatorio(apelidos)}`)
        console.log(`Anúncio: ${pegaDadoAleatorio(anuncios)}`)
        console.log(`Palavra ou frase aleatória: ${pegaDadoAleatorio(palavrasOuFrasesAleatorias)}`)
        console.log('')
        setTimeout(() => {
          console.log(pegaDadoAleatorio())
          console.log('')
        }, DOIS_SEGUNDOS_EM_MS)
      }, DOIS_SEGUNDOS_EM_MS)
    }, DOIS_SEGUNDOS_EM_MS)
  }, DOIS_SEGUNDOS_EM_MS)
}
