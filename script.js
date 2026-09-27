// Vaka Filtreleme Fonksiyonu
const filterButtons = document.querySelectorAll('.filter-btn');
const caseCards = document.querySelectorAll('.case-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Aktif butonu değiştir
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Seçili filtreyi al
        const selectedFilter = button.getAttribute('data-filter');

        // Vakaları filtrele
        caseCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (selectedFilter === 'all' || cardCategory === selectedFilter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Form Gönderme Fonksiyonu
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Form verilerini al
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    // Basit validasyon
    if (!name || !email || !subject || !message) {
        showFormMessage('Lütfen tüm gerekli alanları doldurunuz!', 'error');
        return;
    }

    // Email formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Lütfen geçerli bir email adresi giriniz!', 'error');
        return;
    }

    // Email gönderme (Simulate)
    // Gerçek uygulamada backend e-mail servisiyle entegre edilir
    console.log('Form Data:', {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    });

    // Başarı mesajı göster
    showFormMessage('Mesajınız başarıyla gönderildi! En kısa zamanda sizinle iletişime geçeceğiz.', 'success');

    // Formu temizle
    contactForm.reset();

    // 5 saniye sonra mesajı gizle
    setTimeout(() => {
        formNote.style.display = 'none';
    }, 5000);
});

function showFormMessage(message, type) {
    formNote.textContent = message;
    formNote.className = `form-note ${type}`;
    formNote.style.display = 'block';
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade In Animasyonu
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
