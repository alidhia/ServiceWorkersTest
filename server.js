var express = require('express');

var app = express();

app.use(express.static(__dirname + '/wwwroot'))

app.get('/',function(req,res){
  res.sendFile(__dirname+'/wwwroot/index.html');
  //__dirname : It will resolve to your project folder.
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})