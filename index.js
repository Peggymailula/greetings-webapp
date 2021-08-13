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
  req.flash('success', 'Reset succesful!')

  res.render("index",
    {
      message,
      count,
      list
    });


});

app.post("/greet", function (req, res) {

  greetings.greetNow(
    req.body.radioLang
  );

  greetings.setName(req.body.nameInput);
  greetings.getName();

  message = greetings.greetNow(req.body.radioLang);
  count = greetings.getCounter();
  res.redirect("/");
});

app.get("/greeted", function (req, res) {

  res.render('greeted', {
   list : greetings.getNames()
})
  

  //res.redirect("/");
});

app.get("/counter/", function (req, res) {

  res.render('greeted', {
   list : greetings.getNames()
})
  

  //res.redirect("/");
});

app.post("/", function (req, res) {
  list = greetings.getNames();
  console.log(list);

  res.redirect("/");
});

let PORT = process.env.PORT || 3012;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});