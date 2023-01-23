function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

 window.addEventListener("load", () => {
   document.querySelector(".logo").classList.remove("logo-active");
   document.querySelector(".loader_0").classList.remove("loader-active");
   document.querySelector(".loader_1").classList.remove("loader-active");
   document.querySelector(".loader_2").classList.remove("loader-active");
   document.querySelector(".loader_3").classList.remove("loader-active");
   document.querySelector(".loader_4").classList.remove("loader-active");
 });

 