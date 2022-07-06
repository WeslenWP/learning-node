const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => { console.log("Conectado com sucesso") })
  .catch((error) => { console.log("Falha ao se conectar: " + error) })

const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})

/* 
 *Cria a tabela

  Postagem.sync({force: true})
*/

/*
  *Insere os dados na tabela Postagem

  Postagem.create({
    titulo: "Postagem 1",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia officiis doloribus cumque reiciendis libero minus magnam blanditiis dolor assumenda impedit temporibus obcaecati facilis sequi consequuntur esse ipsam expedita, delectus omnis."
  })
*/


