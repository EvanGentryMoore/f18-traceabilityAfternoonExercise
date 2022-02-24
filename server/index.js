const express = require('express');
const path = require('path')

// include and initialize the rollbar library with your access token
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: 'bdeefe80bc24430a949d62816c5f9580',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar

const app = express()


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

rollbar.log("Hello world!");

const port = process.env.PORT || 8534

app.listen(port, () => console.log(`Limping and skimping on ${port}`))