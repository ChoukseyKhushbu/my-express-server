const express = require('express'); //requiring express inside our file
const bodyParser = require('body-parser');

const app = express(); //function having express module
app.use(bodyParser.urlencoded({extended:true})); //bodyparser works with express
//get method of express module which handles the get requests send to server
//the first argument is the location of request (the route where we are going to respond to)
//second argument- callback function that renders the response on the browser after the request is received by server
app.get('/',function(req,res){
  console.log(__dirname);
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  console.log(req.body); //bodyparser will parse the request containing html form data
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Addition of the numbers is "+ result);
});

app.get('/bmicalculator',function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);
  var n = w / (h*h);
  res.send("Your BMI is " + n);
});
//all http requests to server are listened at this port
//establishing port
app.listen(3000,function(){
  console.log('Started listening to port 3000');
});
