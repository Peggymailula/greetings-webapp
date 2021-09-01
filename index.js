const flash = require('express-flash');
const session = require('express-session');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const pg = require("pg");
const Pool = pg.Pool;

// should we use a SSL connection
let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local){
    useSSL = true;
}


const Greetings = require('./greetings');

const connectionString = process.env.DATABASE_URL ||'postgresql://codex:pg123@localhost:5432/greeting';


const pool = new Pool({
 connectionString,
  ssl: {
    rejectUnauthorized:false
  }
});

const app = express();


let message = '';
let count = 0;
let list = [];
var success;
var nameValue ='';
var countValue= 0;





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
app.use(bodyParser.json());




const greetings = Greetings(pool);

console.log(pool);

app.get("/", async function  (req, res) {

  count = await greetings.getCounter();

 
 // req.flash('success', success)

  res.render("index",
    {
      message,
      count,
      list,
    
   
      
    });


});

app.post("/greet", async function(req, res) {

  if(!req.body.nameInput){
    req.flash('error', 'Please enter a valid name');
  }
  else if(!req.body.radioLang){
    req.flash('error','Please select a valid language');
  }
  else{
    await greetings.greetNow(
      req.body.radioLang,
      req.body.nameInput
    );
  

  message = await greetings.getGreet();


  }
  
  res.redirect("/");
});

app.get("/greeted", async function(req, res) {

  // console.log(greetings.getList());
  list=await greetings.getNames();
  // console.log(list);

  res.render('greeted', {
   list 
})
  


});




app.post("/",async function (req, res) {

  

  list = await greetings.getNames();

  console.log(list);

  res.redirect("/");
});


app.post("/reset", async function (req, res) {
 
await greetings.clearNames();
 

  res.redirect("/");
});

app.get('/count/:names',async function(req, res) {
  const userSelected = req.params.names;
  console.log(req.params.names)

  nameValue=  userSelected;
  countValue=await greetings.countNames(userSelected);
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