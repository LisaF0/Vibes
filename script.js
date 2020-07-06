//SCROLL TO TOP
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// MENU BURGER
function toggleNav(){
  let width = $(window).width()
  if(width > 800){
    $(".menu").removeClass(["mobile","open"])
    $("#burger").toggleClass(["fa-times", "fa-bars"])
  } else {
    $(".menu").addClass("mobile")
  }
}

$(document).ready(function(){
  toggleNav()
  $("#burger").click(function(){
    $(".menu").toggleClass("open")
    $(this).toggleClass(["fa-times", "fa-bars"])
  })
  $(window).resize(() =>{
    toggleNav()
  })
})

// ACCORDION


var acc = document.getElementsByClassName("accordionHeader");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // toggle entre add et remove la class active sur le btn qui controle le contenu
    this.classList.toggle("active");

    var accordionContent = this.nextElementSibling;
    // toggle entre hide et show le contenu
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
}


/* MODAL */



//  var modals = document.getElementsByClassName("modal");
//  var minis = document.getElementsByClassName("modal-mini");
//  var modimgs = document.getElementsByClassName("modal-img");
//  var j;
  
//  for (j = 0; j < modals.length; j++)
//  {
//      console.log(j);
//      var mod = modals[j];
//      var imaj = modimgs[j];
//      minis[j].addEventListener("click", function()
//      {
//          // var mod = this.nextElementSibling;
//          mod.style.display = "block";
//          // var imaj = mod.img.children[0];
//          imaj.src = this.src;
//      })
//      var span = document.getElementsByClassName("close")[j];
//      span.addEventListener("click", function()
//      {
//          mod.style.display = "none";
//      })
//  }















 /* DARK MODE */

 document.addEventListener('DOMContentLoaded', () => {

  const themeStylesheet = document.getElementById('theme');
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
      // if it's light -> go dark
      if(themeStylesheet.href.includes('light')){
          themeStylesheet.href = 'dark-theme.css';
          
      } else {
          // if it's dark -> go light
          themeStylesheet.href = 'light-theme.css';
          

      }
  })
})




//  function darkMode(){
//    var element = document.main;
//    element.classList.toggle("darkMode");
//  }

// function toggleDarkLight() {
//   var body = document.getElementById("body");
//   var currentClass = body.className;
//   body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
// }