document.addEventListener('DOMContentLoaded', function(){

    let errorMsg= document.querySelector('.error');

    if(errorMsg !== ''){
        setTimeout(() => {
            errorMsg.innerHTML='';
            
        },3000);
    }

});