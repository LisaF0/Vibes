//--------------------------SCROLL TO TOP
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


// ----------------------------MENU BURGER
function toggleNav(){
  let width = $(window).width()
  if(width > 800){
    $(".menu").removeClass(["mobile","menu-open"])
    $("#burger").toggleClass(["fa-times", "fa-bars"])
  } else {
    $(".menu").addClass("mobile")
  }
}

$(document).ready(function(){
  toggleNav()
  $("#burger").click(function(){
    $(".menu").toggleClass("menu-open")
    $(this).toggleClass(["fa-times", "fa-bars"])
  })
  $(window).resize(() =>{
    toggleNav()
  })
})




//------------------------------ ACCORDION

$("#accordion h4").click(function(){ // quand l'user click sur un h4 du #accordion
  $(".acc-container").removeClass("acc-open") // ça enlève la classe acc-open du acc-container
  $(this).parent().addClass("acc-open")// ça ajoute la classe acc-open au parent du h4 sur lequel l'user click
  
  $(".acc-container i").removeClass("fa-minus").addClass("fa-plus")// ça enleve le + et le remplace par le -
  $(this).children("i").removeClass("fa-plus").addClass("fa-minus")// sur CE acc-container ça enlève le + et ajoute -
  
})



 /*------------------------------- DARK MODE */

 document.addEventListener('DOMContentLoaded', () => {

  const themeStylesheet = document.getElementById('theme');
  const themeToggle = document.getElementById('themeToggle');
  // quand je clique sur l'élément avec l'id theme-toggle, ici la goutte : 
  themeToggle.addEventListener('click', () => {
      // si le stylesheet href inclut light alors le remplacer par 'darkTheme.css"
      if(themeStylesheet.href.includes('light')){
          themeStylesheet.href = 'darkTheme.css';
      } else {
          // si non remplacer par 'lightTheme.css'
          themeStylesheet.href = 'lightTheme.css';
      }
  })
})


// --------------------------------------TRI
function hideAllExcept(filterName){ // hide all sauf filterName
  if(filterName === "all"){ // si le filter c'est all
    $("div.item").css('display','block')// alors toute les class item dans des div on ajoute display block en css
  } else {
    $("div.item").not("."+filterName).hide() //sinon pour toute les class item dans les div qui n'ont pas la class .filterName on les hide
  }
  if($(".container:hidden").length !== 0){// si ya d'autre img à afficher, afficher load more dans le button sinon no content
    $("#loadMore").text("Load More")
  }
  else{$("#loadMore").text("No Content")}
}

$(function(){
  $('.filter').click(function(){ // chaque fois qu'on clique sur un filtre
    $('.item').show()// ça  show l'item
    
    hideAllExcept(this.dataset.filter)//  hide tout sauf le filter concerné
  })
})

// ---------------------------------------LOAD MORE
$(document).ready(function(){
  $(".container").slice(0, 4).show() // la classe container affiche 4 img
  $("#loadMore").on("click", function(e){ // quand je clique sur le boutton loadmore, 
    e.preventDefault() //l'évènement par défaut
    $(".container:hidden").slice(0, 4).slideDown()// les container hidden, slidedown par 4
    if($(".container:hidden").length == 0) {// lorsqu'il n'y a plus de contenu en plus, 
      $("#loadMore").text("No Content")// on modifie le boutton loadMore par noContent
    }
  });
})



/* ---------------------------------------MODAL */
$(document).ready(function() {
  $('.container').click(function() { // quand je click sur .container
    let src = $(this).children('img').attr('src') // je recuppère dans la variable src l'attr src du children img de this (.container)
    $('#modal').addClass('modal-active')
    $('.modal-img').attr('src',src)// j'applique la src que j'ai récup à mon img dans la modal
  })
  $('.modal-close').click(function() {// quand je clique sur la croix ça ferme la modal
    $('#modal').removeClass('modal-active')  
  })
  $("#modal").click(function(event){
    if(event.target === this){ // si l'user click sur le #modal mais pas ce qu'il contient alors enlève la class active de #modal
        $("#modal").removeClass("modal-active")
    }
  })

})
  
