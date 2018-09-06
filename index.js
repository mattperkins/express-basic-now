const express = require('express')
const app = express()

app.get('/dev', (req,res) => {
	res.send('Hello, World!')
})

const PORT = 3000; 
console.log(`Listening on PORT: ${PORT}`)

app.listen(PORT)

app.use(express.static('static'))
