const express = require('express')
const app = express()
const testeController = require('./controller/testeController')

app.use(express.json())

app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static('./assets/js'))
app.use(express.static('./assets/css'))
app.use(express.static('./assets/image'))

app.use('/', testeController)

app.listen('3000', () => console.log("Servidor rodando na porta 3000"))