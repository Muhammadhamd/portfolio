

var feed = new Instafeed({
    limit:3,
    template:`
 
 <div class="instablog max-w-[250px] rounded overflow-hidden mx-[7px] hover:bg-[rgba(148,163,184,0.1)] p-[10px] transition-all ease-in ">
 <div class="w-[100%] overflow-hidden rounded">
     <div class="w-[100%]">
     <a href="{{link}}"><img src="{{image}}" /></a>
     </div>
 </div>

 <p class="text-xs h-[160px] p-[5px] overflow-hidden"> {{caption}} </p>
 <div class="text-center mt-[5px]" id='learnmoreha'>Learn more</div>
</div>`,
target: "instaposth",
accessToken: 'IGQVJWcllPdUdORUxkNEhiQ1g4VXFfd05sbDZA1Y0ZAqMnF0WUFtTTFPc0x1V3dDRjJvX0gxaDF6TFh3bXUxWkRnVmpQdno1b3hiLTU0SFhKc2NjZAFFfZAXlocmZAWQmRYQjFTaEREQlp5bTJOUXJGdHR0VAZDZD',

before:function(){

    document.getElementById("instaposth").innerHTML = "<h1>Loading....</h1>"
},
after :function (event) {

    let div = document.createElement("div");

    div.style = "display:none;position:fixed; top:0; width:100%; height:100vh; justify-content:center;align-items: center;    background-color: rgb(0 0 0 / 45%);;";
   document.body.appendChild(div);
    let instablogs = document.querySelectorAll("#instaposth .instablog"),
        i;
    for (i = 0; i < instablogs.length; i++) {
        instablogs[i];
        console.log(instablogs[i])
        
        instablogs.forEach(eachpost => {
            eachpost.addEventListener("click" , 
    function (event) {eachpost.querySelector("div div a").style = "width:100%;"
        div.style.display = "flex"
         div.innerHTML = `<div class=" max-w-[700px] max-h-[300px]" style="background: rgba(148,163,184,0.1);box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);backdrop-filter: blur(7.2px);-webkit-backdrop-filter: blur(7.2px);border: 1px solid rgba(255, 255, 255, 0.2);" >

         <div class="flex w-[100%]">
         <div style="width:300px">${eachpost.querySelector("div div a").innerHTML}</div>
             
         <div>
         <div  style=" pointer:corsur; text-align:right;margin:5px 10px 5px 0"><button id="deletebtn">delete</button></div>
         <div style="padding:15px;width:400px; height:270px;overflow-Y:scroll; font-size:15px;">${eachpost.querySelector("p").innerHTML}</div>
         </div>
         </div>       
             
            
         </div>`
         document.getElementById("deletebtn").addEventListener("click",
    function(){
        div.style.display = "none"
console.log("daf")
    })
         
    })
        });
  
    }
    
    
    
}
})
feed.run();
