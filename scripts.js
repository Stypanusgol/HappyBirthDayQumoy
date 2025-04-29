document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    const cursor = document.querySelector('.cursor');
    
    const messages = [
        "Halo Lek....",
        "Keren Cokkkk"
    ];
    
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    let typingSpeed = 150; // Kecepatan mengetik lebih lambat (ms)
    let deletingSpeed = 80; // Kecepatan menghapus lebih lambat (ms)
    let pauseBetweenMessages = 1500; // Jeda antar pesan lebih panjang (ms)
    let pauseBeforeRestart = 2000; // Jeda sebelum mengulang (ms)
    
    function type() {
        const currentMessage = messages[messageIndex];
        
        if (isDeleting) {
            // Menghapus karakter dengan lebih halus
            textElement.textContent = currentMessage.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                messageIndex++;
                
                if (messageIndex >= messages.length) {
                    messageIndex = 0;
                    isEnd = true;
                }
            }
        } else {
            // Mengetik karakter dengan lebih halus
            textElement.textContent = currentMessage.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentMessage.length) {
                if (messageIndex === messages.length - 1) {
                    // Pesan terakhir, jeda lebih lama sebelum menghapus
                    setTimeout(() => {
                        isDeleting = true;
                    }, pauseBetweenMessages);
                } else {
                    // Jeda sebelum pesan berikutnya
                    setTimeout(() => {
                        isDeleting = true;
                    }, pauseBetweenMessages / 2);
                }
            }
        }
        
        // Variasi kecepatan untuk efek lebih natural
        const speedVariation = Math.random() * 50 - 25; // ±25ms variasi
        const currentSpeed = isDeleting ? 
            deletingSpeed + speedVariation : 
            typingSpeed + speedVariation;
        
        // Jika animasi selesai, ulang setelah jeda
        if (isEnd && charIndex === 0) {
            isEnd = false;
            setTimeout(type, pauseBeforeRestart);
        } else {
            setTimeout(type, Math.max(50, currentSpeed)); // Pastikan tidak terlalu cepat
        }
    }
    
    // Mulai animasi setelah 6 detik (sesuai permintaan)
    setTimeout(type, 6000);
    
    // Animasi kursor berkedip
    setInterval(() => {
        cursor.style.opacity = (cursor.style.opacity === '0' ? '1' : '0');
    }, 600); // Kedip lebih lambat
});