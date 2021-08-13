module.exports = function greetings() {

    // var names;
    var counter;
    var message;
    var langs;
    var name;
    var userName;
    var namesList = {};

    var langE = 'Please pick a language.'

    var error = "Please enter a valid name."


    var counter = 0;




    function setName(enterYourName) {
        enterYourName = enterYourName.charAt(0).toUpperCase() + enterYourName.slice(1).toLowerCase();
        name = enterYourName;
    }
    function getName() {



        return name;
    }


    function getError() {
        if (name === '') {
            return error;
        }

        if (name !== "" && name !== undefined && langs === undefined) {
            return langE;
        }




    }

    function greetNow(languageSet) {

        langs = languageSet;
        if (languageSet == "English") {
            return "Hello, " + name + '!';


        }
        if (languageSet == "Afrikaans") {
            return "Groete, " + name + '!';

        }
        if (languageSet == "isiXhosa") {
            return "Molo, " + name + '!';


        }
    }

    //  function getMessage(){
    //      return message;
    //  }
    function getCounter() {
        if (name !== '') {
            if (namesList[name] === undefined) {
                namesList[name] = 0;
                counter++
            }
            else {
                namesList[name]++;
            }
        }




        // counter= namesList.length;
        return counter;
    }


    function getNames() {

        if(namesList !=={}){
            
            return Object.keys(namesList);
           
        }
        else{
           
            return 'No names greeted yet.'

        }
      
    }

    function clearNames() {
        local.clear();
        counter=0;
        namesList=[];
        message= 'Reset succesful!'

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
        getError,
        //setName,
        getNames
       
    }
}