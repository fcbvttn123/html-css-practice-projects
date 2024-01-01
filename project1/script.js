window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
  htmlElement.style.setProperty( "--scroll", percentOfScreenHeightScrolled * 100);

  headerScrollAnimation(percentOfScreenHeightScrolled * 100)
}

setScrollVar();




function headerScrollAnimation(percent) {
    let header = document.querySelector(".main-header .wrapper")
    if(percent > 0) {
        header.classList.add("reduce-height")
    } else {
        header.classList.remove("reduce-height")
    }
}
