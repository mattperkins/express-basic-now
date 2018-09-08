const express = require('express')
const app = express()
require('dotenv').config()

app.get('/dev', (req,res) => {
	res.send('<h1>Development route</h1>')
})

app.get('/json', (req,res) => {
    res.json({
	endpoint: '/json ' + process.env.DATA_DUMP})
})

const PORT = 3000; 

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))

app.use(express.static('static'))
