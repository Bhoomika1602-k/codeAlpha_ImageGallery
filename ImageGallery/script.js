// Image data with real Unsplash photos
const imageData = [
    // Nature photos (8)
    { id: 1, title: 'Mountain Lake Reflection', description: 'Serene mountain lake with perfect reflections', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'nature', height: 'medium' },
    { id: 2, title: 'Forest Pathway', description: 'Sunlit path through ancient forest', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500', category: 'nature', height: 'small' },
    { id: 3, title: 'Ocean Waves', description: 'Powerful waves crashing against rocks', src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700', category: 'nature', height: 'tall' },
    { id: 4, title: 'Desert Sunset', description: 'Golden hour in the desert landscape', src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'nature', height: 'medium' },
    { id: 5, title: 'Autumn Leaves', description: 'Vibrant fall colors in the forest', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550', category: 'nature', height: 'small' },
    { id: 6, title: 'Snowy Mountains', description: 'Majestic snow-capped mountain peaks', src: 'https://images.unsplash.com/photo-1486753774519-0d39de54b8aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650', category: 'nature', height: 'tall' },
    { id: 7, title: 'Wildflower Meadow', description: 'Colorful wildflowers in summer meadow', src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500', category: 'nature', height: 'small' },
    { id: 8, title: 'Northern Lights', description: 'Aurora borealis dancing in the night sky', src: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'nature', height: 'medium' },

    // Architecture photos (6)
    { id: 9, title: 'Modern Skyscraper', description: 'Glass and steel reaching for the sky', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700', category: 'architecture', height: 'tall' },
    { id: 10, title: 'Gothic Cathedral', description: 'Medieval stone architecture with intricate details', src: 'https://images.unsplash.com/photo-1520637836862-4d197d17c50a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'architecture', height: 'medium' },
    { id: 11, title: 'Minimalist Bridge', description: 'Clean lines spanning across water', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500', category: 'architecture', height: 'small' },
    { id: 12, title: 'Art Deco Building', description: 'Vintage architectural elegance', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650', category: 'architecture', height: 'tall' },
    { id: 13, title: 'Spiral Staircase', description: 'Geometric beauty in architectural form', src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800', category: 'architecture', height: 'extra-tall' },
    { id: 14, title: 'Glass Facade', description: 'Reflective modern building exterior', src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550', category: 'architecture', height: 'small' },

    // Abstract art (4)
    { id: 15, title: 'Color Explosion', description: 'Vibrant abstract color composition', src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'abstract', height: 'medium' },
    { id: 16, title: 'Geometric Patterns', description: 'Mathematical beauty in visual form', src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800', category: 'abstract', height: 'extra-tall' },
    { id: 17, title: 'Fluid Motion', description: 'Dynamic movement captured in time', src: 'https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500', category: 'abstract', height: 'small' },
    { id: 18, title: 'Light Play', description: 'Interplay of light and shadow', src: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650', category: 'abstract', height: 'tall' },

    // Portrait photography (6)
    { id: 19, title: 'Street Portrait', description: 'Candid moment in urban setting', src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700', category: 'portrait', height: 'tall' },
    { id: 20, title: 'Fashion Portrait', description: 'Elegant studio fashion photography', src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'portrait', height: 'medium' },
    { id: 21, title: 'Character Study', description: 'Expressive character portrait', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550', category: 'portrait', height: 'small' },
    { id: 22, title: 'Natural Light', description: 'Soft natural lighting portrait', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650', category: 'portrait', height: 'tall' },
    { id: 23, title: 'Black & White', description: 'Classic monochrome portrait', src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500', category: 'portrait', height: 'small' },
    { id: 24, title: 'Environmental Portrait', description: 'Subject in their natural environment', src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600', category: 'portrait', height: 'medium' }
];

// Global variables
let currentImages = imageData;
let currentCategory = 'all';
let currentLightboxIndex = 0;

// DOM elements
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const loading = document.getElementById('loading');
const emptyState = document.getElementById('emptyState');
const imageCount = document.getElementById('imageCount');

// Initialize the gallery
function init() {
    setupEventListeners();
    renderGallery(imageData);
    updateImageCount(imageData.length);
    hideLoading();
}

// Setup event listeners
function setupEventListeners() {
    // Filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            filterImages(category);
            setActiveTab(e.target);
        });
    });

    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
    lightboxNext.addEventListener('click', () => navigateLightbox('next'));

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyDown);

    // Click outside lightbox to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Filter images by category
function filterImages(category) {
    showLoading();
    currentCategory = category;
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        if (category === 'all') {
            currentImages = imageData;
        } else {
            currentImages = imageData.filter(img => img.category === category);
        }
        
        renderGallery(currentImages);
        updateImageCount(currentImages.length);
        hideLoading();
    }, 300);
}

// Set active tab
function setActiveTab(activeTab) {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => tab.classList.remove('active'));
    activeTab.classList.add('active');
}

// Render gallery grid
function renderGallery(images) {
    if (images.length === 0) {
        showEmptyState();
        return;
    }

    hideEmptyState();
    galleryGrid.innerHTML = '';

    images.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        galleryGrid.appendChild(galleryItem);
    });

    // Animate items in
    const items = galleryGrid.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.style.opacity = '1';
        }, index * 50);
    });
}

// Create gallery item element
function createGalleryItem(image, index) {
    const item = document.createElement('div');
    item.className = `gallery-item ${image.height}`;
    item.onclick = () => openLightbox(index);

    item.innerHTML = `
        <img src="${image.src}" alt="${image.title}" loading="lazy">
        <div class="gallery-overlay"></div>
        <div class="gallery-content">
            <h3>${image.title}</h3>
            <p>${image.description}</p>
            <span class="category-tag">${image.category}</span>
        </div>
        <button class="expand-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15,3 21,3 21,9"></polyline>
                <polyline points="9,21 3,21 3,15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
        </button>
    `;

    return item;
}

// Open lightbox
function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navigate lightbox
function navigateLightbox(direction) {
    if (direction === 'next') {
        currentLightboxIndex = (currentLightboxIndex + 1) % currentImages.length;
    } else {
        currentLightboxIndex = (currentLightboxIndex - 1 + currentImages.length) % currentImages.length;
    }
    updateLightboxContent();
}

// Update lightbox content
function updateLightboxContent() {
    const image = currentImages[currentLightboxIndex];
    
    lightboxImage.src = image.src;
    lightboxImage.alt = image.title;
    lightboxTitle.textContent = image.title;
    lightboxDescription.textContent = image.description;
    lightboxCounter.textContent = `${currentLightboxIndex + 1} of ${currentImages.length}`;
    lightboxCategory.textContent = image.category;
    lightboxCategory.className = 'category-badge';
}

// Handle keyboard navigation
function handleKeyDown(e) {
    if (!lightbox.classList.contains('active')) return;

    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            navigateLightbox('prev');
            break;
        case 'ArrowRight':
            navigateLightbox('next');
            break;
    }
}

// Show loading state
function showLoading() {
    loading.style.display = 'flex';
    galleryGrid.style.display = 'none';
    emptyState.style.display = 'none';
}

// Hide loading state
function hideLoading() {
    loading.style.display = 'none';
    galleryGrid.style.display = 'grid';
}

// Show empty state
function showEmptyState() {
    loading.style.display = 'none';
    galleryGrid.style.display = 'none';
    emptyState.style.display = 'block';
}

// Hide empty state
function hideEmptyState() {
    emptyState.style.display = 'none';
}

// Update image count
function updateImageCount(count) {
    imageCount.textContent = `${count} Image${count !== 1 ? 's' : ''}`;
}

// Image lazy loading optimization
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Touch/swipe support for mobile
function setupTouchSupport() {
    let startX = 0;
    let endX = 0;

    lightbox.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].screenX;
    });

    lightbox.addEventListener('touchend', e => {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left - next image
                navigateLightbox('next');
            } else {
                // Swipe right - previous image
                navigateLightbox('prev');
            }
        }
    }
}

// Performance optimization: Debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
const handleResize = debounce(() => {
    // Recalculate layout if needed
    if (lightbox.classList.contains('active')) {
        updateLightboxContent();
    }
}, 250);

window.addEventListener('resize', handleResize);

// Initialize the gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    setupTouchSupport();
    setupLazyLoading();
});

// Preload images for better performance
function preloadImages() {
    const imageUrls = imageData.map(img => img.src);
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Start preloading after initial load
window.addEventListener('load', preloadImages);