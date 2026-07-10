// Membuka Kado dan Memulai Musik
function openGift() {
    // Jalankan Musik
    const music = document.getElementById('bg-music');
    music.play().catch(error => {
        console.log("Autoplay dicegah oleh browser, namun musik diusahakan tetap jalan.");
    });

    // Pindah Halaman
    document.getElementById('gift-page').classList.remove('active');
    
    const mainPage = document.getElementById('main-page');
    mainPage.style.display = 'block';
    
    // Mulai animasi kelopak bunga gugur
    setInterval(createPetal, 300);
}

// Menampilkan Ucapan Rahasia saat Bunga Diklik
function showWish(message) {
    document.getElementById('wish-display').innerText = message;
}

// Membuat Kelopak Bunga Gugur secara Acak
function createPetal() {
    const container = document.getElementById('flower-container');
    if (!container) return;

    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Konfigurasi ukuran dan posisi acak
    const size = Math.random() * 8 + 6; // 6px - 14px
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${Math.random() * 100}vw`;
    
    // Durasi jatuh acak
    const duration = Math.random() * 3 + 4; // 4s - 7s
    petal.style.animationDuration = `${duration}s`;
    
    container.appendChild(petal);

    // Hapus element setelah animasi selesai agar tidak membebani memori
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}