// ==================== BACKGROUND SWITCHING ====================
function initializeBackground() {
    // Check URL parameter for background choice
    const urlParams = new URLSearchParams(window.location.search);
    const bgChoice = urlParams.get('bg');
    
    if (bgChoice && ['option1', 'option2', 'option3'].includes(bgChoice)) {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            // Remove all background classes
            heroSection.classList.remove('bg-option1', 'bg-option2', 'bg-option3');
            // Add selected background class
            heroSection.classList.add(`bg-${bgChoice}`);
            // Save to localStorage
            localStorage.setItem('selectedBackground', bgChoice);
        }
    } else {
        // Check localStorage for saved preference
        const savedBg = localStorage.getItem('selectedBackground');
        if (savedBg && ['option1', 'option2', 'option3'].includes(savedBg)) {
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                heroSection.classList.add(`bg-${savedBg}`);
            }
        }
    }
}

// ==================== SHOPPING CART LOGIC ====================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    initializeBackground();
    updateCartCount();
    setupEventListeners();
});

function setupEventListeners() {
    // Close modal on outside click
    const modal = document.getElementById('cart-modal');
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeCart();
        }
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', submitContactForm);
    }

    // Greeting card form listeners
    setupGreetingCardListeners();
}

// ==================== GREETING CARD LOGIC ====================
function setupGreetingCardListeners() {
    const messageInput = document.getElementById('card-message');
    const senderInput = document.getElementById('sender-name');
    const recipientInput = document.getElementById('recipient-name');
    const colorPicker = document.querySelectorAll('input[name="card-color"]');
    const imageUpload = document.getElementById('image-upload');
    const jsonUpload = document.getElementById('json-upload');

    // Real-time preview update for message
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            updateCardPreview();
            updateCharCount();
        });
    }

    // Real-time preview update for sender name
    if (senderInput) {
        senderInput.addEventListener('input', updateCardPreview);
    }

    // Color picker real-time update
    colorPicker.forEach(radio => {
        radio.addEventListener('change', function() {
            updateCardColor(this.value);
        });
    });

    // File upload listeners
    if (imageUpload) {
        imageUpload.addEventListener('change', handleImageUpload);
    }
    
    if (jsonUpload) {
        jsonUpload.addEventListener('change', handleJsonUpload);
    }
}

function updateCharCount() {
    const messageInput = document.getElementById('card-message');
    const charCount = document.getElementById('char-count');
    if (charCount) {
        charCount.textContent = messageInput.value.length;
    }
}

function updateCardPreview() {
    const messageInput = document.getElementById('card-message');
    const senderInput = document.getElementById('sender-name');
    const previewMessage = document.getElementById('preview-message');
    const previewSignature = document.getElementById('preview-signature');

    if (previewMessage && messageInput) {
        previewMessage.textContent = messageInput.value || 'Viết lời nhắn của bạn tại đây...';
    }

    if (previewSignature && senderInput) {
        previewSignature.textContent = senderInput.value ? `— ${senderInput.value}` : '—';
    }
}

