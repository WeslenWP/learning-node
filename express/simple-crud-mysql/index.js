const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./models/Post');

/* Config */
// Template engine
app.engine('handlebars', handlebars.engine({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  }
}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**Fim Config */

app.get('/', (req, res) => {
  Post.findAll({ order: [['id', 'DESC']] }).then((data) => {
    res.render('home', { posts: data })
  })
});

app.get('/add', (req, res) => {
  res.render('form');
});

app.post('/add', (req, res) => {
  const data = {
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  };
  Post.create(data)
    .then(() => {
      res.status(201).redirect('/');
    })
    .catch((err) => {
      res.status(500).send('Erro: ' + err);
    });
});

app.get('/delete/:id', (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
  res.redirect('/');
})

app.get('/update/:id', (req, res) => {
  Post.findOne({ where: { id: req.params.id } }).then((data) => {
    res.render('update-form', { post: data })
  })
})

app.post('/update/:id', (req, res) => {
  console.log(req.body)
  Post.update({ titulo: req.body.titulo, conteudo: req.body.conteudo }, {
    where: {
      id: req.params.id
    }
  })
  .then((_)=>res.redirect('/'))
  .catch((err) => { res.send(err) })
})

/* Start Server */
app.listen(3001, () => { console.log('Servidor rodando em http://localhost:3001') });