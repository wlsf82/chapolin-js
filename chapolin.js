function numeroAleatorio(array) {
  return Math.floor(Math.random() * array.length)
}

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

function episodioPerdido() {
  const episodios = [
    'Aparição do Chimpandolfo no episódio do poço d\'água com o Racha Cuca',
    'A caranguinha do Dr. Chapatin',
    'Tribo Discoteca'
  ]

  return episodios[numeroAleatorio(episodios)]
}

function fraseClassica() {
  const episodios = [
    'Não contavam com minha astúcia!',
    'Sigam-me os bons',
    'Meus movimentos são friamente calculados'
  ]

  return episodios[numeroAleatorio(episodios)]
}

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

function liquido() {
  const liquidos = [
    'Delibitador potencial',
    'Extrato de energia volátil',
    'Tinta invisibilizadora'
  ]

  return liquidos[numeroAleatorio(liquidos)]
}

function naoVilao() {
  const viloes = [
    'Camponesa de nobre coração que vai todos os dias ao bosque recolher lenha',
    'Chimpandolfo',
    'Professor Baratinha'
  ]

  return viloes[numeroAleatorio(viloes)]
}

function objeto() {
  const objetos = [
    'Aerolito',
    'Marreta biônica',
    'Pílola de nanicolina',
    'Buzina paralizadora',
    'Caderninho de anotações'
  ]

  return objetos[numeroAleatorio(objetos)]
}

function coisasAleatoriasDoChapolin() {
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

coisasAleatoriasDoChapolin()
