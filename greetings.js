module.exports=function greetings() {

    var name;
    var counter;
    var message;
    var lang;

    var local ={}
var counter = 0

function setName(name){
    local = name
}

function getName(){
    return local
}



    function greetNow(userName,languageSet) {

    //Convert lowercase first letter to make sure names are all are in same format
  //  userName= userName.substring(0, 1).toUpperCase()+ userName.substring(1).slice();
    userName= userName.substring(0, 1).toUpperCase() + userName.substring(1).toLowerCase();
        if(local[userName] === undefined){
            local[userName] = 0;
            counter++;
            
           
        }
        else{

            local[userName]++;
           
            
        }
        if(languageSet == "English"){
            return "Hello, " + userName  + '!';
            //total++;
            
            
        }
        if(languageSet == "Afrikaans"){
            return "Groete, " + userName + '!';
            //total++;
            
        }
        if(languageSet == "isiXhosa"){
            return "Molo, " + userName  + '!';
            //total++;
            
        }   
    }

    function getCounter(){
        return  counter;
    }

    /*
    function getLanguage(){
        
        return messaging;
    }
    

    function countNames() {
        return namesList.length;
       // return total;
    }

    */

    function clearNames(){
     local.clear();
    }

   var setLang = function (value) {
    var lang = '';
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
    clearNames
        //setName,
        //getName,
       //setLanguage,
       //getLanguage,
        //countNames

    }
    }