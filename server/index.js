var express = require('express');
var randomName = require('random-name');
//var predict = require("brain-predict");
//var fs = require('fs');
//var path = require('path');
//var flatfile = require('flat-file-db');
//var db = flatfile('flat/my.db');

const low = require('lowdb')
const fileAsync = require('lowdb/lib/file-async')
const db = low('db.json', {
  storage: fileAsync
})

db.defaults({ posts: [], user: {},random:[] })
  .value()


var app = express();

app.use(express.static('client'));

app.get('/', function (req, res) {

  res.sendfile('client/experto.html');
//  res.sendfile('client/cricsim.html');
//    res.sendfile('client/merchant.html');

});

app.get('/mail', function (req, res) {

  res.sendfile('client/mail.html');
//  res.sendfile('client/cricsim.html');
//    res.sendfile('client/merchant.html');

});

app.get('/test', function (req, res) {

  // var data = {
  //   name:"praveen",
  //   age:"26"
  // }

  //REFER lowdb

  //https://github.com/typicode/lowdb

  db.get('posts')
    .push({ id: 1, title: 'lowdb is awesome'})
    .value()

  db.set('user.name', 'typicode')
    .value()

    for (var i = 0; i < 2; i++) {
        console.log(randomName());
        console.log(randomName.first())
        console.log(randomName.middle())
        console.log(randomName.last())

        //also, random place name!
        console.log(randomName.place())

        db.get('random').push(
          {name:randomName()}
        ).value()
    }

  var data = db.get('random');


  res.send(data);

});

var server = app.listen(3003, function () {
    var host = server.address().address;
    var port = server.address().port;

    

    console.log('Experto listening at http://%s:%s', host, port);
});
