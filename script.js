document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.fb-slider');
    const slides = document.querySelectorAll('.fb-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
  
    let currentIndex = 0;
    const slideTS = 3; // Total slides visible
    const slideWid = slides[0].offsetWidth + 20; // Width of slide + gap
  
    // Next Button Event
    nextBtn.addEventListener('click', () => {
      if (currentIndex < slides.length - slideTS) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * slideWid}px)`; // Smooth transition
      }
    });
  
    // Previous Button Event
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * slideWid}px)`; // Smooth transition
      }
    });
  });

  document.getElementById("join-btn").onclick = function () {
    window.location.href = "join-us.html";
  };

  