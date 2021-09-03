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
const Greet = require('./routes/greeting-service') 

const connectionString = process.env.DATABASE_URL ||'postgresql://codex:pg123@localhost:5432/greeting';


const pool = new Pool({
 connectionString,
  ssl: {
    rejectUnauthorized:false
  }
});

const app = express();






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
const greeter = Greet(greetings);

console.log(pool);

app.get("/", greeter.start);

app.post("/greet", greeter.greets);

app.get("/greeted",greeter.greeted );

app.post("/",greeter.home);


app.post("/reset", greeter.reset);

app.get('/count/:names',greeter.counting);



let PORT = process.env.PORT || 3012;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});