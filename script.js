// Global variables
const modal = document.getElementById('product-modal');
const modalName = document.getElementById('modal-product-name');
const modalImages = document.getElementById('modal-product-images');
const modalDescription = document.getElementById('modal-product-description');
const modalPrice = document.getElementById('modal-product-price');
const modalOldPrice = document.getElementById('modal-old-price');
const welcomeModal = document.getElementById('welcome-modal');
const dismissBtn = document.getElementById('dismiss-btn');
const dontShowCheckbox = document.getElementById('dont-show-checkbox');
const modalCtaBtn = document.getElementById('modal-cta-btn');

let currentImageIndex = 0;
let currentProductImages = [];
let autoScrollInterval;


// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    
    renderProducts(products);
    setupEventListeners();
    startCountdown();
    initCounterAnimation();
    initScrollingAnnouncement();
    setTimeout(() => showWelcomeModal(), 3000);
    optimizeScrollingAnnouncement();

});


function setupEventListeners() {
    // Search functionality
    document.getElementById('search').addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        const filtered = products.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.description.toLowerCase().includes(query)
        );
        renderProducts(filtered);
    });


    

      // Handle very small screens
    if (window.innerWidth <= 320) {
        document.querySelector('.hero-title').style.fontSize = '1.8rem';
        document.querySelector('.hero-subtitle').style.fontSize = '0.9rem';
    }

    // Set current date in terms modal
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Sidebar event listeners
    document.querySelector('.sidebar-toggle').addEventListener('click', toggleSidebar);
    document.querySelector('.sidebar-close').addEventListener('click', toggleSidebar);
    document.querySelector('.sidebar-overlay').addEventListener('click', toggleSidebar);

    // Product modal close handlers
    document.querySelector('.close-btn').addEventListener('click', closeProductModal);
    window.addEventListener('click', (e) => e.target === modal && closeProductModal());

    // Welcome modal events
    dismissBtn.addEventListener('click', closeWelcomeModal);
    document.querySelector('#welcome-modal .close-btn').addEventListener('click', closeWelcomeModal);
    welcomeModal.addEventListener('click', function(e) {
        if (e.target === welcomeModal) closeWelcomeModal();
    });


}

// Product rendering with new card design
// Update the renderProducts function in script.js
function renderProducts(productsToShow) {
    const container = document.getElementById('products');
    const noProductsMsg = document.getElementById('no-products-message');
    
    container.innerHTML = '';
    noProductsMsg.style.display = productsToShow.length ? 'none' : 'block';

    productsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.images[0]}" alt="${product.name}" class="product-image">
                <span class="discount-badge">${product.discount}% OFF</span>
            </div>
            <div class="product-content">
                <h2 class="product-title">${product.name}</h2>
                <div class="description-container">
                    <p class="product-description">${product.description}</p>
                </div>
                <div class="price-container">
                    <span class="old-price">₦${product.old.toLocaleString()}</span>
                    <span class="current-price">₦${product.price.toLocaleString()}</span>
                </div>
                <div class="product-buttons">
                    <button class="preview-btn">
                        <i class="fas fa-eye"></i>
                        <span>Details</span>
                    </button>
                    <button class="buy-btn">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Buy Now</span>
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners
        const previewBtn = card.querySelector('.preview-btn');
        const buyBtn = card.querySelector('.buy-btn');
        
        previewBtn.addEventListener('click', () => 
             window.location.href = `product-details.html?id=${product.id}`
    );
        buyBtn.addEventListener('click', () => window.open(product.paymentLink, '_blank'));
        
        container.appendChild(card);
    });
}

// Sidebar functions
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
}

// Countdown timer
function startCountdown() {
    const currentYear = new Date().getFullYear();
    const countDownDate = new Date(currentYear, 7, 5); 
    
    if (countDownDate < new Date()) {
        countDownDate.setFullYear(currentYear + 1);
    }

    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
        }
    }, 1000);
}

// Product modal functions
function openProductModal(product) {
    currentProductImages = product.images;
    currentImageIndex = 0;
    
    modalName.textContent = product.name;
    modalDescription.textContent = product.description;
    modalPrice.textContent = `₦${product.price.toLocaleString()}`;
    modalOldPrice.textContent = `₦${product.old.toLocaleString()}`;

     // Set the payment link
     if (modalCtaBtn) {
        modalCtaBtn.href = product.paymentLink;
        modalCtaBtn.target = '_blank'; // Open in new tab
    }
    
    renderCarousel();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    startAutoScroll();
}

