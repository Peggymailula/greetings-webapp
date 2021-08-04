let express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const Greetings= require('./greetings');


let app = express();
const greetings = Greetings();


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get("/", function(req, res){
  res.render("index",
  {
   greet: greetings.getName(),
  message: greetings.getMessage()
});
});

app.post("/greeted",function(req,res){
    //displays a list of all the users that have been greeted.
  
    // greetings.greetNow({
    //   userName: req.body.nameInput,
    //   languageSet:req.body.radioLang });

    //   console.log(greetings.getMessage());


      
});
app.post("/greet",function(req,res){

   greetings.setName({
     names:req.body.nameInput});

    greetings.setLang({
      value: req.body.radioLang
    });

    greetings.getMessage();

   console.log( greetings.getName());

   res.redirect("/");
});

app.post("/counter",function (res,req){
  // shows how many times a user has been greeted. Display a message like this: Hello, <USER_NAME> has been greeted <COUNTER> times
});

app.post("/counter/<USER_NAME>",function (res,req){
  // shows how many times a user has been greeted. Display a message like this: Hello, <USER_NAME> has been greeted <COUNTER> times
});

app.get("/greeted",function(res,req){
//where you can click on a user in the list to see how many time the user has been greeted.

});



let PORT = process.env.PORT || 3012;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});