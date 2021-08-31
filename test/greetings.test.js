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
        console.log("*****");
        await pool.query("delete from users;");
        
   
   
    it('should take in the name Amy and use the English language to greet her' , async function(){

        beforeEach(async function(){
            console.log("*****");
            await pool.query("delete from users;");
        });
        
        let greet1 = greetings(pool);
        
        await greet1.greetNow('English','Amy');

       
        
         assert.equal("Hello, Amy!",greet1.getGreet());

});

it('should take in the name Enhle and use the Afrikaans language to greet her' ,async function(){
    let greet1 = greetings(pool);
    await greet1.greetNow('Afrikaans','Amanda')
    
     assert.equal("Groete, Amanda!",greet1.getGreet());

});
it('should take in the name Penny and use isiXhosa language to greet her' ,async function(){
    let greet1 =greetings(pool);
    await greet1.greetNow('isiXhosa','Penny')
  
    
     assert.equal("Molo, Penny!",greet1.getGreet());

});



    it('should take in one name and return counter as one' , async function(){

        beforeEach(async function(){
            console.log("*****");
            await pool.query("delete from users;");
        });
        
        var greet2 = greetings(pool);
      
        await greet2.greetNow('English','Amy');
      
        
        
         assert.equal(1,await greet2.getCounter());

});

it('should take in five different names and return counter as 5' , async function(){
    var greet2 = greetings(pool);
  
    await greet2.greetNow('English','Amy');
    await greet2.greetNow('English','Peggy');
    await greet2.greetNow('Afrikaans','Penny');
    await greet2.greetNow('isiXhosa','Enhle');
    await greet2.greetNow('isiXhosa','Mbali');
  
    
    
     assert.equal(5,await greet2.getCounter());

});

it('should take in five  names with two duplicates and return counter as 3' , async function(){
    var greet2 = greetings(pool);
  
    await greet2.greetNow('English','Amy');
    await greet2.greetNow('English','Amy');
    await greet2.greetNow('Afrikaans','Penny');
    await greet2.greetNow('isiXhosa','Penny');
    await greet2.greetNow('isiXhosa','Mbali');
  
    
    
     assert.equal(3,await greet2.getCounter());

});



})



 it('should take in five different names and return object list with all of them' , async function(){
    var greet2 = greetings(pool);
  
    await greet2.greetNow('English','Amy');
    await greet2.greetNow('English','Peggy');
    await greet2.greetNow('Afrikaans','Penny');
    await greet2.greetNow('isiXhosa','Enhle');
    await greet2.greetNow('isiXhosa','Mbali');
  
    
    
    assert.deepEqual([ {count: 1,name:'Amy'}, {count: 1,name:'Peggy'}, {count: 1,name:'Penny'}, {count: 1,name:'Enhle'},{count: 1,name:'Mbali'}] ,await greet2.getList());

 });

it('should take in five  names with two duplicates and return list' , async function(){
    var greet2 = greetings(pool);
  
    await greet2.greetNow('English','Amy');
    await greet2.greetNow('English','Amy');
    await greet2.greetNow('Afrikaans','Penny');
    await greet2.greetNow('isiXhosa','Penny');
    await greet2.greetNow('isiXhosa','Mbali');
  
    
    
    assert.deepEqual([ {count: 2,name:'Amy'},{count: 2,name:'Penny'},{count: 1,name:'Mbali'}] ,await greet2.getList());
});

after(function(){
    pool.end();
});

})

 