function switchTemplate(templateNum) {
    const cardInner = document.querySelector('.card-inner');
    const templateBtns = document.querySelectorAll('.template-btn');
    
    // Template data with titles and decorations
    const templates = {
        1: { title: 'Tặng Yêu Thương', topEmoji: '✨', bottomEmoji: '🌿' },
        2: { title: 'Chúc Sức Khỏe', topEmoji: '🌿', bottomEmoji: '🍃' },
        3: { title: 'Cảm Ơn Bạn', topEmoji: '💐', bottomEmoji: '🌸' },
        4: { title: 'Mừng Sinh Nhật', topEmoji: '🎉', bottomEmoji: '🎂' }
    };

    // Handle custom template
    if (templateNum === 'custom') {
        cardInner.classList.remove('template-1', 'template-2', 'template-3', 'template-4');
        
        if (customTemplateData) {
            const bgGradient = `linear-gradient(135deg, ${customTemplateData.bgColor} 0%, ${customTemplateData.bgColor2} 100%)`;
            cardInner.style.background = bgGradient;
            cardInner.style.color = customTemplateData.textColor;
            
            const titleEl = cardInner.querySelector('.card-title');
            const topEmojiEl = cardInner.querySelector('.card-top');
            const bottomEmojiEl = cardInner.querySelector('.card-bottom');
            
            if (titleEl) titleEl.textContent = customTemplateData.title;
            if (topEmojiEl) topEmojiEl.textContent = customTemplateData.topEmoji;
            if (bottomEmojiEl) bottomEmojiEl.textContent = customTemplateData.bottomEmoji;
        }
    } else {
        // Remove all template classes
        cardInner.classList.remove('template-1', 'template-2', 'template-3', 'template-4');
        cardInner.style.background = '';
        cardInner.style.color = '';
        // Add new template class
        cardInner.classList.add(`template-${templateNum}`);

        // Update title and decorations
        const template = templates[templateNum];
        const titleElement = cardInner.querySelector('.card-title');
        const topDecoration = cardInner.querySelector('.card-top');
        const bottomDecoration = cardInner.querySelector('.card-bottom');
        
        if (titleElement) titleElement.textContent = template.title;
        if (topDecoration) topDecoration.textContent = template.topEmoji;
        if (bottomDecoration) bottomDecoration.textContent = template.bottomEmoji;
    }

    // Update button states
    templateBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-template="${templateNum}"]`).classList.add('active');

    updateCardPreview();
}

function updateCardColor(colorClass) {
    const cardInner = document.querySelector('.card-inner');
    cardInner.classList.remove('color-gold', 'color-green', 'color-rose');
    cardInner.classList.add(colorClass);
}

function addCardToCart() {
    const recipientName = document.getElementById('recipient-name').value.trim();
    const message = document.getElementById('card-message').value.trim();
    const senderName = document.getElementById('sender-name').value.trim();
    const colorInput = document.querySelector('input[name="card-color"]:checked');
    const templateBtns = document.querySelectorAll('.template-btn.active');

    if (!message) {
        showNotification('⚠️ Vui lòng viết lời nhắn cho thiệp!');
        return;
    }

    if (!senderName) {
        showNotification('⚠️ Vui lòng nhập tên của bạn!');
        return;
    }

    const cardItem = {
        id: Date.now(),
        name: `Thiệp Trang Trí${recipientName ? ` (Gửi: ${recipientName})` : ''}`,
        price: 0,
        quantity: 1,
        type: 'card',
        details: {
            recipientName: recipientName,
            message: message,
            senderName: senderName,
            color: colorInput ? colorInput.value : 'color-gold',
            template: templateBtns.length > 0 ? templateBtns[0].dataset.template : '1'
        }
    };

    // Add to cart (thiệp free khi mua sản phẩm - giá 0)
    cart.push(cardItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    // Reset form
    document.getElementById('card-form').reset();
    document.querySelector('input[name="card-color"][value="color-gold"]').checked = true;
    updateCardPreview();
    updateCardColor('color-gold');

    showNotification(`✅ Thiệp được thêm vào giỏ hàng! (Miễn phí khi mua sản phẩm)`);
}

// ==================== TEMPLATE IMPORT/EXPORT ====================
// Store for custom template
let customTemplateData = JSON.parse(localStorage.getItem('customTemplate')) || null;

function toggleCustomEditor() {
    const editor = document.getElementById('custom-editor');
    if (!editor) {
        console.error('Custom editor element not found');
        showNotification('❌ Lỗi: Không tìm thấy form chỉnh sửa');
        return;
    }
    
    const isHidden = editor.style.display === 'none' || !editor.style.display;
    editor.style.display = isHidden ? 'block' : 'none';
    
    if (isHidden && customTemplateData) {
        // Load saved custom template into editor
        document.getElementById('custom-title').value = customTemplateData.title || '';
        document.getElementById('custom-bg-color').value = customTemplateData.bgColor || '#F4D9A0';
        document.getElementById('custom-bg-color-2').value = customTemplateData.bgColor2 || '#E8C76F';
        document.getElementById('custom-text-color').value = customTemplateData.textColor || '#5c4033';
        document.getElementById('custom-top-emoji').value = customTemplateData.topEmoji || '✨';
        document.getElementById('custom-bottom-emoji').value = customTemplateData.bottomEmoji || '🌿';
    }
    
    if (isHidden) {
        showNotification('✏️ Mở form chỉnh sửa template');
    } else {
        showNotification('✏️ Đóng form chỉnh sửa');
    }
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) {
        console.log('No file selected');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imageData = e.target.result;
            // Create custom template from image
            customTemplateData = {
                title: 'Template từ Ảnh',
                backgroundImage: imageData,
                bgColor: 'transparent',
                bgColor2: 'transparent',
                textColor: '#ffffff',
                topEmoji: '📸',
                bottomEmoji: '✨'
            };
            
            switchTemplate('custom');
            // Apply background image to card
            const cardInner = document.querySelector('.card-inner');
            if (cardInner) {
                cardInner.style.backgroundImage = `url('${imageData}')`;
                cardInner.style.backgroundSize = 'cover';
                cardInner.style.backgroundPosition = 'center';
            }
            previewCustomTemplate();
            showNotification('✅ Ảnh được tải lên! Sử dụng nó như template tùy chỉnh.');
        } catch (error) {
            console.error('Error in handleImageUpload:', error);
            showNotification('❌ Lỗi: Không thể tải ảnh');
        }
    };
    reader.onerror = function(error) {
        console.error('FileReader error:', error);
        showNotification('❌ Lỗi: Không thể đọc file ảnh');
    };
    reader.readAsDataURL(file);
}

function handleJsonUpload(event) {
    const file = event.target.files[0];
    if (!file) {
        console.log('No file selected');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const jsonText = e.target.result;
            console.log('JSON content:', jsonText);
            const templateData = JSON.parse(jsonText);
            
            // Validate JSON structure - require at least title and bgColor
            if (templateData && templateData.title && (templateData.bgColor || templateData.bgColor)) {
                customTemplateData = {
                    title: templateData.title || 'Tùy Chỉnh',
                    bgColor: templateData.bgColor || '#F4D9A0',
                    bgColor2: templateData.bgColor2 || '#E8C76F',
                    textColor: templateData.textColor || '#5c4033',
                    topEmoji: templateData.topEmoji || '✨',
                    bottomEmoji: templateData.bottomEmoji || '🌿'
                };
                
                switchTemplate('custom');
                previewCustomTemplate();
                showNotification('✅ Template JSON được tải lên thành công!');
            } else {
                showNotification('❌ File JSON không đúng format. Cần có: title, bgColor');
            }
        } catch (error) {
            console.error('JSON parse error:', error);
            showNotification('❌ Lỗi: File JSON không hợp lệ - ' + error.message);
        }
    };
    reader.onerror = function(error) {
        console.error('FileReader error:', error);
        showNotification('❌ Lỗi: Không thể đọc file JSON');
    };
    reader.readAsText(file);
}

function previewCustomTemplate() {
    const cardInner = document.querySelector('.card-inner');
    if (!cardInner) {
        console.error('Card inner element not found');
        return;
    }

    try {
        // Get values from editor
        const title = document.getElementById('custom-title').value || 'Tùy Chỉnh';
        const bgColor = document.getElementById('custom-bg-color').value || '#F4D9A0';
        const bgColor2 = document.getElementById('custom-bg-color-2').value || '#E8C76F';
        const textColor = document.getElementById('custom-text-color').value || '#5c4033';
        const topEmoji = document.getElementById('custom-top-emoji').value || '✨';
        const bottomEmoji = document.getElementById('custom-bottom-emoji').value || '🌿';

        // Save to customTemplateData
        customTemplateData = {
            title: title,
            bgColor: bgColor,
            bgColor2: bgColor2,
            textColor: textColor,
            topEmoji: topEmoji,
            bottomEmoji: bottomEmoji
        };

        // Remove all template classes
        cardInner.classList.remove('template-1', 'template-2', 'template-3', 'template-4');
        
        // Apply gradient background
        const gradientStyle = `linear-gradient(135deg, ${bgColor} 0%, ${bgColor2} 100%)`;
        cardInner.style.background = gradientStyle;
        cardInner.style.backgroundImage = 'none'; // Clear any background image
        cardInner.style.color = textColor;

        // Update text elements
        const titleEl = cardInner.querySelector('.card-title');
        const topEmojiEl = cardInner.querySelector('.card-top');
        const bottomEmojiEl = cardInner.querySelector('.card-bottom');
        const messageEl = cardInner.querySelector('.card-message');
        const signatureEl = cardInner.querySelector('.card-signature');

        if (titleEl) titleEl.textContent = title;
        if (topEmojiEl) topEmojiEl.textContent = topEmoji;
        if (bottomEmojiEl) bottomEmojiEl.textContent = bottomEmoji;
        if (messageEl) messageEl.style.color = textColor;
        if (signatureEl) signatureEl.style.color = textColor;

        showNotification('👁️ Xem trước template tùy chỉnh');
    } catch (error) {
        console.error('Error in previewCustomTemplate:', error);
        showNotification('❌ Lỗi: Không thể xem trước template');
    }
}

function saveCustomTemplate() {
    if (!customTemplateData) {
        // If no custom template, create one from current editor values
        const title = document.getElementById('custom-title').value;
        const bgColor = document.getElementById('custom-bg-color').value;
        
        if (!title && !bgColor) {
            showNotification('⚠️ Vui lòng chỉnh sửa hoặc tạo template trước khi lưu');
            return;
        }
        
        previewCustomTemplate(); // This will set customTemplateData
    }
    
    if (!customTemplateData) {
        showNotification('❌ Không có template tùy chỉnh để lưu');
        return;
    }
    
    try {
        localStorage.setItem('customTemplate', JSON.stringify(customTemplateData));
        showNotification('💾 Template tùy chỉnh đã được lưu vào LocalStorage!');
    } catch (error) {
        console.error('Error saving template:', error);
        showNotification('❌ Lỗi: Không thể lưu template');
    }
}

function exportTemplate() {
    const cardInner = document.querySelector('.card-inner');
    if (!cardInner) {
        showNotification('❌ Không thể xuất template');
        return;
    }

    try {
        let templateToExport = customTemplateData || {
            title: document.querySelector('.card-title')?.textContent || 'Exported Template',
            bgColor: '#F4D9A0',
            bgColor2: '#E8C76F',
            textColor: '#5c4033',
            topEmoji: document.querySelector('.card-top')?.textContent || '✨',
            bottomEmoji: document.querySelector('.card-bottom')?.textContent || '🌿'
        };

        // Create downloadable JSON file
        const dataStr = JSON.stringify(templateToExport, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `template-${new Date().getTime()}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        showNotification('📤 Template được xuất thành công!');
    } catch (error) {
        console.error('Error exporting template:', error);
        showNotification('❌ Lỗi: Không thể xuất template');
    }
}

