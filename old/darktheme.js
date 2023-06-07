
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

    let blogs = document.querySelectorAll(".section2 .blog-div2 .main-box .blog");
    for(let i=0; i<blogs.length; i++){
        blogs[i].style = "background-color: transparent;box-shadow: 0px 0px 10px #0000009e";
    }



document.querySelector(".section3 .main-box1 .image-side .img-frame ").style = "box-shadow: 0px 0px 10px #0ed";


// social links
let socialLink = document.querySelectorAll(".social-div a");

// cv download button
document.querySelector(".container .btn").style ="";

for (let i = 0; i < socialLink.length; i++) {
socialLink[i].style = "color: #0ef;border: 2px solid #0ef;";
}

//    to change diff color headings style
let midSingel = document.querySelectorAll(".diff-color");

for (let i = 0; i < midSingel.length; i++) {
  midSingel[i].style = "color: #86c163";

}

const midHeadings = [
document.querySelector(".section1 .container h3 span"),
// document.querySelector(".section3 .main-box1 .content-side h3 span"),
// document.querySelector(" .section3 .main-box2 h3 span"),
// document.querySelector(" .section3 .main-box1 .content-side h1 span"),
// document.querySelector(" .section4 h3 span")
 
];
for (let i = 0; i < midHeadings.length; i++) {
 midHeadings[0].style = "color: #0ef;";

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

// for blog1



  let blogOne =document.querySelectorAll(".section2 .blog-div .blog");
  for (let i = 0; i < blogOne.length; i++) {
    blogOne[i].style = "    background-color: #32384d;";
    
  }
  blogOne =document.querySelectorAll(".section2 .blog-div .blog .content p");
  for (let i = 0; i < blogOne.length; i++) {
    blogOne[i].style = "color: #0ed;";
    
  }
  blogOne =document.querySelectorAll(".section2 .blog-div .blog .lr-div");
  for (let i = 0; i < blogOne.length; i++) {
    blogOne[i].style = "box-shadow: 0px -8px 4px #ffffff45, 0px -18px 27px #ffffff3b;";
    
  }

  blogOne =document.querySelectorAll(".section2 .blog-div .blog .lr-div a");
  for (let i = 0; i < blogOne.length; i++) {
    blogOne[i].style = "";
    
  }


  //for form
  let form =document.querySelectorAll(".section4 form input ,.section4 form textarea ,.section4 form button");
  for (let i = 0; i < form.length; i++) {
    form[i].style = "";
    
  }
  
}

        // dark theme script again

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

// function skillanimate() {
//   let mySkillscale = document.querySelectorAll(".section3 .main-box1 .image-side .skills-sec div div");

//   for (let i = 0; i < mySkillscale.length; i++) {
//       let windowHeight = window.innerHeight;
//       let elementTop = mySkillscale[i].getBoundingClientRect().top;
//       let elementVisible = 00;
  
//       if (elementTop < windowHeight - elementVisible) {
//       mySkillscale[i].style = "width:100%";
//         } else {
//       mySkillscale[i].style = "width:0%";
//         }
//   }

// }