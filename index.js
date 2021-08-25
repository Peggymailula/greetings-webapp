const flash = require('express-flash');
const session = require('express-session');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const Greetings = require('./greetings');



const app = express();
const greetings = Greetings();

let message = '';
let count = 0;
let list = [];
var success;
var nameValue ='';
var countValue= 0;
var error='';




app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(express.static('public'));

app.use(session({
  secret: "My error messages",
  cookie: {
    maxAge: 2000
  },
  resave: false,
  saveUninitialized: true
}));

// initialise the flash middleware
app.use(flash());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get("/", function (req, res) {


   req.flash('error', greetings.getError());
 // req.flash('success', success)

  res.render("index",
    {
      message,
      count,
      list,
      success,
   
      
    });


});

app.post("/greet", function (req, res) {

  greetings.greetNow(
    req.body.radioLang,
    req.body.nameInput
  );

  greetings.setName(req.body.nameInput);
  console.log(greetings.getName());

  message = greetings.getGreet();
  count = greetings.getCounter();
  res.redirect("/");
});

app.get("/greeted", function (req, res) {

  console.log(greetings.getList());
  

  res.render('greeted', {
   list : greetings.getNames()
})
  

  //res.redirect("/");
});

// app.get("/count/", function (req, res) {
//   const userSelected = req.params.username;
//   res.render('count', {
//       userGreeted: greetings.usernameFor(userSelected)
//   });
// });


app.post("/", function (req, res) {

  
 error= greetings.getError();
  list = greetings.getNames();
  error=greetings.getError();
  console.log(list);

  res.redirect("/");
});


app.post("/reset", function (req, res) {
  success= greetings.clearNames();
 
  count=0;
  message='';

  res.redirect("/");
});

app.get('/count/:names', function(req, res) {
  const userSelected = req.params.names;
  console.log(req.params.names)

  nameValue=greetings.usernameFor(userSelected).name;
  countValue=greetings.usernameFor(userSelected).count
  console.log(nameValue);
  res.render('count', {
     nameValue,
     countValue
  });
});



let PORT = process.env.PORT || 3012;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});