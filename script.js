const niatSholatData = [
    { tag: "Subuh", name: "Niat Sholat Subuh (2 Rakaat)", arab: "أُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Ushallii fardhas-shubhi rak'ataini mustaqbilal qiblati adaa'an lillaahi ta'aala.", trans: "Aku berniat sholat fardhu Subuh dua rakaat menghadap kiblat karena Allah Ta'ala." },
    { tag: "Dzuhur", name: "Niat Sholat Dzuhur (4 Rakaat)", arab: "أُصَلِّى فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Ushallii fardhadh-dhuhri arba'a raka'aatim mustaqbilal qiblati adaa'an lillaahi ta'aala.", trans: "Aku berniat sholat fardhu Dzuhur empat rakaat menghadap kiblat karena Allah Ta'ala." },
    { tag: "Ashar", name: "Niat Sholat Ashar (4 Rakaat)", arab: "أُصَلِّى فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Ushallii fardhal-'ashri arba'a raka'aatim mustaqbilal qiblati adaa'an lillaahi ta'aala.", trans: "Aku berniat sholat fardhu Ashar empat rakaat menghadap kiblat karena Allah Ta'ala." },
    { tag: "Maghrib", name: "Niat Sholat Maghrib (3 Rakaat)", arab: "أُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Ushallii fardhal-maghribi tsalaatsa raka'aatim mustaqbilal qiblati adaa'an lillaahi ta'aala.", trans: "Aku berniat sholat fardhu Maghrib tiga rakaat menghadap kiblat karena Allah Ta'ala." },
    { tag: "Isya", name: "Niat Sholat Isya (4 Rakaat)", arab: "أُصَلِّى فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى", latin: "Ushallii fardhal-'isyaa'i arba'a raka'aatim mustaqbilal qiblati adaa'an lillaahi ta'aala.", trans: "Aku berniat sholat fardhu Isya empat rakaat menghadap kiblat karena Allah Ta'ala." }
];

