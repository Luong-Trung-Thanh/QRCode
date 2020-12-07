
const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/login',function(req,res){
 var student =  req.query;
res.send(`${student.username} ${student.password}`)


});
app.get('/',function(req,res){
  res.send('hello word');
 console.log("vo day la gui request duoc roi ne");
});
const server = app.listen(process.env.PORT || 3000, function() {
  console.log("Server up and listening");
});