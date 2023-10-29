var lastScrollTop = pageYOffset;

window.addEventListener('scroll', function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        document.querySelector('.header').classList.add('hide-header')
    } else if (st == 0) {
        document.querySelector('.header').classList.remove('hide-header')
        document.querySelector('.nav').classList.remove('hide-header-small')
    } else {
        document.querySelector('.header').classList.remove('hide-header')
        document.querySelector('.nav').classList.add('hide-header-small')
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

var sideButton = document.querySelector('.side-menu-button');

sideButton.addEventListener('click', () => {
    document.querySelector('.ham-button').classList.toggle("switch")
    document.querySelector('.side-menu-items').classList.toggle("show-menu")
    document.getElementById('content').classList.toggle('blur')
    document.querySelector('body').classList.toggle("pressed")
    document.querySelector('html').classList.toggle("pressed")
    document.querySelector('.logo').classList.toggle("blur")

})

var sideMenuLinks = document.querySelectorAll('.side-menu-links');

for (let i = 0; i < sideMenuLinks.length; i++) {
    sideMenuLinks[i].addEventListener('click', () => {
        document.querySelector('.ham-button').classList.toggle("switch")
        document.querySelector('.side-menu-items').classList.toggle("show-menu")
        document.querySelector('body').classList.toggle("pressed")
        document.querySelector('html').classList.toggle("pressed")
        document.getElementById('content').classList.toggle('blur')
        document.querySelector('.logo').classList.toggle("blur")


    })
}

document.querySelector('.contact .email').addEventListener("mouseover", () => {
    document.querySelector('.contact-content').classList.add('scale-it')
}, false);

document.querySelector('.contact .email').addEventListener("mouseout", () => {
    document.querySelector('.contact-content').classList.remove('scale-it')
}, false);


document.addEventListener("DOMContentLoaded", function () {
    AOS.refresh();
    const filterList = document.getElementById("lang-filter");
    const items = document.querySelectorAll(".projectFilter");
  
    filterList.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        const selectedFilter = e.target.getAttribute("data-filter");
        let twoOrMore = selectedFilter.split(' ')
        console.log(twoOrMore)
        // Remove the 'active' class from all <li> elements
        const liElements = filterList.getElementsByTagName("li");
        for (const li of liElements) {
          li.classList.remove("active");
        }
  
        // Add the 'active' class to the selected <li> element
        e.target.classList.add("active");
  
        // Show or hide items based on the selected filter
        items.forEach((item) => {
          let  itemCategory = item.classList[3];
            
          if (selectedFilter === "all" || itemCategory === twoOrMore[0] || itemCategory === twoOrMore[1]) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      }
    });
  });