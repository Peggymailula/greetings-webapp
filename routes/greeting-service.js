module.exports = function greetingRoutes(pool) {
    
    
    async function show(setName){

        setName = setName.charAt(0).toUpperCase() + setName.slice(1).toLowerCase();
        


        var noDuplicate = await pool.query(`SELECT name from users WHERE name = $1`, [setName]);

        if (noDuplicate.rowCount === 0) {

            await pool.query(`INSERT INTO users (name,counter) VALUES ($1,$2)`, [setName, 1])
        }

        else {
            await pool.query(`UPDATE users SET  counter= counter + 1 WHERE name = $1`, [setName])
        }
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
                console.error('Error detected on reset button', err);
                throw err;
            }
          
            
    
        }
    

	return {
	show,
    getNames,
    getCounter,
    countNames,
    clearNames



	}

    }

	
   


