module.exports=function greetings() {

    // var names;
    var counter;
    var message;
    var lang;
    var name;
    var userName;
    var namesList=[];

    var errormsg="Please enter a valid name."
   
    
var counter = 0;



function getNames(){
    return namesList;
}

function setName(enterYourName){
    enterYourName = enterYourName.charAt(0).toUpperCase() + enterYourName.slice(1).toLowerCase();
    name = enterYourName;
}
function getName(){

    if (name == '' || name==undefined){
        return errormsg
    }

    else{
        return name;
    }
   
}

    function greetNow(languageSet) {

   
        if(languageSet == "English"){
         return "Hello, " + name  + '!';
        
            
        }
        if(languageSet == "Afrikaans"){
           return "Groete, " + name + '!';
          
        }
        if(languageSet == "isiXhosa"){
           return "Molo, " + name  + '!';
          
            
        }   
    }

    //  function getMessage(){
    //      return message;
    //  }
    function getCounter(){
        if(namesList[name] === undefined && name!=='' ){
            namesList[name] = 0;
            counter++;
            
           
        }
        else{

            namesList[name]++;
           
            
        }
           
            
        
        // counter= namesList.length;
        return  counter;
    }


    function clearNames(){
     local.clear();
    }

   var setLang = function (value) {
    
    if (value === 'English') {
        lang = 'English';
    }
    if (value === 'Afrikaans') {
        lang = 'Afrikaans';
    }
    if (value === 'isiXhosa') {
        lang = 'isiXhosa';
    }
    return lang
}
    return {

    setName,
    getName,
    getCounter,
    greetNow,
    setLang,
    clearNames,
    // getMessage
        //setName,
        getNames
       //setLanguage,
       //getLanguage,
        //countNames

    }
    }