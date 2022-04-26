require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//handlebar
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


//servir contenido estatico
app.use(express.static('public'));

//Cuando se usa el midleware anterior no es necesario el codigo siguiente comentado
// app.get('/',  (req, res) => {
//   res.send('Home Page')
// });

app.get('/',  (req, res) => {
  res.render('home', {
      nombre: 'Jose Ledezma',
      titulo: 'Curso de Node'
  });
});

app.get('/generic',  (req, res) => {
    //   res.send('texto');
      // res.sendFile(__dirname +'/public/generic.html');
      res.render('generic', {
        nombre: 'Jose Ledezma',
        titulo: 'Curso de Node'
    });
});

app.get('/elements',  (req, res) => {
    //   res.send('texto');
      // res.sendFile(__dirname +'/public/elements.html');
      res.render('elements', {
        nombre: 'Jose Ledezma',
        titulo: 'Curso de Node'
    });
});

app.get('*',  (req, res) => {
//   res.send('texto');
  res.sendFile(__dirname +'/public/404.html');
});


// app.listen(8080)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })