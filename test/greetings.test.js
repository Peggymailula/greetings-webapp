const assert = require('assert');
const greetings = require('../greetings');

const SettingsBill = require('../greetings');

describe('Greet exercise:Name setting' , function(){
    it('should take set and return  Peggy\'s name from the input box' , function(){
        let greet1 = greetings();
        greet1.setName('Peggy');
        
         assert.equal('Peggy',greet1.getName());

});
it('should take set and return  Annie\'s name from the input box' , function(){
    let greet1 = greetings()
    greet1.setName('Annie');
    
     assert.equal('Annie',greet1.getName());

});
it('should take set and return  Amanda\'s name from the input box' , function(){
    let greet1 = greetings();
    greet1.setName('Amanda');
    
     assert.equal('Amanda',greet1.getName());

});
})
describe('Greet exercise:Language setting' , function(){
    it('should select the English language and the English value be used' , function(){
        let greet1 =greetings();
       
         assert.equal("English",greet1.setLang('English'));

});
it('should select the Afrikaans language and the Afrikaans value be used' , function(){
    let greet1 = greetings();
   
     assert.equal("Afrikaans",greet1.setLang('Afrikaans'));

});
it('should select the isiXhosa language and the isiXhosa value be used' , function(){
    let greet1 = greetings();
   
     assert.equal("isiXhosa",greet1.setLang('isiXhosa'));

});
})


describe('Greet exercise:Message setting' , function(){
    it('should take in the name Amy and use the English language to greet her' , function(){
        let greet1 = greetings();
        greet1.setName('Amy');
        greet1.getName();
        greet1.setLang('English');
        
         assert.equal("Hello, Amy!",greet1.greetNow('Amy','English'));

});
it('should take in the name Enhle and use the Afrikaans language to greet her' , function(){
    let greet1 = greetings();
    greet1.setName('Enhle');
    greet1.getName();
    greet1.setLang('Afrikaans');
    
     assert.equal("Groete, Enhle!",greet1.greetNow('Enhle','Afrikaans'));

});
it('should take in the name Penny and use isiXhosa language to greet her' , function(){
    let greet1 =greetings();
    greet1.setName('Penny');
    greet1.getName();
    greet1.setLang('isiXhosa');
    
     assert.equal("Molo, Penny!",greet1.greetNow('Penny','isiXhosa'));

});
})


describe('Greet exercise:Counter setting' , function(){
    it('should take in one name and return counter as one' , function(){
        var greet2 = greetings();
        greet2.setName('Mo');
        greet2.getName();
        greet2.setLang('isiXhosa');
        greet2.greetNow('Mo','isiXhosa')
        
        
         assert.equal(1,greet2.getCounter());

});

it('should take in three different names and return counter as three' , function(){
    var greet1 =greetings();
    greet1.setName('Mo');
    greet1.getName();
    greet1.setLang('isiXhosa');
    greet1.greetNow('Mo','isiXhosa')

    greet1.setName('Peggy');
    greet1.getName();
    greet1.setLang('English');
    greet1.greetNow('Peggy','English')

    greet1.setName('Amy');
    greet1.getName();
    greet1.setLang('Afrikaans');
    greet1.greetNow('Amy','Afrikaans')
   
    
     assert.equal(3,greet1.getCounter());

});

it('should take in six names,whilst two are similar and return counter as four' , function(){
    var greet1 = greetings();
  
    greet1.greetNow('Mo','isiXhosa')
    greet1.greetNow('Peggy','English')
    greet1.greetNow('Amy','Afrikaans')
    greet1.greetNow('Ziyanda','isiXhosa')
    greet1.greetNow('Peggy','Afrikaans')
    greet1.greetNow('Amy','English')

    
     assert.equal(4,greet1.getCounter());

});



})