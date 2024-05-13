import React from 'react'
import skills from '../media/skiils02.png'
import '../Css/scroll.css'
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation

  addAnimation();


function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
function Scroll()
{
  

    
    return(
        <>
    

<h1 >Skills & Tools</h1>

<div class="scroller" data-speed="fast" data-direction="left">
  <ul class="tag-list scroller__inner">
    <li>HTML</li>
    <li>CSS</li>
    <li>BOOTSTRAP</li>
    <li>TAILWID CSS</li>
    <li>RESPOSIVE DESIGN</li>
    <li>JS</li>
    <li>JQUERY</li>
    <li>REACT</li>
    <li>APPWRITE</li>
    <li>PHP</li>
    <li>MYSQL</li>
    <li>UI/UX</li>
  </ul>
</div>

<div class="scroller" data-speed="slow" data-direction="right">
  <ul class="tag-list scroller__inner">
<li><i class="fab fa-html5"></i></li>
<li><i class="fab fa-css3-alt"></i></li>
{/* <li><i class="fab fa-bootstrap"></i></li> */}
<li><i class="fab fa-js"></i></li>
<li><i class="fab fa-react"></i></li>
<li><i class="fab fa-php"></i></li>
<li><i class="fas fa-database"></i></li>
<li><i class="fab fa-python"></i></li>
<li><i class="fab fa-jsfiddle"></i></li>
<li><i class="fab fa-aws"></i></li>
<li><i class="fas fa-code"></i></li>


    
  </ul>
</div>



        </>
    )
}


export default Scroll;