document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mon-slider", {
      // Optional parameters
      loop: true,
  
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },
  
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  
      autoplay: {
        delay: 2000,
      },
    });
  });

  var icon = document.getElementById("icon");

  icon.onclick = function() {
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")) {
      icon.src = "sun.png";
    } else {
      icon.src = "moon.png";
    }
  }