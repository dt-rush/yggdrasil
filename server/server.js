process.on ('uncaughtException', function (exception) {
  console.log (exception); // to see your exception details in the console
  // if you are on production, maybe you can send the exception details to your
  // email as well ?
});

var express = require ('express');

var app = express();
// var app = connect().use(connect.static('public')).listen(3000, "0.0.0.0");

// respond with "hello world" when a GET request is made to the homepage
// app.get ('/', function (req, res) {
//   res.send ('hello world');
// });

app.use (express.static ('dist'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get ('/*', function (req, res) {
  res.send (req.params);
  var story = req.params ['0'].split ('/');
  console.log (story);
});



app.listen (3000, '0.0.0.0', function () {
  console.log ('Example app listening on port 3000!');
});
