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


 /* DARK MODE */

 document.addEventListener('DOMContentLoaded', () => {

  const themeStylesheet = document.getElementById('theme');
  const themeToggle = document.getElementById('theme-toggle');
  // quand je clique sur l'élément avec l'id theme-toggle, ici la goutte : 
  themeToggle.addEventListener('click', () => {
      // si le stylesheet href inclu light alors le remplacer par 'dark-theme.css"
      if(themeStylesheet.href.includes('light')){
          themeStylesheet.href = 'dark-theme.css';
          
      } else {
          // si non remplacer par 'light-theme.css'
          themeStylesheet.href = 'light-theme.css';
          

      }
  })
})


// TRI

function hideAllExcept(filterName){ // hide all sauf filterName
  if(filterName === "all"){ // si le filter c'est all
    $("div.item") // alors toute les class item dans des div
    .css('display','block')// on ajoute display block en css
  } else {
    $("div.item")// sinon pour toute les class item dans les div
    .not("."+filterName) // qui ne sont pas = à .filterName on les hide
    .hide()
  }
}

$(function(){
  $('.filter').click(function(){ // chaque fois qu'on clique sur un filtre
    $('.item').hide().show()// ça hide ou show l'item

    console.log(this.dataset.filter) // affiche les attr data des buttons
    hideAllExcept(this.dataset.filter)//  hide tout sauf le filter concerné
  })
})


$(document).ready(function(){
  $(".container").slice(0, 4).show(); // la classe container affiche 4 img
  $("#loadMore").on("click", function(e){ // quand je clique sur le boutton loadmore, 
    e.preventDefault(); //l'évènement par défaut
    $(".container:hidden").slice(0, 4).slideDown();// les container hidden, slidedown par 4
    if($(".container:hidden").length == 0) {// lorsqu'il n'y a plus de contenu en plus, 
      $("#loadMore").text("No Content").addClass("noContent");// on modifie le boutton loadMore par noContent
    }
  });
  
})



/* MODAL */


var modals = document.getElementsByClassName("modal");
var minis = document.getElementsByClassName("container");
var modimgs = document.getElementsByClassName("modal-img");
var j;
 
for (j = 0; j < modals.length; j++)
{
    console.log(j);
    var mod = modals[j];
    var imaj = modimgs[j];
    var minii = minis[j];
    minii.addEventListener("click", function()
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


