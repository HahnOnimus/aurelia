// product-details.js
document.addEventListener("DOMContentLoaded", () => {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    // Find the product in the products array
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        // Redirect to home page if product not found
        window.location.href = 'index.html';
        return;
    }
    
    // Populate product details
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('full-description').textContent = product.fullDescription;
    document.getElementById('current-price').textContent = `₦${product.price.toLocaleString()}`;
    document.getElementById('old-price').textContent = `₦${product.old.toLocaleString()}`;
    document.getElementById('discount-badge').textContent = `${product.discount}% OFF`;
    document.getElementById('buy-now-btn').href = product.paymentLink;
    
    // Populate lists
    populateList('uses-list', product.uses);
    populateList('how-it-works', product.howItWorks);
    populateList('advantages', product.advantages);
    populateList('consequences', product.consequences);
    
    // Set up image gallery
    setupImageGallery(product.images);
});

function populateList(elementId, items) {
    const listElement = document.getElementById(elementId);
    listElement.innerHTML = '';
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });
}

function setupImageGallery(images) {
    const mainImage = document.getElementById('main-image');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    
    // Set first image as main image
    if (images.length > 0) {
        mainImage.src = images[0];
        
        // Create thumbnails
        images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.classList.add('thumbnail');
            if (index === 0) thumbnail.classList.add('active');
            
            thumbnail.addEventListener('click', () => {
                // Update main image
                mainImage.src = image;
                
                // Update active thumbnail
                document.querySelectorAll('.thumbnail').forEach(thumb => {
                    thumb.classList.remove('active');
                });
                thumbnail.classList.add('active');
            });
            
            thumbnailContainer.appendChild(thumbnail);
        });
    }
}