//SCROLL TO TOP
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {// quand l'user scrolls down 20px à partir du haut du document
    mybutton.style.display = "block";//le button apparait
  } else {
    mybutton.style.display = "none";// sinon le button disparait
  }
}

function topFunction() { // quand l'user click sur le button, scroll to top du document
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

$("#accordion h4").click(function(){ // quand l'user click sur un h4 du #accordion
  $(".accordionContainer").removeClass("acc-open") // ça enlève la classe acc-open du accordionContainer
  $(this).parent().addClass("acc-open")// ça ajoute la classe acc-open au parent du h4 sur lequel l'user click
  
  $(".accordionContainer i").removeClass("fa-minus").addClass("fa-plus")// ça enleve le + et le remplace par le -
  $(this).children("i").removeClass("fa-plus").addClass("fa-minus")// sur CE accordionContainer ça enlève le + et ajoute -
  
})



 /* DARK MODE */

 document.addEventListener('DOMContentLoaded', () => {

  const themeStylesheet = document.getElementById('theme');
  const themeToggle = document.getElementById('theme-toggle');
  // quand je clique sur l'élément avec l'id theme-toggle, ici la goutte : 
  themeToggle.addEventListener('click', () => {
      // si le stylesheet href inclut light alors le remplacer par 'dark-theme.css"
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

// LOAD MORE
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
$(document).ready(function() {
  $('.container').click(function() { // quand je click sur .container
    
    let src = $(this).children('img').attr('src') // je recuppère dans la variable src l'attr src du children img de this (.container)
    $('#modal').addClass('active')
    $('.modal-img').attr('src',src)// j'applique la src que j'ai récup à mon img dans la modal
  })
  $('.modal-close').click(function() {// quand je clique sur la croix ça ferme la modal
    $('#modal').removeClass('active')  
  })
  $("#modal").click(function(event){
    if(event.target === this){ // si l'user click sur le #modal mais pas ce qu'il contient alors enlève la class active de #modal
        $("#modal").removeClass("active")
    }
  })

})
  


  