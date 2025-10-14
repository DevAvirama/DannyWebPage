// Mantenemos el JS para la funcionalidad (menú móvil y formulario)
// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});

// Contact form handling (Simulación)
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
            
    const formData = new FormData(contactForm);
    const nombre = formData.get('nombre');
    const email = formData.get('email');

    // Muestra mensaje de éxito
    formMessage.className = 'form-message form-success';
    formMessage.textContent = `¡Gracias ${nombre}! Tu consulta ha sido enviada correctamente. Te contactaré a la brevedad al email ${email}.`;
    formMessage.classList.remove('hidden');

    // Reset form
    contactForm.reset();

    // Oculta el mensaje después de 5 segundos
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
});