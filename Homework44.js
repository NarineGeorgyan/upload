
let container = document.getElementById('container');
container.className="container-div";
  
let login = document.getElementById("login");
login.name = "user_name";
login.className = "user-name";

let password = document.getElementById("password");
password.name="user_password"; 
password.className = "user-password";

let btnClick=document.createElement("button");
container.appendChild(btnClick);
btnClick.className = "login";
btnClick.value="enter-button";
btnClick.innerText="Log in";

let errorLoginMessage= document.getElementById("login-span");
errorLoginMessage.style.display ="none";
errorLoginMessage.className="error";
let errorPasswordMessage= document.getElementById("password-span");
errorPasswordMessage.style.display ="none";
errorPasswordMessage.className="error";

btnClick.addEventListener("click",function(){
    let symbols_login=login.value.split("");
    if(password.value.trim() === ""){
        password.style.border="2px solid red";
            errorPasswordMessage.innerText="ERROR!!! Password is empty or input space!!!";

            errorPasswordMessage.style.display = "inline-block";
            
            
    }
    else{
        password.style.border = "2px solid green";
        errorPasswordMessage.style.display ="none";
        
    }
    if(login.value.trim() === "" ){
       
        login.style.border = "2px solid red";
        errorLoginMessage.innerText="ERROR!!! Login is empty or input space!!!";
            errorLoginMessage.style.display="inline-block";
          
    }
    else if (symbols_login.length > 0){
              
            symbols_login.forEach(symbol_login =>{
                if(symbol_login === " "){
                    login.style.border = "2px solid red";
                    errorLoginMessage.style.display="inline-block";
                    errorLoginMessage.innerText = "ERROR!!There are space in input text!!!";
                   
                }
                else if(symbols_login.length < 3 || symbols_login.length >20){
                    login.style.border = "2px solid red";
                    errorLoginMessage.style.display="inline-block";
                    errorLoginMessage.innerText = "ERROR!!!The count of letters is less 3 or greater 20!!!";
                    
                }         
           
            else{
                login.style.border = "2px solid green";
                errorLoginMessage.style.display ="none";
            }
    

        });
      
    } 
  
});