const bacaanSholatData = [
    { tag: "Langkah 1", name: "Takbiratul Ihram", arab: "اللَّهُ أَكْبَرُ", latin: "Allahu Akbar.", trans: "Allah Maha Besar." },
    { tag: "Langkah 2", name: "Doa Iftitah", arab: "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً", latin: "Allahu akbar kabiraw walhamdu lillahi katsira wa subhanallahi bukrataw wa ashila.", trans: "Allah Maha Besar dan segala puji bagi Allah." },
    { tag: "Langkah 3", name: "Ruku'", arab: "سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ", latin: "Subhana rabbiyal 'adhimi wa bihamdih. (3x)", trans: "Maha Suci Tuhanku Yang Maha Agung." },
    { tag: "Langkah 4", name: "I'tidal", arab: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ، رَبَّنَا لَكَ الْحَمْدُ", latin: "Sami'allahu liman hamidah. Rabbana lakal hamd.", trans: "Allah mendengar orang yang memuji-Nya." },
    { tag: "Langkah 5", name: "Sujud", arab: "سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ", latin: "Subhana rabbiyal a'la wa bihamdih. (3x)", trans: "Maha Suci Tuhanku Yang Maha Tinggi." }
];

const wudhuData = [
    { tag: "Urutan 1", name: "Niat Wudhu", arab: "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا ِللهِ تَعَالَى", latin: "Nawaitul wudhuu'a liraf'il hadatsil ashghari fardhal lillaahi ta'aala.", trans: "Aku berniat berwudhu untuk menghilangkan hadats kecil karena Allah Ta'ala." },
    { tag: "Urutan 2", name: "Mencuci Telapak Tangan", arab: "-", latin: "Mencuci telapak tangan hingga menyela jari-jari (3x).", trans: "Membersihkan tangan dari kotoran." }
];

const hijaiyahLengkap = [
    { arab: 'أ', baca: 'Alif', ejaan: 'A / I / U' },
    { arab: 'ب', baca: 'Ba', ejaan: 'B' },
    { arab: 'ت', baca: 'Ta', ejaan: 'T' },
    { arab: 'ث', baca: 'Tsa', ejaan: 'Ts' },
    { arab: 'ج', baca: 'Jim', ejaan: 'J' },
    { arab: 'ح', baca: 'Ha', ejaan: 'Ḥ' },
    { arab: 'خ', baca: 'Kha', ejaan: 'Kh' },
    { arab: 'د', baca: 'Dal', ejaan: 'D' },
    { arab: 'ذ', baca: 'Dzal', ejaan: 'Dz' },
    { arab: 'ر', baca: 'Ra', ejaan: 'R' },
    { arab: 'ز', baca: 'Zai', ejaan: 'Z' },
    { arab: 'س', baca: 'Sin', ejaan: 'S' },
    { arab: 'ش', baca: 'Syin', ejaan: 'Sy' },
    { arab: 'ص', baca: 'Shad', ejaan: 'Sh' },
    { arab: 'ض', baca: 'Dhad', ejaan: 'Dh' },
    { arab: 'ط', baca: 'Thah', ejaan: 'Th' },
    { arab: 'ظ', baca: 'Zhah', ejaan: 'Zh' },
    { arab: 'ع', baca: 'Ain', ejaan: "'ain" },
    { arab: 'غ', baca: 'Ghain', ejaan: 'Gh' },
    { arab: 'ف', baca: 'Fa', ejaan: 'F' },
    { arab: 'ق', baca: 'Qaf', ejaan: 'Q' },
    { arab: 'ك', baca: 'Kaf', ejaan: 'K' },
    { arab: 'ل', baca: 'Lam', ejaan: 'L' },
    { arab: 'م', baca: 'Mim', ejaan: 'M' },
    { arab: 'ن', baca: 'Nun', ejaan: 'N' },
    { arab: 'و', baca: 'Wau', ejaan: 'W' },
    { arab: 'ه', baca: 'Ha', ejaan: 'H' },
    { arab: 'لا', baca: 'Lam Alif', ejaan: 'La' },
    { arab: 'ء', baca: 'Hamzah', ejaan: "'" },
    { arab: 'ي', baca: 'Ya', ejaan: 'Y' }
];

let allSurahs = [];
let currentSurahData = null;
let isPremiumUser = false;
let bgVideoActive = false;
const mainAudio = document.getElementById('main-audio-player');

const premiumUsers = {
    "Asril": "77",
    "admin": "user",
    "buyer": "124"
};

function checkStoredPremium() {
    const savedStatus = localStorage.getItem('alquran_is_premium');
    if (savedStatus === 'true') {
        isPremiumUser = true;
        updatePremiumUI();
    }
}

function handleLogin() {
    const userIn = document.getElementById('login-user').value.trim();
    const passIn = document.getElementById('login-pass').value.trim();

    if (premiumUsers[userIn] && premiumUsers[userIn] === passIn) {
        isPremiumUser = true;
        localStorage.setItem('alquran_is_premium', 'true');
        updatePremiumUI();
        alert(`Login Berhasil! Selamat datang, ${userIn}. Fitur video pemandangan kini terbuka.`);
    } else {
        alert('Username atau Password salah!');
    }
}

function handleLogout() {
    isPremiumUser = false;
    bgVideoActive = false;
    localStorage.removeItem('alquran_is_premium');
    document.getElementById('login-user').value = '';
    document.getElementById('login-pass').value = '';
    updatePremiumUI();
    applyVideoState();
    alert('Berhasil logout / reset status.');
}

function updatePremiumUI() {
    const statusText = document.getElementById('account-status-text');
    const toggleBtn = document.getElementById('toggleBgBtn');
    
    if (isPremiumUser) {
        statusText.innerText = "Status: Premium User (Aktif ✔)";
        statusText.style.color = "#4ade80";
        toggleBtn.classList.add('active-premium');
    } else {
        statusText.innerText = "Status: Free User (Video Pemandangan Terkunci)";
        statusText.style.color = "#d1d5db";
        toggleBtn.classList.remove('active-premium');
        bgVideoActive = false;
    }
}

function toggleBackgroundVideo() {
    if (!isPremiumUser) {
        alert('Fitur ini khusus Premium! Silakan lakukan pembayaran ke DANA 6285215097779 dan kirim bukti ke ryzzinew1@gmail.com atau login akun premium.');
        return;
    }
    bgVideoActive = !bgVideoActive;
    applyVideoState();
}

function applyVideoState() {
    const bgVideo = document.getElementById('bgVideoElement');
    const overlay = document.getElementById('modalOverlayElement');
    const toggleBtn = document.getElementById('toggleBgBtn');

    if (isPremiumUser && bgVideoActive) {
        bgVideo.style.display = 'block';
        bgVideo.play();
        overlay.style.background = 'rgba(0, 0, 0, 0.55)';
        toggleBtn.innerText = "Matikan Video Pemandangan";
    } else {
        bgVideo.style.display = 'none';
        bgVideo.pause();
        overlay.style.background = '#000000';
        toggleBtn.innerText = "Nyalakan Video Pemandangan";
    }
}

function getFavorites() {
    try {
        const favs = localStorage.getItem('alquran_favorites');
        return favs ? JSON.parse(favs) : [];
    } catch (e) {
        return [];
    }
}

function isFavorite(nomor) {
    const favs = getFavorites();
    return favs.some(s => s.nomor === nomor);
}

function toggleCurrentFavorite() {
    if (!currentSurahData) return;
    let favs = getFavorites();
    const index = favs.findIndex(s => s.nomor === currentSurahData.nomor);
    
    const btn = document.getElementById('favBtn');
    if (index > -1) {
        favs.splice(index, 1);
        btn.classList.remove('active');
    } else {
        favs.push({
            nomor: currentSurahData.nomor,
            namaLatin: currentSurahData.namaLatin,
            nama: currentSurahData.nama,
            arti: currentSurahData.arti,
            jumlahAyat: currentSurahData.jumlahAyat
        });
        btn.classList.add('active');
    }
    localStorage.setItem('alquran_favorites', JSON.stringify(favs));
    renderFavoritesList();
}

function renderFavoritesList() {
    const container = document.getElementById('favorite-list');
    const favs = getFavorites();
    
    if (favs.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #9ca3af; grid-column: 1/-1; padding: 20px;">Belum ada surah favorit yang disimpan.</p>';
        return;
    }

    container.innerHTML = '';
    favs.forEach(surah => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => loadSurahDetail(surah.nomor);
        card.innerHTML = `
            <div class="card-title"><span>${surah.nomor}. ${surah.namaLatin}</span><span>${surah.nama}</span></div>
            <small style="color:#9ca3af;">${surah.arti} • ${surah.jumlahAyat} Ayat</small>
        `;
        container.appendChild(card);
    });
}

