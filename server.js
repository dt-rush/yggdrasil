process.on ('uncaughtException', function (exception) {
  console.log (exception); // to see your exception details in the console
  // if you are on production, maybe you can send the exception details to your
  // email as well ?
});

var express = require ('express');

var app = express();

// respond with "hello world" when a GET request is made to the homepage
// app.get ('/', function (req, res) {
//   res.send ('hello world');
// });

app.get ('/*', function (req, res) {
  res.send (req.params);
  var story = req.params ['0'].split ('/');
  console.log (story);
});



app.listen (3000, function () {
  console.log ('Example app listening on port 3000!');
});