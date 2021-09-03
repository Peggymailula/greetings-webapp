module.exports = function greetingRoutes(greetings) {
    

    let message = '';
    let count = 0;
    let list = [];
    var success;
    var nameValue ='';
    var countValue= 0;
    

    async function start (req, res) {

        count = await greetings.getCounter();
      
       
        
      
        res.render("index",
          {
            message,
            count,
            list,
          
         
            
          });
      
      
      }

      async function greets(req, res) {

        if(!req.body.nameInput){
          req.flash('error', 'Please enter a valid name');
        }
        else if(!req.body.radioLang){
          req.flash('error','Please select a valid language');
        }
        else{
        
          await greetings.greetNow(
            req.body.radioLang,
            req.body.nameInput
          );
        
      
        message = await greetings.getGreet();
      
        }
        
        res.redirect("/");
      }

      async function greeted(req, res) {

        // console.log(greetings.getList());
        list=await greetings.getNames();
        // console.log(list);
      
        res.render('greeted', {
         list 
      })
          
      }

      async function home(req, res) {
        list = await greetings.getNames();
      
        console.log(list);
      
        res.redirect("/");
      }

      async function reset (req, res) {

        req.flash('success','Application has succesfully been reset!')
       
      await greetings.clearNames();
       
      
        res.redirect("/");
      }

      async function counting(req, res) {
        const userSelected = req.params.names;
        console.log(req.params.names)
      
        nameValue=  userSelected;
        countValue=await greetings.countNames(userSelected);
        console.log(nameValue);
        
        res.render('count', {
           nameValue,
           countValue
        });
      }
 
return{
    start,
    greets,
    greeted,
    home,
    reset,
    counting
}
    }

	
   


