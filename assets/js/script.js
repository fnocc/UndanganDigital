//Close modal
const modal = document.getElementById('modalContainer');
const buttonClose= document.getElementById('buttonCloseModal');
const main=document.getElementById('mainContent');

function toggleDisplay() {
    setTimeout(() => {
        modal.style.display = "none";
        main.style.display = "flex";
    }, 200); 
}

buttonClose.addEventListener('click', toggleDisplay);


//Function tamuUdangan
const namaTamu = "Nama Tamu";
document.getElementById('nameTerUndang').innerHTML = namaTamu;

// countdown timmer
const countDownDate = new Date("Nov 15, 2024 10:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance =countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // disply in html
    document.getElementById("countDays").innerHTML = days;
    document.getElementById("countHours").innerHTML = hours;
    document.getElementById("countMinute").innerHTML = minutes;
    document.getElementById("countSecond").innerHTML = seconds;
}, 1000);


// our galery
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'assets/images/IMG-20241017-WA0000.jpg', // Gambar pertama
        'assets/images/IMG-20241017-WA0001.jpg', // Gambar kedua
        'assets/images/IMG-20241017-WA0004.jpg', // Gambar ketiga
        'assets/images/IMG-20241017-WA0005.jpg', // Gambar keempat
        'assets/images/IMG-20241017-WA0007.jpg', // Gambar kelima
        'assets/images/IMG-20241017-WA0008.jpg'  // Gambar keenam
    ];

    let currentIndex = 0;
    const imgElement = document.getElementById('highlight-img');
    let resetTimer;


    function changeImageAutomatically() {
        imgElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }
    function startAutoChange() {
        autoChangeInterval = setInterval(changeImageAutomatically, 3000);
    }

    function stopAutoChange() {
        clearInterval(autoChangeInterval);
    }

    function changeImageWithTransition(newSrc) {
        stopAutoChange();

       
        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = setTimeout(startAutoChange, 10000);

        
        imgElement.style.opacity = 0; 
        imgElement.style.transform = 'scale(0.95)';

       
        setTimeout(() => {
            imgElement.src = newSrc;
            imgElement.style.opacity = 1;
            imgElement.style.transform = 'scale(1)';
        }, 500);
    }

    const galleryItems = document.querySelectorAll('.galery-item img');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const selectedImage = item.src;
            changeImageWithTransition(selectedImage);
        });
    });
    startAutoChange();

});


// Fungsi untuk memeriksa jika elemen pop-up ada dalam viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Menambahkan kelas 'visible' saat elemen terlihat
        } else {
            entry.target.classList.remove('visible'); // Menghapus kelas 'visible' jika elemen tidak terlihat
        }
    });
}, { threshold: 0.6 }); // Elemen harus 50% terlihat untuk memicu animasi

// Pilih semua elemen dengan kelas 'pop-up' dan amati mereka
document.querySelectorAll('.pop-up').forEach(element => {
    observer.observe(element);
});


// URL PARAMETERIZATION
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("to");

    if (guestName) {
        document.getElementById("nameTerUndang").textContent = decodeURIComponent(guestName);
    } else {
        document.getElementById("nameTerUndang").textContent = "Nama Tujuan";
    }
};