// --------------------- MODAL AUDIO & VIDEO
// $(document).ready(function() {
//   $('.container').click(function() {
//   if($(this).hasClass('video')){
//   	let src = $(this).children('video').attr('src')
//     $('#modal').addClass('modal-active')
//     $('.modal-video').attr('src', src)
//     $('.modal-img, .modal-audio').css('display', 'none')
//   }
//   if($(this).hasClass('audio')){
//   	let src = $(this).children('audio').attr('src')
//     $('#modal').addClass('modal-active')
//     $('.modal-audio').attr('src', src)
//     $('.modal-img, .modal-video').css('display', 'none')
//     }
//     if($(this).hasClass('image')) {
//     let src = $(this).children('img').attr('src') 
//     $('#modal').addClass('modal-active')
//     $('.modal-img').attr('src',src)
//     $('.modal-video, .modal-audio').css('display', 'none')
//     }  
//   })
//   $('.modal-close').click(function() {
//     $('#modal').removeClass('modal-active')  
//   })
//   $("#modal").click(function(event){
//     if(event.target === this){ 
//         $("#modal").removeClass("modal-active")
//     }
//   })

// })
// ------------CSS

// #modal{
//   display: none;
//   position: fixed;
//   z-index: 10;
//   left: 0;
//   top:0;
//   bottom: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(128, 128, 128, 0.507);
// }
// #modal-content{ 
//   position: relative; 
//   overflow: hidden;
//   animation: modalReveal 1s forwards;
// }
// .modal-img, .modal-video, .modal-audio{
//   width: 80vw;
// }
// #modal.modal-active{
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .modal-close{
//   position: absolute;
//   top: 0;
//   right: 0;
//   color: white;
//   font-size: 3em;
//   padding: 0.5em;
// }
// .modal-close:hover, .close:focus{
//   text-shadow: 3px 3px 3px var(--color-o);
//   cursor: pointer;
// } 
// @keyframes modalReveal{
//   from{
//       width:0vw;
//       opacity: 0;
//   }
//   to{
//       width: 80vw;
//       opacity: 1;
//   }
// }

// .modal-mini{
// width: 250px;
// }

// #portfolio #galerie{
//   display: flex;
//   flex-wrap: wrap;
// }


// ------------HTML
// <section id="portfolio" class="alignCenter bg-color-white text-color-grey">
// <div id="galerie">
//     <div class="container item image">
//         <i class="far fa-image"></i>
//         <img class="modal-mini" src="https://cdna.artstation.com/p/assets/images/images/026/744/108/large/arturo-serrano-bird-house.jpg?1589589727" alt="wallpaper">
//     </div>
//     <div class="container item image">
//         <img class="modal-mini" src="https://cdna.artstation.com/p/assets/images/images/026/744/108/large/arturo-serrano-bird-house.jpg?1589589727" alt="wallpaper">
//         <i class="far fa-image"></i>
//     </div>
//     <div class="container item audio">
//         <img class="modal-mini" src="https://cdna.artstation.com/p/assets/images/images/026/744/108/large/arturo-serrano-bird-house.jpg?1589589727" alt="wallpaper">
//         <i class="far fa-play-circle"></i>
//     </div>
//     <div class="container item video">
//         <img class="modal-mini" src="https://cdna.artstation.com/p/assets/images/images/026/744/108/large/arturo-serrano-bird-house.jpg?1589589727" alt="wallpaper">
//         <video src="https://www.youtube.com/watch?v=yBOv-4ndFGw"></video>
//         <i class="far fa-play-circle"></i>
//     </div>
// </div>
    
// </section>

// <div id="modal">
// <figure id="modal-content">
// <img class="modal-img ">
// <video class="modal-video" controls></video>
// <audio class="modal-audio" controls></audio>
// <span class="modal-close">&times;</span>
// </figure>
// </div>
