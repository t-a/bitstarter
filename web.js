var express = require('express');


var fs = require('fs');

var msg = fs.readFileSync('index.html', 'utf8', function (err, data) {
  if (err) throw err;
  return data;
});



var app = express.createServer(express.logger());

app.get('/', function(request, response) {
		
  response.send(msg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