// ==================== CART FUNCTIONS ====================
function addToCart(productName, price) {
    const product = {
        id: Date.now(),
        name: productName,
        price: price,
        quantity: 1
    };

    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`✅ ${productName} đã thêm vào giỏ hàng!`);
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function openCart() {
    const modal = document.getElementById('cart-modal');
    const cartItemsDiv = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Giỏ hàng của bạn trống. Hãy thêm một số sản phẩm!</p>
            </div>
        `;
    } else {
        cartItemsDiv.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">
                        ${formatVND(item.price)} × ${item.quantity} = <strong>${formatVND(item.price * item.quantity)}</strong>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Xóa</button>
            </div>
        `).join('');
    }

    updateTotalPrice();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    openCart();
    showNotification('❌ Sản phẩm đã xóa khỏi giỏ hàng');
}

function updateTotalPrice() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = formatVND(total);
}

function checkout() {
    if (cart.length === 0) {
        alert('⚠️ Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi thanh toán.');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartSummary = cart.map(item => 
        `  • ${item.name}: ${item.quantity} gói (${formatVND(item.price * item.quantity)})`
    ).join('\n');

    const message = `
╔════════════════════════════════════════╗
║       ĐƠN HÀNG CỦA BẠN                 ║
╚════════════════════════════════════════╝

${cartSummary}

────────────────────────────────────────
📊 Tổng Tiền: ${formatVND(total)}
────────────────────────────────────────

📞 Vui lòng liên hệ để xác nhận đơn hàng:
   • Điện thoại: +84 (0) 123 456 789
   • Email: hello@trasam.vn
   • Zalo: +84 (0) 123 456 789

🚚 Chúng tôi sẽ liên hệ bạn trong 24 giờ
   để xác nhận và giao hàng.
    `.trim();

    alert(message);

    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    closeCart();
    showNotification('🎉 Đặt hàng thành công! Chúng tôi sẽ liên hệ sớm.');
}

// ==================== CONTACT FORM ====================
function submitContactForm(event) {
    event.preventDefault();
    
    const formData = {
        name: event.target.elements[0].value,
        email: event.target.elements[1].value,
        phone: event.target.elements[2].value,
        message: event.target.elements[3].value
    };

    console.log('Contact form submitted:', formData);
    
    showNotification('✅ Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.');
    event.target.reset();
}

// ==================== UTILITY FUNCTIONS ====================
function formatVND(amount) {
    return new Intl.NumberFormat('vi-VN', { 
        style: 'currency', 
        currency: 'VND' 
    }).format(amount);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
        max-width: 90%;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ==================== PRODUCT FILTERING ====================
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = '';
            card.style.animation = 'fadeInUp 0.5s ease';
        } else {
            const categories = card.getAttribute('data-category').split(' ');
            if (categories.includes(category)) {
                card.style.display = '';
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// ==================== SMOOTH SCROLLING FOR NAV LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', function(event) {
    // Ctrl+Shift+C to open cart
    if (event.ctrlKey && event.shiftKey && event.code === 'KeyC') {
        event.preventDefault();
        openCart();
    }
    // Esc to close cart
    if (event.code === 'Escape') {
        closeCart();
    }
});

// ==================== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.benefit-card, .product-card, .contact-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    observer.observe(element);
});

