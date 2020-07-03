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
// 1
// var modal = document.getElementsByClassName("myModal");
// var btn = document.getElementsByClassName(["far", "fas"]);  
// var span = document.getElementsByClassName("close")[0];
// var j = 0 ;
// for(var j = 0; i < modal.length; j++){
//   btn.onclick = function(){
//     modal.style.display = "block";
//   }
//   span.onclick = function(){
//     modal.style.display = "none";
//   }
//   window.onclick = function(event){
//     if(event.target == modal){
//       modal.style.display = "none";
//     }
//   }
//  }


//2
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("btn");  
// var span = document.getElementsByClassName("close")[0];
// // var i;
// // for(var i = 0; i < modal.length; i++){
//   btn.onclick = function(){
//     modal.style.display = "block";
//   }
//   span.onclick = function(){
//     modal.style.display = "none";
//   }
//   window.onclick = function(event){
//     if(event.target == modal){
//       modal.style.display = "none";
//     }
//   }
// // }



 var modals = document.getElementsByClassName("myModal");
 var minis = document.getElementsByClassName("modal-mini");
 var modimgs = document.getElementsByClassName("modal-img");
 var j = 0;
  
 for (j = 0; j < modals.length; j++)
 {
     console.log(j);
     var mod = modals[j];
     var imaj = modimgs[j];
     minis[j].addEventListener("click", function()
     {
         // var mod = this.nextElementSibling;
         mod.style.display = "block";
         // var imaj = mod.img.children[0];
         imaj.src = this.src;
     })
     var span = document.getElementsByClassName("close")[j];
     span.addEventListener("click", function()
     {
         mod.style.display = "none";
     })
 }















 /* DARK MODE */

//  function darkMode(){
//    var element = document.main;
//    element.classList.toggle("darkMode");
//  }