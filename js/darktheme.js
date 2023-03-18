
        // dark theme script again

        const darkTheme = document.getElementById("darktheme");

 darkTheme.addEventListener("click",function(){

    transformBall.style = "right:7px;";



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



document.querySelector(".section3 .main-box1 .image-side .img-frame ").style = "box-shadow: 0px 0px 10px #0ed;";


// social links
let socialLink = document.querySelectorAll(".social-div a");

// cv download button
document.querySelector(".container .btn").style ="";

for (let i = 0; i < socialLink.length; i++) {
socialLink[i].style = "color: #0ef;border: 2px solid #0ef;";
}

//    because there are two spans with one selector
let midSingel = document.querySelectorAll(".section3 .main-box1 .content-side h3 span");

for (let i = 0; i < midSingel.length; i++) {
  midSingel[i].style = "color: #dad7fc;";

}

const midHeadings = [
document.querySelector(".section1 .container h3 span"),
document.querySelector(".section3 .main-box1 .content-side h3 span"),
document.querySelector(" .section3 .main-box2 h3 span"),
document.querySelector(" .section3 .main-box1 .content-side h1 span"),
document.querySelector(" .section4 h3 span")
 
];
for (let i = 0; i < midHeadings.length; i++) {
midHeadings[i].style = "color: #dad7fc;";
 midHeadings[0].style = "color: #0ef;";

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
  document.querySelector("body").style = "background-color: #1f242d;color: #fff;";
  
})