function closeProductModal() {
    clearInterval(autoScrollInterval);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Carousel functions
function renderCarousel() {
    const product = products.find(p => p.images === currentProductImages);
    modalImages.innerHTML = `
        <div class="carousel">
            <div class="slides">
                ${currentProductImages.map((img, i) => `
                    <div class="slide ${i === 0 ? 'active' : ''}">
                        <div class="product-image-container">
                            <img src="${img}" alt="Product image ${i + 1}">
                            ${i === 0 ? `<span class="discount-badge">${product.discount}% OFF</span>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="carousel-nav">
                <button class="prev-btn"><i class="fas fa-chevron-left"></i></button>
                <button class="next-btn"><i class="fas fa-chevron-right"></i></button>
            </div>
            <div class="indicators-container">
                <div class="indicators">
                    ${currentProductImages.map((_, i) => `
                        <span class="indicator ${i === 0 ? 'active' : ''}"></span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.querySelector('.prev-btn').addEventListener('click', showPrevImage);
    document.querySelector('.next-btn').addEventListener('click', showNextImage);
    document.querySelectorAll('.indicator').forEach((indicator, i) => {
        indicator.addEventListener('click', () => showImage(i));
    });
}

function showNextImage() {
    showImage((currentImageIndex + 1) % currentProductImages.length);
}

function showPrevImage() {
    showImage((currentImageIndex - 1 + currentProductImages.length) % currentProductImages.length);
}

function showImage(index) {
    currentImageIndex = index;
    
    document.querySelectorAll('.slide').forEach((slide, i) => {
        slide.classList.toggle('active', i === currentImageIndex);
    });
    
    document.querySelectorAll('.indicator').forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentImageIndex);
    });
    
    resetAutoScroll();
}

function startAutoScroll() {
    autoScrollInterval = setInterval(showNextImage, 3000);
}

function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
}

// Welcome modal functions
function showWelcomeModal() {
    if (localStorage.getItem('hideWelcomeModal') !== 'true') {
        welcomeModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeWelcomeModal() {
    // Play chime sound
    //const confettiSound = document.getElementById('confetti-sound');
    //confettiSound.play().catch(e => console.log("Sound playback prevented:", e));
    
    // Trigger confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f57c00', '#d4af37', '#ffffff']
    });
    
    // Close modal
    welcomeModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Save preference if checked
    if (dontShowCheckbox.checked) {
        localStorage.setItem('hideWelcomeModal', 'true');
    }
}

// Scrolling announcement optimization
function optimizeScrollingAnnouncement() {
    const track = document.querySelector('.scrolling-track');
    if (!track) return;
    
    const content = document.querySelector('.scrolling-content');
    const contentWidth = content.scrollWidth / 2;
    const viewportWidth = window.innerWidth;
    const speedRatio = contentWidth / viewportWidth;
    
    const baseDuration = 30;
    const adjustedDuration = baseDuration * (speedRatio / 2);
    
    content.style.animationDuration = `${adjustedDuration}s`;
    track.style.transform = 'translateZ(0)';
    content.style.transform = 'translateZ(0)';
}

// Initialize scrolling announcement
function initScrollingAnnouncement() {
    const scrollingContent = document.querySelector('.scrolling-content');
    if (!scrollingContent) return;
  
    const items = scrollingContent.querySelectorAll('.scrolling-item');
    if (items.length <= 3) {
        items.forEach(item => {
            const clone = item.cloneNode(true);
            scrollingContent.appendChild(clone);
        });
    }
}

// Counter animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    let animated = false;

    function animateCounters() {
        if (!animated && isElementInViewport(document.querySelector('.stats-section'))) {
            animated = true;
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;

                const updateCount = () => {
                    const currentCount = +counter.innerText;
                    if (currentCount < target) {
                        counter.innerText = Math.ceil(currentCount + increment);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };

                updateCount();
            });
        }
    }

    animateCounters();
    window.addEventListener('scroll', animateCounters);
}


function isElementInViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}


// Handle window resize
window.addEventListener('resize', () => {
    optimizeScrollingAnnouncement();
});