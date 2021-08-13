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
       
        
         assert.equal("Hello, Amy!",greet1.greetNow('English'));

});
it('should take in the name Enhle and use the Afrikaans language to greet her' , function(){
    let greet1 = greetings();
    greet1.setName('Enhle');
    greet1.getName();
   
    
     assert.equal("Groete, Enhle!",greet1.greetNow('Afrikaans'));

});
it('should take in the name Penny and use isiXhosa language to greet her' , function(){
    let greet1 =greetings();
    greet1.setName('Penny');
    greet1.getName();
  
    
     assert.equal("Molo, Penny!",greet1.greetNow('isiXhosa'));

});
})


describe('Greet exercise:Counter setting' , function(){
    it('should take in one name and return counter as one' , function(){
        var greet2 = greetings();
        greet2.setName('Mo');
        greet2.getName();
        greet2.greetNow('isiXhosa')
        
        
         assert.equal(1,greet2.getCounter());

});





})