var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');



var app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    console.log(req);
  var todo = new Todo({
    text:req.body.text
  });
  todo.save().then((result)=>{
    res.send(result);
  },(errorMessage)=>{
    res.send({Error:'Unable to save the todo'});
  });

});

app.post('/users',(req,res)=>{
  console.log(req.body);
  var user = new User({
    name:req.body.name,
    email:req.body.email,
    age:req.body.age
  });
  user.save().then((result)=>{
    res.send(result);
  },(errorMessage)=>{
    res.send({Error:'Unable to save the user',
              message:errorMessage
            });
  });
});

app.listen(3000,()=>{
  console.log('App is listening at port 3000 ');
});
