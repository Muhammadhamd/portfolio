let sendMail =document.getElementById("sendmail"),
userName = document.getElementById("username"),
userEmail = document.getElementById("userEmail"),
userNumber = document.getElementById("usernum"),
quizQ = document.getElementById("quiz");

// function to add line break code
let msg = document.getElementById("messege");

msg.addEventListener(
    "keyup",
    function (e){
        if(e.key == "Enter"){
            msg.value +="%0d%0";
        }
    }
)
// function to send mail 
sendMail.addEventListener("click" ,function(e) {
if(quizQ.value == 4){
alert("opening your default email app...");
    sendMail.href = "mailto:muhammadhamdali572@gmail.com?Subject="+ msg.value
                        + "%0d%0a"+"%0d%0a"+"%0d%0a"+"%0d%0a"+"%0d%0a"+"%0d%0a"
                        + "%0d%0a"+"Name:"+userName.value
                        +"%0d%0a"+
                         "Email:"+userEmail.value
                        +"%0d%0a"+
                     "Number:"+userNumber.value;
}else{
    alert("2+2 is 4 you dont know?");

}

})

