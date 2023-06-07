
    // light theme script


    const lTheme = () => {
        

        localStorage.setItem("theme", "light");
  
  
          transformBall.style = "right:40px;";
  
  
  
          document.querySelector("body").style = "background:white;color:black;";
  
          document.querySelector(".header").style= "background-color:white";
  
          window.addEventListener("scroll",
          function(){
            document.querySelector(".header").style= "background: #0000007d;";
  
          });
  
          document.querySelector(".header").scroll.style= "background-color:#0000007d";
          document.querySelector(".header .logo").style= "color:crimson";
          const headNavA = document.querySelectorAll(".header nav a");
          for(let i=0; i < headNavA.length; i++){
              headNavA[i].style = "color:black";
          }

   document.querySelector(".section3 .main-box1 .image-side .img-frame ").style = "box-shadow: 0px 0px 10px #000000a8; background-color: #efefef;";
   let midSingel = document.querySelectorAll(".diff-color");

   for (let i = 0; i < midSingel.length; i++) {
         midSingel[i].style = "color:darkorange";
       
   }

   // for paragrapgh of about section   
   let aboutParagraph = document.querySelectorAll(".n-p-e");
   for (let i = 0; i < aboutParagraph.length; i++) {
        aboutParagraph[i].style = "color:black;";
     
   }


   // skills section which is in image section of about
   document.querySelector(".section3 .main-box1 .image-side .skills-sec h1").style ="color: #0000006e;";
   let skillScales = document.querySelectorAll(".section3 .main-box1 .image-side .skills-sec div div");
   for (let i = 0; i < skillScales.length; i++) {
     skillScales[i].style = "background-color:darkorange;height:4px;";

     
   }
        }

        const lightTheme = document.getElementById("lighttheme");
        // to transform theme toggle
        let transformBall = document.querySelector(".theme-div .ball");
lightTheme.addEventListener("click", lTheme)


window.onload = function() {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    // Apply light theme
  console.log("light mode")
  lTheme()
  }
}