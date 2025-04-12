// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide
setInterval(nextSlide, 5000);

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
});

// Rezervimi Form
document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Rezervimi juaj u pranua! Do të kontaktojmë me ju shpejt.');
    this.reset();
});

// Mund të shtoni një modal për të shfaqur detajet e pjatës kur klikohet butoni
document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = e.target.closest('.gallery-item');
        const title = item.querySelector('h3').textContent;
        alert(`Ju zgjodhët: ${title}\nDo të shtohet një modal me recetën dhe përbërësit!`);
        // Nëse dëshironi një modal të vërtetë, mund të përdorni libraries si Bootstrap Modal
    });
});