// ==================== ANIMATIONS ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== PERFORMANCE: Lazy Loading Images ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== LOCAL STORAGE PERSISTENCE ====================
window.addEventListener('beforeunload', function() {
    localStorage.setItem('cart', JSON.stringify(cart));
});

console.log('✅ Script loaded successfully - Tea Shop E-commerce Ready!');
// ==================== NEW FEATURES ====================

// Newsletter
function showNewsletter() {
    document.getElementById('newsletterModal').classList.add('active');
}

function closeNewsletter() {
    document.getElementById('newsletterModal').classList.remove('active');
}

function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value.trim();
    if (!email) {
        alert('Vui lòng nhập email!');
        return;
    }
    if (!email.includes('@')) {
        alert('Vui lòng nhập email hợp lệ!');
        return;
    }
    
    const subscribers = JSON.parse(localStorage.getItem('newsletter')) || [];
    if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('newsletter', JSON.stringify(subscribers));
        showNotification('✅ Đăng ký thành công! Bạn sẽ nhận giảm 10% cho đơn hàng tiếp theo.');
        closeNewsletter();
        document.getElementById('newsletterEmail').value = '';
    } else {
        showNotification('ℹ️ Email này đã được đăng ký trước đó.');
    }
}

// Loyalty System
let loyaltyPoints = parseInt(localStorage.getItem('loyaltyPoints')) || 0;

function calculateLoyaltyTier() {
    if (loyaltyPoints < 500) return 'Bạc';
    if (loyaltyPoints < 1000) return 'Vàng';
    return 'Kim Cương';
}

function updateLoyaltyDisplay() {
    const currentPointsEl = document.getElementById('currentPoints');
    const currentTierEl = document.getElementById('currentTier');
    if (currentPointsEl) currentPointsEl.textContent = loyaltyPoints;
    if (currentTierEl) currentTierEl.textContent = calculateLoyaltyTier();
}

function addLoyaltyPoints(amount) {
    loyaltyPoints += amount;
    localStorage.setItem('loyaltyPoints', loyaltyPoints);
    updateLoyaltyDisplay();
}

// FAQ Toggle
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                item.classList.toggle('active');
            });
        }
    });

    // Initialize Loyalty Display
    updateLoyaltyDisplay();

    // Add loyalty points on page load
    if (!localStorage.getItem('loyaltyInitialized')) {
        addLoyaltyPoints(50);
        localStorage.setItem('loyaltyInitialized', 'true');
        showNotification('🎁 +50 điểm đăng ký thành viên!');
    }
});

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

console.log('✅ All new features loaded successfully!');
