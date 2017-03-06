const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());


// serve static files
app.use(express.static(path.join(__dirname, '../src/')));
app.use(express.static(path.join(__dirname, '../node_modules')));


app.get('/api/videodata', (req, res) => {
  request({
    method: 'GET',
    url: 'https://content.jwplatform.com/feeds/f49AJ8N4.json',
  }, (err, response, body) => {
    if (err) {
      console.log('JW Feeds API error: ', err);
    }
    res.send(body);
  })
});

// set port
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) {
    console.log('Error with server: ', err);
  } else {
    console.log('Server listening on port: ', port);
  }
});
