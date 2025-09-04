// 🎯 Target waktu = jam 00:00 tanggal 2 September 2025
const targetDate = new Date("Sep 2, 2025 00:00:00").getTime();

const countdownContainer = document.getElementById("countdown-container");
const birthdayContainer = document.getElementById("birthday-container");
const countdownElement = document.getElementById("countdown");

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= 0) {
    clearInterval(timer);

    // ✨ Tambahin efek fade-out biar smooth
    countdownContainer.style.transition = "opacity 1s ease";
    countdownContainer.style.opacity = "0";

    setTimeout(() => {
      countdownContainer.classList.add("hidden");
      birthdayContainer.classList.remove("hidden");
      birthdayContainer.style.opacity = "0";
      birthdayContainer.style.transition = "opacity 1s ease";
      setTimeout(() => {
        birthdayContainer.style.opacity = "1";
      }, 50);
    }, 1000);
  } else {
    countdownElement.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }
}, 1000);
