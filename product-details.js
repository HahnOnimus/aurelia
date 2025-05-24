// product-details.js
document.addEventListener("DOMContentLoaded", function() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    // Find product in products array
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Display product details
    displayProductDetails(product);
    
    // Initialize interactive elements
    initImageGallery(product.images);
    initFAQ();
    initWishlistButton();
    initShareButton();
    initTermsButton();
});


// Set current date in terms modal
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    //document.getElementById('current-date').textContent = formattedDate;

function displayProductDetails(product) {
    // Basic product info
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('full-description').textContent = product.fullDescription;
    document.getElementById('current-price').textContent = `₦${product.price.toLocaleString()}`;
    document.getElementById('old-price').textContent = `₦${product.old.toLocaleString()}`;
    document.getElementById('discount-badge').textContent = `${product.discount}% OFF`;
    document.getElementById('buy-now-btn').href = product.paymentLink;
    
    // Calculate savings
    const savings = product.old - product.price;
    document.querySelector('.price-savings').textContent = `You save ₦${savings.toLocaleString()}`;
    
    // Rating and stats
    renderRatingStars(product.rating);
    document.querySelector('.rating-count').textContent = `(${product.ratingCount} reviews)`;
    document.querySelector('.likes-count').textContent = formatNumber(product.likes);
    document.querySelector('.downloads-count').textContent = formatNumber(product.downloads);
    
    // Product features
    populateList('uses-list', product.uses);
    populateList('how-it-works', product.howItWorks);
    populateList('advantages', product.advantages);
    populateList('consequences', product.consequences);
    
    // Testimonials
    if (product.testimonials?.length > 0) {
        populateTestimonials(product.testimonials);
    }
    
    // FAQs
    if (product.faqs?.length > 0) {
        populateFAQs(product.faqs);
    }
}

function renderRatingStars(rating) {
    const starsContainer = document.querySelector('.stars');
    starsContainer.innerHTML = '';
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        const star = document.createElement('i');
        star.className = 'fas fa-star';
        starsContainer.appendChild(star);
    }
    
    // Half star
    if (hasHalfStar) {
        const halfStar = document.createElement('i');
        halfStar.className = 'fas fa-star-half-alt';
        starsContainer.appendChild(halfStar);
    }
    
    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        const emptyStar = document.createElement('i');
        emptyStar.className = 'far fa-star';
        starsContainer.appendChild(emptyStar);
    }
}

function initImageGallery(images) {
    const mainImage = document.getElementById('main-image');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    
    if (!images?.length) return;
    
    mainImage.src = images[0];
    thumbnailContainer.innerHTML = '';
    
    images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.alt = `Thumbnail ${index + 1}`;
        thumb.className = 'thumbnail' + (index === 0 ? ' active' : '');
        
        thumb.addEventListener('click', () => {
            mainImage.src = img;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        
        thumbnailContainer.appendChild(thumb);
    });
}

function populateList(listId, items) {
    const list = document.getElementById(listId);
    if (!list || !items?.length) return;
    
    list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

function populateTestimonials(testimonials) {
    const container = document.querySelector('.testimonials-preview');
    if (!container || !testimonials.length) return;
    
    // Clear existing testimonials except header
    document.querySelectorAll('.testimonial-card').forEach(card => card.remove());
    
    // Add first testimonial as preview
    const firstTestimonial = testimonials[0];
    const testimonialHTML = `
        <div class="testimonial-card">
            <div class="testimonial-content">"${firstTestimonial.text}"</div>
            <div class="testimonial-author">
                <img src="${firstTestimonial.avatar}" alt="${firstTestimonial.name}" class="author-avatar">
                <div class="author-info">
                    <span class="author-name">${firstTestimonial.name}</span>
                    <span class="author-role">${firstTestimonial.role}</span>
                </div>
            </div>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', testimonialHTML);
    document.querySelector('.view-all-testimonials').textContent = `View All ${testimonials.length} Reviews`;
}

function populateFAQs(faqs) {
    const container = document.querySelector('.faq-section');
    if (!container || !faqs.length) return;
    
    // Clear existing FAQs except header
    document.querySelectorAll('.faq-item').forEach(item => item.remove());
    
    // Add all FAQs
    faqs.forEach(faq => {
        const faqHTML = `
            <div class="faq-item">
                <div class="faq-question">
                    <span>${faq.question}</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">${faq.answer}</div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', faqHTML);
    });
}

function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other open FAQs
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current FAQ
            item.classList.toggle('active');
        });
    });
}

function initWishlistButton() {
    const btn = document.querySelector('.wishlist-btn');
    if (!btn) return;
    
    btn.addEventListener('click', function() {
        const isActive = this.classList.toggle('active');
        const icon = this.querySelector('i');
        
        if (isActive) {
            icon.className = 'fas fa-heart';
            this.innerHTML = '<i class="fas fa-heart"></i> Wishlisted';
            showToast('Added to wishlist');
        } else {
            icon.className = 'far fa-heart';
            this.innerHTML = '<i class="far fa-heart"></i> Wishlist';
            showToast('Removed from wishlist');
        }
    });
}

function initShareButton() {
    const btn = document.querySelector('.share-btn');
    if (!btn) return;
    
    btn.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: document.getElementById('product-name').textContent,
                text: 'Check out this product from Aurelia!',
                url: window.location.href
            }).catch(err => console.log('Share failed:', err));
        } else {
            // Fallback for browsers without Web Share API
            window.open(
                `https://wa.me/?text=${encodeURIComponent(
                    `Check out "${document.getElementById('product-name').textContent}" on Aurelia: ${window.location.href}`
                )}`,
                '_blank'
            );
        }
    });
}

