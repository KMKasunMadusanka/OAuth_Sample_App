var http = require("http");
const axios = require('axios');
const express = require("express");
const bodyParser = require("body-parser");
const cross = require("./cross.js");

const PORT = 5000;

const app = express();
app.use(bodyParser.json());
app.use(cross);


app.post('/accessToken', (req, res, next) => {

  axios.post('https://github.com/login/oauth/access_token', {
    "client_id": "50f6f7c85489adbadbb9",
    "client_secret": "ced587440384d09cca2b713c35de4d2c52152e52",
    "code": req.body.code,
    "redirect_uri": "http://localhost:4200/mainPage",
    "state": "123456"
  })
    .then(function (response) {
      console.log(response.data.split('&')[0].split('=')[1]);
      res.send({ "access_token": response.data.split('&')[0].split('=')[1] })
    })
    .catch(function (error) {
      console.log(error);
    });
})

app.post('/userData', (req, res, next) => {
  axios.get('https://api.github.com/user?access_token='+req.body.accessToken)
    .then(function (userdata) {
      res.send(userdata.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});


app.listen(PORT, () => {
  console.log("Server runs on port : " + PORT);
});
