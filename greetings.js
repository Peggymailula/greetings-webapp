module.exports = function greetings(pool) {

    // var names;
    var counter;
    var message;
    var langs;
    var name;
    var greet = "";
    var namesList = [];
    var greet;
    var greeted=[];



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



        if (name === '' && name !== undefined) {
            return error;
        }

        if (name !== undefined && langs === null) {
            return langE;
        }

        else {
            return '';
        }



    }

    async function greetNow(languageSet, setName) {
        setName = setName.charAt(0).toUpperCase() + setName.slice(1).toLowerCase();

        try {

            setName = setName.charAt(0).toUpperCase() + setName.slice(1).toLowerCase();
            setName = setName;


            var noDuplicate = await pool.query(`SELECT name from users WHERE name = $1`, [setName]);

            if (noDuplicate.rowCount === 0) {

                await pool.query(`INSERT INTO users (name,counter) VALUES ($1,$2)`, [setName, 1])
            }

            else {
                await pool.query(`UPDATE users SET  counter= counter + 1 WHERE name = $1`, [setName])
            }

            if (setName != "") {

                if (languageSet == "English" || languageSet == "Afrikaans" || languageSet == "isiXhosa") {
                    if (languageSet == "English") {
                        greet = "Hello, " + setName + '!';

                    }
                    else if (languageSet == "Afrikaans") {
                        greet = "Groete, " + setName + '!';

                    }
                    else if (languageSet == "isiXhosa") {
                        greet = "Molo, " + setName + '!';

                    }

                    if (namesList.length == 0) {
                        namesList.push({
                            name: setName,
                            count: 1
                        });

                    } else {
                        if (!namesList.some(namesList => namesList.name === setName)) {
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

        } catch (err) {
           
            console.error('Error has occured!', err);
            throw err;
        }


    }

    function getList() {
        return namesList;
    }

    function getGreet() {
        return greet
    }



    async function getCounter() {
        namesList= await pool.query(`SELECT * from users`)
        namesList = namesList.rows;
        return namesList.length;
    }


  async function getNames() {
      var naming = await pool.query(`SELECT name FROM users`)
      greeted= naming.rows;

      return greeted;
       


    
    }

    async function countNames(countedName){

    var counting= await pool.query(`SELECT counter FROM users WHERE name = $1`,[countedName])
    counting = counting.rows;

    return counting[0].counter;

    }


    async function clearNames() {

        try{
            await pool.query(`DELETE FROM users`)
           
           
        }
        catch(err){
            console.error('Error detected on reset', err);
            throw err;
        }
      
        

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
            if (element.name === user) {
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
        getGreet,
        countNames



    }
}