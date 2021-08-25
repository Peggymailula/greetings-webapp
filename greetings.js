module.exports = function greetings() {

    // var names;
    var counter;
    var message;
    var langs;
    var name;
    var greet= "";
    var namesList = [];
    var greet;
   

    var langE = 'Please select a valid language.'

    var error = "Please enter a valid name."



    function setName(enterYourName) {
        enterYourName = enterYourName.charAt(0).toUpperCase() + enterYourName.slice(1).toLowerCase();
        name = enterYourName;
    }
    function getName() {



        return name;
    }


    function getError() {
        if (name === '' && name!==undefined) {
            return error;
        }

        if (name !== ""  && langs !=='English') {
            return langE;
        }

        if (name !== "" && name !== undefined && langs !== undefined) {
            return '';
        }




    }

    function greetNow(languageSet, setName) {
       setName =   setName.charAt(0).toUpperCase() +   setName.slice(1).toLowerCase();

        if (setName != "" ) {

            if (languageSet == "English" || languageSet == "Afrikaans" || languageSet == "isiXhosa") {
                if (languageSet == "English") {
                    greet="Hello, " + setName + '!';
    
                }
                else if (languageSet == "Afrikaans") {
                    greet= "Groete, " + setName + '!';
    
                }
                else if (languageSet == "isiXhosa") {
                    greet= "Molo, " + setName + '!';
    
                }
    
                if (namesList.length == 0){
                    namesList.push({
                        name: setName,
                        count: 1
                    });
        
                } else {
                    if (!namesList.some(namesList =>  namesList.name === setName)) {
                        namesList.push({
                            name: setName,
                            count: 1
                        });
    
                    } else {
                        

                        namesList.forEach(element => {
                            if (element.name === setName) {
                                element.count++;
        
                            }
                            
                        });
    
                    }
                    
                }

            }

        }

        
    }

    function getList(){
        return namesList;
    }

    function getGreet() {
        return greet
    }

 

    function getCounter(name) {
   
        return namesList.length;
    }


    function getNames() {


        if(namesList !=={}){
            
            return namesList;
           
        }
      
      
    }


    function clearNames() {
        message= 'Reset succesful!';
      greet='';
      namesList = {};
        return message;

    }

        function clearingButtonFactFunc() {
        counter = 0;
        namesList = {};
       
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

    function usernameFor(user) {
        let userInfo;
        namesList.forEach(element => {
            if(element.name === user){
                userInfo = {
                    name: element.name,
                    count: element.count
                };
            }
        });
        return userInfo;
    }

    return {

        setName,
        getName,
        getCounter,
        greetNow,
        setLang,
        clearNames,
        getError,
        getNames,
        clearingButtonFactFunc,
        usernameFor,
        getList,
        getGreet
        
        
       
    }
}