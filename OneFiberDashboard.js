'use strict';

var express = require('express');
var app = express();
var fs = require('fs');

//var recognize = require('./recognize');
//var record = require('./record');


app.get('/', (req, res) => {
  res.send('Hello<br><a href="/auth">Log in with amazon</a>');
});

app.get('/getFilterForSummary', (req, res) => {
  console.log('Called getFilterForSummary');
  var contents = fs.readFileSync("data.json");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  res.send(contents);

});

app.get('/getDataForSites', (req, res) => {
  console.log('Called getDataForSites');
  var contents = fs.readFileSync("SitesData.json");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  res.send(contents);

});


app.listen(3000, () => {
  console.log('Express server started on port 3000'); // eslint-disable-line
});



// Credits to [@lazybean](https://github.com/lazybean)
