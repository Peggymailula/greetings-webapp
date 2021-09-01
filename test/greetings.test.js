const assert = require('assert');
const greetings = require('../greetings');
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/greeting';
;

const pool = new Pool({
    connectionString
});


describe('The basic database web app', function(){

    beforeEach(async function(){
        // clean the tables before each test run
        await pool.query("delete from users;");
      
    });

    it('Greet exercise:Message setting', async function(){
        
        // the Factory Function is called CategoryService
        let greet1 = greetings(pool);
        
        await greet1.greetNow('English','Amy');

       
        
         assert.equal("Hello, Amy!",greet1.getGreet());

    });

    after(function(){
        pool.end();
    })
});