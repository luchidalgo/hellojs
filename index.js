const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<html><style>h1 { color: red }</style><h1>Hello World!</h1><a href="http://www.google.fr">un lien vers google</a></html>')
})

app.get('/test', (req, res) => {
    console.log("Quelqu'un à fait un test")
    res.send('Test réussi!')
})

app.listen(port, () => {
  console.log(`Je suis prêt et à l'écoute sur le port ${port}`)
})