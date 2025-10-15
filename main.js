document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbot = document.getElementById('chatbot');
    const chatbotClose = document.querySelector('.chatbot-close');
    const streamTabs = document.querySelectorAll('.stream-tab');
    const streamContents = document.querySelectorAll('.stream-content');
    const optionButtons = document.querySelectorAll('.option-btn');
    const registrationForm = document.getElementById('registrationForm');
    const downloadButtons = document.querySelectorAll('.download-btn');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    if (chatbotToggle && chatbot) {
        chatbotToggle.addEventListener('click', function() {
            chatbot.classList.toggle('active');
            if (chatbot.classList.contains('active')) {
                chatbotToggle.style.display = 'none';
            }
        });
    }

    if (chatbotClose && chatbot && chatbotToggle) {
        chatbotClose.addEventListener('click', function() {
            chatbot.classList.remove('active');
            chatbotToggle.style.display = 'flex';
        });
    }

    streamTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const streamName = this.getAttribute('data-stream');

            streamTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            streamContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === streamName) {
                    content.classList.add('active');
                }
            });
        });
    });

    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const option = this.getAttribute('data-option');
            const chatbotBody = document.getElementById('chatbot-body');

            const responses = {
                'mpc': 'For MPC stream guidance, visit our <a href="after-intermediate.html#mpc" style="color: var(--primary-color); font-weight: 600;">After Intermediate page</a> to explore JEE, EAMCET preparation, and engineering colleges.',
                'bipc': 'For BiPC stream guidance, visit our <a href="after-intermediate.html#bipc" style="color: var(--primary-color); font-weight: 600;">After Intermediate page</a> to learn about NEET preparation and medical colleges.',
                'career': 'Check out our <a href="current-students.html#career-paths" style="color: var(--primary-color); font-weight: 600;">Career Paths section</a> for detailed roadmaps on AI/ML, Full Stack, Data Science, and more.',
                'placement': 'Visit our <a href="current-students.html#placement" style="color: var(--primary-color); font-weight: 600;">Placement Preparation</a> section for guidance on aptitude tests, coding rounds, and interviews.',
                'college': 'Find comprehensive college rankings and details on our <a href="after-intermediate.html" style="color: var(--primary-color); font-weight: 600;">After Intermediate page</a> with top 50 colleges listed.',
                'jobs': 'Explore <a href="current-students.html#jobs" style="color: var(--primary-color); font-weight: 600;">Job Opportunities</a> including internships, government jobs, and freelancing platforms.'
            };

            const response = responses[option] || 'Please visit our pages for detailed guidance.';

            const messageDiv = document.createElement('div');
            messageDiv.className = 'chatbot-message bot-message';
            messageDiv.innerHTML = `<p>${response}</p>`;

            chatbotBody.appendChild(messageDiv);
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        });
    });

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                currentStatus: document.getElementById('currentStatus').value,
                stream: document.getElementById('stream').value,
                guidanceType: document.getElementById('guidanceType').value,
                message: document.getElementById('message').value,
                whatsappUpdates: document.getElementById('whatsappUpdates').checked,
                emailUpdates: document.getElementById('emailUpdates').checked
            };

            console.log('Form submitted:', formData);

            registrationForm.style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';

            setTimeout(function() {
                registrationForm.reset();
            }, 1000);
        });
    }

   

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const targetRect = target.getBoundingClientRect().top;
                const targetPosition = targetRect - bodyRect - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
