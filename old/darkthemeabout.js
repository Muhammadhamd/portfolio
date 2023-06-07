
const dTheme = () => {

  localStorage.setItem("theme", "dark");



    transformBall.style = "right:7px;";

    document.querySelector("body").style = "background-color: #1f242d;color: #fff";


    document.querySelector(".header").style= "";
    // document.querySelector(".header.scrolled").style= "background: #0000007d";
    document.querySelector(".header .logo").style= "color: #fff;";
    const headNavA = document.querySelectorAll(".header nav a");
    for(let i=0; i < headNavA.length; i++){
        headNavA[i].style = "color: white;";
    }

   



document.querySelector(".section3 .main-box1 .image-side .img-frame ").style = "box-shadow: 0px 0px 10px #0ed";





//    to change diff color headings style
let midSingel = document.querySelectorAll(".diff-color");

for (let i = 0; i < midSingel.length; i++) {
  midSingel[i].style = "color: #86c163";

}


// for paragrapgh of about section   
let aboutParagraph = document.querySelectorAll(".n-p-e");
for (let i = 0; i < aboutParagraph.length; i++) {
     aboutParagraph[i].style = "";
  
}
      // skills section which is in image section of about
      
      document.querySelector(".section3 .main-box1 .image-side .skills-sec h1").style ="";
      const skillScales = document.querySelectorAll(".section3 .main-box1 .image-side .skills-sec div div");
      for (let i = 0; i < skillScales.length; i++) {
    skillScales[i].style = "background-color: #998dcf;";
        
      }
    }
    
    const darkTheme = document.getElementById("darktheme");

    darkTheme.addEventListener("click",dTheme)
   
   
   window.onload = function() {
     const theme = localStorage.getItem("theme");
     if (theme === "dark") {
       // Apply dark theme
     console.log("dark mode")
     dTheme()
     }
   }