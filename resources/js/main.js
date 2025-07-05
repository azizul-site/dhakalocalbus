$(document).ready(function(){
    //MIXITUP (TEAM-SECTION)
    var mixer = mixitup('.container');
});



//  <script>
// // When the user scrolls down 20px from the top of the document, slide down the navbar
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("nabar").style.top = "0";
//   } else {
//     document.getElementById("nabar").style.top = "-50px";
//   }
// }
// </script>

document.addEventListener('scroll',() => {
const header = document.querySelector('header');
if(window.screenY >0){
  header.classList.add('scrolled');
}
else{
  header.classList.remove('scolled');
}

});

// for all page's navb js plug

window.addEventListener("scroll" ,function() {
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
  });

  // MOBILE MENU OPEN-CLOSE PLUG
  function openNav(){
    document.getElementById("myNav").style.width="100%";
}
function closeNav(){
    document.getElementById("myNav").style.width="0%";
}