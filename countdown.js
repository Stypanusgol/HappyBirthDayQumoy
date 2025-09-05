// countdown.js

// 🎯 Cek apakah sudah ada target di localStorage
let targetDate = localStorage.getItem("birthdayTarget");

if (!targetDate) {
  // Kalau belum ada → set target baru (10 detik dari sekarang untuk test)
  const now = new Date();
  targetDate = new Date(now.getTime() + 30 * 60 * 1000).getTime();
  localStorage.setItem("birthdayTarget", targetDate);
} else {
  targetDate = parseInt(targetDate); // konversi string → number
}

const countdownContainer = document.getElementById("countdown-container");
const birthdayContainer = document.getElementById("birthday-container");
const countdownElement = document.getElementById("countdown");

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = minutes + "m " + seconds + "s ";
  } else {
    clearInterval(timer);

    // ✨ Fade-out countdown
    countdownContainer.style.opacity = "0";

    setTimeout(() => {
      // Hilangkan countdown
      countdownContainer.style.display = "none";
      countdownContainer.style.zIndex = "-1";

      // munculkan halaman ulang tahun
      birthdayContainer.classList.remove("hidden");
      birthdayContainer.style.opacity = "0";
      birthdayContainer.style.transition = "opacity 1s ease";
      setTimeout(() => {
        birthdayContainer.style.opacity = "1";
      }, 50);
    }, 1000);
  }
}, 1000);
