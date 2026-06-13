// ============================================
// SMOOTH SCROLL (FIXED + CLEAN)
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId && targetId !== "#") {
            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});


// ============================================
// FORM SUBMISSION (NOW REAL EMAIL FLOW)
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = this.querySelector("button[type='submit']");
        const originalText = submitBtn.textContent;

        // Get values
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim(),
        };

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert("Please fill all fields.");
            return;
        }

        try {
            // UI loading state
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            // 🔥 IMPORTANT: Replace this with your Formspree URL
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _replyto: formData.email
                })
            });

            if (response.ok) {
                alert(`Thank you ${formData.name}! Your message has been sent.`);
                this.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }

        } catch (error) {
            console.error(error);
            alert("Network error. Please try again.");
        }

        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}


// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        navbar.style.background = 'rgba(11, 15, 20, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        navbar.style.background = 'rgba(11, 15, 20, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});


// ============================================
// SIMPLE SCROLL ANIMATIONS (CLEAN VERSION)
// ============================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.service-card, .benefit, .step').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(15px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
});
