const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./trashtalk_generator')
const app = express()
const port = 3000

const helper = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    eq: function (v1, v2) { return (v1 === v2) }
  }
})

app.engine('handlebars', helper.engine)
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req.body', req.body, req)
  const options = req.body
  const trashTalk = generateTrashTalk(options)
  res.render('index', { trashTalk: trashTalk, options: options })
})

app.listen(port, () => {
  console.log(`The Express server is listen on http://localhost:${port}`)
})

