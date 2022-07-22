import React from "react";
import cookie from "../../Assets/fortune_cookie.svg";
import $ from 'jquery';

var array = 
[
"'Lee' means plum in Chinese", 
"I have a shih tzu named Bao",
"My sister is a nurse",
"I was born in NY Long Island",
"My mom is an engineer",
"My dad is a network engineer",
"Follow my dogs insta, @BaoInBrooklyn",

]


$(function(){
    $('.fortune_cookie').on("click", function(e){
      $('.active').removeClass('active');
      $(this).addClass('active');
      alert(array[Math.floor(Math.random() * array.length)]);
      console.log(Math.floor(Math.random() * array.length))
    });
  });


function Cookie() {
    return (
        <div id="fortune-cookie">   
            <h2 class="subtopic">Open this fortune cookie to learn more!</h2>            
            <img src={cookie} className="fortune_cookie" alt="avatar" width="300" height="300"/>
            
        </div>
        )
}

export default Cookie;
