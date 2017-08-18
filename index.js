var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(bodyParser.json())

app.use('/static', express.static(__dirname + '/build/static'))
app.use(express.static(__dirname + '/website'))

app.post('/webhook', function (req, res) {
  const response = req.body.form_response
  const emitKey = `image_${response.form_id}`

  response.answers.filter((answer) => {
    return answer.type === 'file_url'
  }).forEach((file) => {
    io.emit(emitKey, {
      src: file.file_url
    })
  })

  res.status(200).end()
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/website/index.html')
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

io.on('connection', function (socket) {
  console.log('a user connected')
})

http.listen(3005, function () {
  console.log('listening on *:3005')
})
