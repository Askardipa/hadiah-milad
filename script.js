// Fungsi utama untuk membuka kado
function openGift() {
    const giftPage = document.getElementById('gift-page');
    const mainPage = document.getElementById('main-page');

    // 1. Hilangkan kado secara perlahan (transisi opacity)
    giftPage.style.transition = "opacity 0.5s ease";
    giftPage.style.opacity = '0';

    setTimeout(() => {
        // 2. Sembunyikan halaman kado sepenuhnya
        giftPage.classList.remove('active');
        giftPage.style.display = 'none';

        // 3. Siapkan halaman utama
        mainPage.style.display = 'block';

        // Beri jeda sangat singkat agar browser merender display:block sebelum opacity naik
        setTimeout(() => {
            mainPage.classList.add('active');
            mainPage.style.opacity = '1';
        }, 50);

        // 4. Pengaman Musik (Tidak akan error meskipun file musik tidak ada)
        const bgMusic = document.getElementById('bg-music');
        if (bgMusic) {
            bgMusic.volume = 0.6;
            bgMusic.play().catch(error => {
                console.log("Autoplay musik membutuhkan interaksi lanjutan dari user.");
            });
        }

        // 5. Mulai animasi hujan bunga
        startFlowerRain();

    }, 500); // Menunggu 500ms sampai animasi kado memudar selesai
}

// Fungsi untuk menampilkan harapan saat bunga diklik
function showWish(wishText) {
    const wishDisplay = document.getElementById('wish-display');
    wishDisplay.innerText = wishText;
    
    // Efek animasi pop-up pada teks
    wishDisplay.style.transform = 'scale(1.1)';
    wishDisplay.style.transition = 'transform 0.2s';
    
    setTimeout(() => {
        wishDisplay.style.transform = 'scale(1)';
    }, 200);
}

// Fungsi membuat animasi bunga jatuh di latar belakang
function startFlowerRain() {
    const container = document.getElementById('flower-container');
    if (!container) return; // Pengaman jika container tidak ditemukan

    const flowers = ['🌸', '🌹', '✨', '💖'];

    setInterval(() => {
        const flower = document.createElement('div');
        flower.classList.add('falling-flower');
        
        flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.fontSize = Math.random() * 15 + 10 + 'px';
        flower.style.left = Math.random() * 100 + 'vw';
        
        const duration = Math.random() * 5 + 5;
        flower.style.animationDuration = duration + 's';
        flower.style.opacity = Math.random() * 0.5 + 0.3;

        container.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, duration * 1000);
    }, 400); 
}
