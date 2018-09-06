const express = require('express')
const app = express()

app.get('/dev', (req,res) => {
	res.send('<h1>Hello, World!</h1>')
})

app.get('/json', (req,res) => {
    res.json({
	endpoint: '/json'})
})

const PORT = 3000; 

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))

app.use(express.static('static'))
