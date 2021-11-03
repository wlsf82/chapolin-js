const { numeroAleatorio } = require('./utiliarios')

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

module.exports = objeto
