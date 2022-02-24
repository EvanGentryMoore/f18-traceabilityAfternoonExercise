const express = require('express');
const path = require('path')

const app = express()


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


const port = process.env.PORT || 8534

app.listen(port, () => console.log(`Limping and skimping on ${port}`))