// start webserver on port 8080
// serve static files from public folder
// serve index.html on root

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// redirect url /copilot to copilot.github.com
app.get('/copilot', function (req, res) {
    res.redirect('http://copilot.github.com');
});

app.listen(8080, function () {
    console.log('server started on port 8080');
});
