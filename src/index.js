var express = require('express')
var app = express()
//var bodyParser = require('body-parser')
//var http = require('http').Server(app)
//var io = require('socket.io')(http)

//app.use(bodyParser.json())

app.set('port', (process.env.PORT || 3005));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//app.use('/static', express.static(__dirname + '/build/static'))
//app.use(express.static(__dirname + '/website'))

/*
app.post('/webhook', function (req, res) {
  const response = req.body.form_response
  //const emitKey = `image_${response.form_id}`
  response.answers.filter((answer) => {
    return answer.type === 'file_url'
  }).forEach((file) => {
    io.emit(emitKey, {
      src: file.file_url
    })
  })
  console.log('response', response);
  res.status(200).end()
})
*/

app.get('/', function (request, response) {
  //res.sendFile(__dirname + '/website/index.html')
  console.log('get (slash))');
  //response.render('pages/index');
})
/*
io.on('connection', function (socket) {
  console.log('a user connected')
})
*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