function renderCards(dataList) {
    const container = document.getElementById('sholat-wudhu-content');
    container.innerHTML = '';
    dataList.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-step"><span class="step-badge">${item.tag}</span><span class="item-name">${item.name}</span></div>
            ${item.arab !== '-' ? `<div class="item-arabic">${item.arab}</div>` : ''}
            <div class="item-latin">${item.latin}</div>
            <div class="item-trans"><b>Arti:</b> ${item.trans}</div>
        `;
        container.appendChild(card);
    });
}

function switchSholatWudhu(type, btnElement) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    if (type === 'niat') renderCards(niatSholatData);
    else if (type === 'bacaan') renderCards(bacaanSholatData);
    else if (type === 'wudhu') renderCards(wudhuData);
}

function renderHijaiyah() {
    const container = document.getElementById('hijaiyah-list');
    container.innerHTML = '';
    hijaiyahLengkap.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'hijaiyah-card';
        div.innerHTML = `<div class="hijaiyah-symbol">${item.arab}</div><strong style="color:#ffffff; font-size:0.95rem;">${index + 1}. ${item.baca}</strong>`;
        container.appendChild(div);
    });
}

async function fetchSurahs() {
    const listEl = document.getElementById('surah-list');
    try {
        const response = await fetch('https://equran.id/api/v2/surat');
        const result = await response.json();
        allSurahs = result.data;
        renderSurahList(allSurahs);
    } catch (error) {
        listEl.innerHTML = '<p style="text-align:center; color:red; grid-column:1/-1;">Gagal memuat data.</p>';
    }
}

function renderSurahList(surahs) {
    const container = document.getElementById('surah-list');
    container.innerHTML = '';
    surahs.forEach(surah => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => loadSurahDetail(surah.nomor);
        card.innerHTML = `
            <div class="card-title"><span>${surah.nomor}. ${surah.namaLatin}</span><span>${surah.nama}</span></div>
            <small style="color:#9ca3af;">${surah.arti} • ${surah.jumlahAyat} Ayat</small>
        `;
        container.appendChild(card);
    });
}

function filterSurah() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = allSurahs.filter(s => s.namaLatin.toLowerCase().includes(query));
    renderSurahList(filtered);
}

async function loadSurahDetail(nomor) {
    showPage('page-detail');
    const container = document.getElementById('verses-container');
    const title = document.getElementById('surah-title');
    container.innerHTML = '<p style="text-align:center; color:#9ca3af;">Memuat ayat dan audio...</p>';
    
    try {
        const response = await fetch(`https://equran.id/api/v2/surat/${nomor}`);
        const result = await response.json();
        const surah = result.data;
        currentSurahData = surah;

        title.innerText = `${surah.nomor}. ${surah.namaLatin} (${surah.nama})`;
        
        const trackTitleText = `${surah.nomor}. ${surah.namaLatin} (${surah.nama})`;
        document.getElementById('trigger-track-title').innerText = surah.namaLatin;
        document.getElementById('modal-track-title').innerText = trackTitleText;
        document.getElementById('floatingTitle').innerText = trackTitleText;

        const favBtn = document.getElementById('favBtn');
        if (isFavorite(surah.nomor)) {
            favBtn.classList.add('active');
        } else {
            favBtn.classList.remove('active');
        }

        let audioSrc = surah.audioFull?.['05'] || surah.audioFull?.['01'] || `https://download.quranicaudio.com/quran/mishaari_raashid_al_afasy/${String(nomor).padStart(3, '0')}.mp3`;
        
        if (mainAudio.src !== audioSrc && mainAudio.src !== new URL(audioSrc, window.location.href).href) {
            mainAudio.src = audioSrc;
            mainAudio.load();
        }
        
        container.innerHTML = '';
        surah.ayat.forEach(ayat => {
            const box = document.createElement('div');
            box.className = 'verse-box';
            box.innerHTML = `
                <div class="arabic-text">${ayat.teksArab} (${ayat.nomorAyat})</div>
                <div style="font-size:0.9rem; color:#e5e7eb; font-weight:600;">${ayat.teksLatin}</div>
                <div style="font-size:0.85rem; color:#9ca3af; margin-top:5px;">${ayat.teksIndonesia}</div>
            `;
            container.appendChild(box);
        });
    } catch (e) {
        container.innerHTML = '<p style="text-align:center; color:red;">Gagal memuat detail ayat.</p>';
    }
}

