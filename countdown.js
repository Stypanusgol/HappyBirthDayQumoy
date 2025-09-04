// 🎯 Target waktu = jam 00:00 tanggal besok
const now = new Date();
const targetDate = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + 1, // besok
  0,
  0,
  0,
  0
).getTime();

const countdownContainer = document.getElementById("countdown-container");
const birthdayContainer = document.getElementById("birthday-container");
const countdownElement = document.getElementById("countdown");

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  } else {
    clearInterval(timer);

    // ✨ Fade-out countdown
    countdownContainer.style.transition = "opacity 1s ease";
    countdownContainer.style.opacity = "0";

    setTimeout(() => {
      // Hilangkan layer hitam
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
