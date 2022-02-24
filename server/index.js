const express = require('express');
const path = require('path')

// include and initialize the rollbar library with your access token
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: 'bdeefe80bc24430a949d62816c5f9580',
  captureUncaught: true,
  captureUnhandledRejections: true
});

const app = express()


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/fail'))
    try {
        nonExistentFunction();
      } catch (error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
      }
      
})


const port = process.env.PORT || 8534

app.listen(port, () => console.log(`Limping and skimping on ${port}`))