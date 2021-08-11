const flash = require('express-flash');
const session = require('express-session');
let express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const Greetings= require('./greetings');



let app = express();
const greetings = Greetings();

let message= '';
let count = 0;
var naming;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static('public'));

app.use(session({
  secret : "My error messages",
  resave: false,
  saveUninitialized: true
}));

// initialise the flash middleware
app.use(flash());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get("/", function(req, res){
  req.flash('error', greetings.getName().errormsg);
  res.render("index",
  {
    message,
   count 
});

// req.flash('info', 'Flash Message Added');

});




app.post("/greet",function(req,res){

   

    greetings.greetNow(
      req.body.radioLang
);

greetings.setName(req.body.nameInput);
greetings.getName();
     
   message = greetings.greetNow(req.body.radioLang);
   count = greetings.getCounter();

 
   console.log(message);
  
   res.redirect("/");
});




let PORT = process.env.PORT || 3012;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});