function initTermsButton() {
    const btn = document.querySelector('.terms-btn');
    if (!btn) return;
    
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        showTermsModal();
    });
}

function showTermsModal() {
    const modal = document.getElementById('terms-modal');
    if (!modal) return;
    
    // Populate terms content
    const termsBody = modal.querySelector('.terms-body');
    termsBody.innerHTML = `
        <h3>1. Final Sale Policy</h3>
        <p>All software products sold through Aurelia are considered <strong>final sales</strong>. <strong>No refunds, returns, exchanges, or cancellations</strong> will be permitted under any circumstances, including but not limited to:</p>
        <ul>
            <li>Customer dissatisfaction with the software features.</li>
            <li>Compatibility issues.</li>
            <li>Change of mind after purchase.</li>
            <li>Errors in purchase made by the customer.</li>
        </ul>
        <p>By completing a purchase, the customer acknowledges and accepts this <strong>strict no-refund policy</strong>.</p>

        <h3>2. Software Installation & Delivery</h3>
        <p>Upon confirmation of a successful transaction:</p>
        <ul>
            <li>The purchased software will be installed <strong>within 24 to 48 hours</strong>.</li>
            <li>In rare cases involving unforeseen delays (e.g., technical difficulties or platform access issues), installation may take up to <strong>72 hours</strong>.</li>
            <li>The software will be installed <strong>directly on the customer's account</strong> for the respective platform (e.g., WordPress, Shopify, etc.) as specified at the time of purchase.</li>
        </ul>
        <p>Customers are responsible for providing accurate login credentials and ensuring proper access is granted for installation. <strong>Failure to provide access</strong> will delay the process and does not entitle the customer to a refund.</p>

        <h3>3. Updates and Maintenance</h3>
        <p>The software delivered is a <strong>one-time final version</strong> and does <strong>not include future updates</strong> or upgrades.</p>
        <ul>
            <li>Aurelia is under <strong>no obligation</strong> to provide future versions, security patches, or compatibility updates.</li>
            <li>If updates are required after delivery, customers must <strong>contact us directly</strong>, and any updates may be provided <strong>at an additional cost</strong>, at our sole discretion.</li>
        </ul>

        <h3>4. Customization & Modifications</h3>
        <p>Aurelia does <strong>not provide customization</strong> of software products.</p>
        <ul>
            <li>All products are delivered <strong>"as-is"</strong> based on the description and preview at the time of purchase.</li>
            <li><strong>No custom edits, modifications, integrations, or feature enhancements</strong> are included or offered unless explicitly stated.</li>
        </ul>
        <p>It is the customer's responsibility to review product specifications and preview materials before purchase.</p>

        <h3>5. Limitation of Liability</h3>
        <p>Once the software has been successfully installed on the customer's designated platform:</p>
        <ul>
            <li><strong>Our service agreement is considered complete and closed.</strong></li>
            <li>Aurelia assumes <strong>no responsibility or liability</strong> for:
                <ul>
                    <li>Any errors, damages, malfunctions, or conflicts resulting from the software.</li>
                    <li>Any direct, indirect, incidental, or consequential issues arising from the use or misuse of the product.</li>
                    <li>Platform-side changes that affect the performance of the installed software.</li>
                </ul>
            </li>
        </ul>
        <p>Customers agree to <strong>use the software at their own risk</strong>. Aurelia is not responsible for platform-specific policies or actions (e.g., account restrictions, bans, or suspensions).</p>

        <h3>6. Intellectual Property</h3>
        <p>All software products remain the intellectual property of their respective creators and licensors. Aurelia does not grant ownership of source code or rights beyond the licensed usage.</p>

        <h3>7. Support Limitations</h3>
        <p>Support is limited strictly to the <strong>initial installation process</strong>.</p>
        <ul>
            <li><strong>Ongoing technical support, troubleshooting, or customer service beyond installation is not guaranteed.</strong></li>
            <li>For continued support, customers may contact us separately, and services will be assessed and priced accordingly.</li>
        </ul>

        <h3>8. Customer Acknowledgment</h3>
        <p>By purchasing from Aurelia, customers confirm that:</p>
        <ul>
            <li>They have read, understood, and agreed to all the above terms.</li>
            <li>They accept full responsibility for the use, integration, and performance of the software.</li>
            <li>They waive any right to dispute charges based on dissatisfaction, delayed delivery (within the 72-hour window), or post-installation expectations not explicitly stated.</li>
        </ul>

        <h3>9. Changes to Terms</h3>
        <p>Aurelia reserves the right to update or change these Terms and Conditions at any time without prior notice. Continued use of the platform and purchases made after such changes constitutes acceptance of the new terms.</p>

        <h3>10. Conclusion</h3>
        <p>For questions or clarification about these terms, please contact Hannah: +1 (318) 250-1538</p>
        <p>By making a purchase, you agree to our Terms and Conditions.</p>
    `;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add event listeners
    modal.querySelector('.close-btn').addEventListener('click', closeTermsModal);
    modal.querySelector('#agree-btn').addEventListener('click', closeTermsModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeTermsModal();
    });
}

function closeTermsModal() {
    const modal = document.getElementById('terms-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}