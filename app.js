// app.js
// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const trashTalkGenerator = require('./trash_talk_generator.js')

const app = express()
const port = 3000

// setting static files
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes setting
app.get('/', (req, res) => {
  // create a variable to store movies

  // past the movie data into 'index' partial template
  //   res.end("Hello World!")
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const trashTalk = trashTalkGenerator(options)

  const target = {
    engineer: 'engineer' === options.target,
    designer: 'designer' === options.target,
    entrepreneur: 'entrepreneur' === options.target
  }

  console.log('Trash Talk is: ', trashTalk, target)

  res.render('index', { trashTalk: trashTalk, target: target})
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on  http://localhost:${port}`)
})