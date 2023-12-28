// G L O B A L
let user = document.querySelector(".user");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let myBtn = document.querySelector("#myBtn");
let error = document.getElementById("error");
let error2 = document.getElementById("error2");
let enterEmail = document.querySelector("#enterEmail");
let enterPassword = document.querySelector("#enterPassword");
let userInfo = [];

// console.log(enterPassword);




// Register Email  ^_^ //

if(localStorage.getItem("userInfo") ==null ){
        userInfo=[];
        
    
            }else{
                userInfo = JSON.parse(localStorage.getItem("userInfo"));
            }
        function save(){

            if (user.value == "" | email.value == "" | password.value == ""){
                error.classList.replace("d-none","d-block");

            }else if (user.value !== null && email.value !== null && password !== null && validateEmail()){
                let info = {
                    user: user.value,
                    email: email.value,
                    password:password.value,
                }
                
            userInfo.push(info);
            clearForm();
            window.location.href="login.html";
            
             


            } else {
                alert("Invalid Email");
            }

              
        
}



myBtn.addEventListener('click',function(){
    save();
});   



function clearForm(){
    user.value = "";
    email.value = "";
    password.value = "";
}



function validateEmail(){
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;
        if (regex.test(email.value) === true){
            error.classList.replace("d-block","d-none");
           return true
        }else {
           error.classList.replace("d-none","d-block");
        }
}


// login check -_- //


function logInBtn(){
    if (enterEmail.value !== null || enterPassword.value !== null){
        window.location.href="home.html";
        
    } else {
        error2.classList.replace("d-none","d-block");
    }
}



function check(){
    for ( let i = 0; i < userInfo.length ; i ++){
        if (userInfo[i].email.toLowerCase() === enterEmail.value.toLowerCase() && userInfo[i].password.toLowerCase() === enterPassword.value.toLowerCase()){
            localStorage.setItem("name",JSON.stringify(userInfo[i].user))
            return true ;
        }
    }
}



// logout //

function logOutBtn(){
    window.location.href="index.html";
}

































