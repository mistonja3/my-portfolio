var lastScrollTop = pageYOffset;

window.addEventListener('scroll', function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
      document.querySelector('.header').classList.add('hide-header')
   } else if(st == 0) {
      document.querySelector('.header').classList.remove('hide-header')
      document.querySelector('.nav').classList.remove('hide-header-small')
   }
   else{
      document.querySelector('.header').classList.remove('hide-header')
      document.querySelector('.nav').classList.add('hide-header-small')
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);

var sideButton = document.querySelector('.side-menu-button');

sideButton.addEventListener('click', ()=>{
    document.querySelector('.ham-button').classList.toggle("switch")
    document.querySelector('.side-menu-items').classList.toggle("show-menu")
    document.getElementById('content').classList.toggle('blur')
    document.querySelector('body').classList.toggle("pressed")
    document.querySelector('html').classList.toggle("pressed")
    document.querySelector('.logo').classList.toggle("blur")

})

var sideMenuLinks = document.querySelectorAll('.side-menu-links');

for(let i = 0; i < sideMenuLinks.length; i++)
{
   sideMenuLinks[i].addEventListener('click', ()=>{
      document.querySelector('.ham-button').classList.toggle("switch")
      document.querySelector('.side-menu-items').classList.toggle("show-menu")
      document.querySelector('body').classList.toggle("pressed")
      document.querySelector('html').classList.toggle("pressed")
      document.getElementById('content').classList.toggle('blur')
      document.querySelector('.logo').classList.toggle("blur")


   })
}