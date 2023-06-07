
var feed = new Instafeed({
    limit:3,
    template:`<div class="blog">
    <div class="content">
      <a href="{{link}}">
        <img src="{{image}}" />
      </a>
      <h1>See what's new in JavaScript</h1>
      <p> {{caption}} </p>
     </div>
     <div class="lr-div">
       <a href="">Learn more</a>
     </div>
 </div>`,
target: "blog-div",
accessToken: 'IGQVJWcllPdUdORUxkNEhiQ1g4VXFfd05sbDZA1Y0ZAqMnF0WUFtTTFPc0x1V3dDRjJvX0gxaDF6TFh3bXUxWkRnVmpQdno1b3hiLTU0SFhKc2NjZAFFfZAXlocmZAWQmRYQjFTaEREQlp5bTJOUXJGdHR0VAZDZD',
})
feed.run();



  