function openMusicModal() { 
    applyVideoState();
    document.getElementById('musicModal').classList.add('active'); 
}
function closeMusicModal() { document.getElementById('musicModal').classList.remove('active'); }

function togglePlayPause() {
    if (mainAudio.paused) mainAudio.play();
    else mainAudio.pause();
}

mainAudio.addEventListener('play', () => {
    document.getElementById('discIcon').classList.add('playing');
    document.getElementById('floatingArtwork').classList.add('playing');
    document.getElementById('playPauseIcon').innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
    document.getElementById('floatingPlayIcon').innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
    document.getElementById('floatingMiniPlayer').classList.add('active');
});

mainAudio.addEventListener('pause', () => {
    document.getElementById('discIcon').classList.remove('playing');
    document.getElementById('floatingArtwork').classList.remove('playing');
    document.getElementById('playPauseIcon').innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
    document.getElementById('floatingPlayIcon').innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
});

mainAudio.addEventListener('timeupdate', () => {
    if (!isNaN(mainAudio.duration)) {
        const progressPercent = (mainAudio.currentTime / mainAudio.duration) * 100;
        document.getElementById('progressFilled').style.width = `${progressPercent}%`;
        document.getElementById('currentTime').innerText = formatTime(mainAudio.currentTime);
        document.getElementById('durationTime').innerText = `-${formatTime(mainAudio.duration - mainAudio.currentTime)}`;
    }
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function seekAudio(event) {
    const progressBar = document.getElementById('progressBar');
    const rect = progressBar.getBoundingClientRect();
    if (!isNaN(mainAudio.duration)) {
        mainAudio.currentTime = ((event.clientX - rect.left) / rect.width) * mainAudio.duration;
    }
}

function skipAudio(seconds) {
    mainAudio.currentTime = Math.min(Math.max(mainAudio.currentTime + seconds, 0), mainAudio.duration);
}

function togglePlaybackSpeed() {
    const speeds = [1, 1.25, 1.5, 2];
    let nextIdx = (speeds.indexOf(mainAudio.playbackRate) + 1) % speeds.length;
    mainAudio.playbackRate = speeds[nextIdx];
    event.target.innerText = `${speeds[nextIdx]}×`;
}

function toggleMute() { mainAudio.muted = !mainAudio.muted; }
function toggleSleepTimer() { alert("Sleep Timer aktif."); }

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0,0);
}

function switchTab(element, pageId) {
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    moveLiquidPill(element);
    showPage(pageId);
}

const nav = document.getElementById('bottomNav');
const liquidPill = document.getElementById('liquidPill');

function moveLiquidPill(targetEl) {
    const navRect = nav.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();
    liquidPill.style.width = `${targetRect.width}px`;
    liquidPill.style.transform = `translate(${targetRect.left - navRect.left}px, -50%)`;
}

window.addEventListener('load', () => {
    moveLiquidPill(document.querySelector('.nav-item.active'));
    checkStoredPremium();
    fetchSurahs();
    switchSholatWudhu('niat', document.querySelector('.tab-btn'));
    renderHijaiyah();
    renderFavoritesList();
});

window.addEventListener('resize', () => {
    moveLiquidPill(document.querySelector('.nav-item.active'));
});

// Fitur Anti Inspect & Anti Klik Kanan
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('Tindakan dikunci!');
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        alert('Tindakan dikunci!');
        return false;
    }

    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        alert('Tindakan dikunci!');
        return false;
    }

    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        alert('Tindakan dikunci!');
        return false;
    }
});

// Registrasi Service Worker untuk Fitur PWA Offline
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((reg) => console.log('Service Worker berhasil didaftarkan:', reg.scope))
            .catch((err) => console.error('Gagal mendaftarkan Service Worker:', err));
    });
}
