
    const targets = document.querySelectorAll(".anim");
    const isAnimated = "is-animated";
    const threshold = 0;
    
    function callback(entries, observer) {
      entries.forEach((entry) => {
        const elem = entry.target;
        if (entry.intersectionRatio >= threshold) {
          elem.classList.add(isAnimated);
          //observer.unobserve(elem);
        } else {
          elem.classList.remove(isAnimated);
        }
      });
    }
    
    const observer = new IntersectionObserver(callback, { threshold });
    for (const target of targets) {
      observer.observe(target);
    }

 let headers = document.querySelectorAll('.fadeOut');

 
function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }
  
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;
  
  var opacity = 1;
  
  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }
  
  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
    headers.forEach((header) => {
  fadeOutOnScroll(header);
})
}

window.addEventListener('scroll', scrollHandler);