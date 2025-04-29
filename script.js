
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener('DOMContentLoaded', function() {
    // Button click event
    const nextBtn = document.getElementById('nextBtn');
    
    nextBtn.addEventListener('click', function() {
        // Redirect to ultah.html
        window.location.href = 'ulangtahun.html';
    });

    // Create additional balloons dynamically
    const balloonsContainer = document.querySelector('.balloons');
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.top = '100%';
        balloon.style.width = (Math.random() * 20 + 20) + 'px';
        balloon.style.height = (Math.random() * 30 + 30) + 'px';
        balloon.style.background = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`;
        balloon.style.animationDelay = (Math.random() * 10) + 's';
        balloon.style.animationDuration = (Math.random() * 10 + 10) + 's';
        balloonsContainer.appendChild(balloon);
    }

    // Create additional confetti dynamically
    const confettiContainer = document.querySelector('.container');
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDelay = (Math.random() * 5) + 's';
        confetti.style.animationDuration = (Math.random() * 5 + 3) + 's';
        confettiContainer.appendChild(confetti);
    }
});