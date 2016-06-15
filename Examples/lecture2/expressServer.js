'use strict';

const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.send('I\'m alive!');
});

app.listen(8080, function(){
  console.log('Listening on port 8080...');
});