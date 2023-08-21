const express = require('express')
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path');

const port = process.env.PORT || 5000;

dotenv.config()

let spotify_client_id = process.env.SPOTIFY_CLIENT_ID
let spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

let spotify_redirect_uri = `${process.env.ENVHOST}auth/callback`;

global.access_token = ''

let app = express();

function generateRandomString(length){
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

app.get('/auth/login', (req, res) => {
  var scope = "streaming user-read-email user-read-private"
  var state = generateRandomString(16);

  var auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: spotify_redirect_uri,
    state: state
  })

  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
});

app.get('/auth/callback', (req, res) => {
  let code = req.query.code;

  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    data: {
      code: code,
      redirect_uri: spotify_redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    json: true
  };

  axios(authOptions).then(response => {
    if(response.status === 200){
      console.log(response.data.access_token);
      access_token = response.data.access_token;
      res.redirect('/');
    }
  });

});

app.get('/auth/token', (req, res) => {
  res.json(
     {
        access_token: access_token
     })
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

//app.use(express.static(path.join(__dirname, '../build')));
