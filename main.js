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

document.addEventListener('DOMContentLoaded', () => {
    // 1. Define the detailed information object with Top Colleges
    const careerDetails = {
        'engineering': {
            title: 'Engineering (BTech)',
            details: `
                **Why Join:** Offers diverse specializations, high earning potential, and a direct path to the tech and industrial sectors. It’s ideal for problem-solvers who enjoy applying physics and math to create practical solutions.
                <br><br>
                **Entrance Exams:** **JEE Main/Advanced** (for IITs/NITs), **BITSAT**, **VITEEE**, and various state-level engineering entrance exams.
                <br><br>
                **Top Colleges:** **IITs (Indian Institutes of Technology)**, **NITs (National Institutes of Technology)**, **BITS Pilani**, **IIITs (Indian Institutes of Information Technology)**.
            `
        },
        'bsc': {
            title: 'BSc Programs',
            details: `
                **Why Join:** Provides a strong academic foundation for a career in **research, teaching**, or **data analytics**. New fields like Data Science offer rapidly growing job opportunities.
                <br><br>
                **Entrance Exams:** Primarily based on **12th Board Marks**. Some top universities require exams like **CUET** (Central University Entrance Test) or college-specific aptitude tests.
                <br><br>
                **Top Colleges:** **Delhi University (DU) Colleges (e.g., St. Stephen's, Hindu)**, **Presidency University (Kolkata)**, **Madras Christian College (MCC)**, **IISc Bangalore (for B.S.)**.
            `
        },
        'ca': {
            title: 'Chartered Accountancy (CA)',
            details: `
                **Why Join:** A highly reputed and lucrative professional qualification. CAs handle finance, taxation, and auditing, placing them in key decision-making roles in any organization.
                <br><br>
                **Entrance Exams:** **ICAI CA Foundation Exam** (can be attempted after 12th). The process involves multiple stages: Foundation, Intermediate, and Final.
                <br><br>
                **Top Colleges (for B.Com base):** **SRCC Delhi**, **Loyola College Chennai**, **HR College of Commerce (Mumbai)**. (Note: CA is managed by the **Institute of Chartered Accountants of India - ICAI**, not traditional colleges).
            `
        },
        'hotel-management': {
            title: 'Hotel Management',
            details: `
                **Why Join:** Ideal for individuals with excellent **communication skills** and a passion for customer service, management, and global travel. Leads to careers in luxury hotels, airlines, cruise ships, and event management.
                <br><br>
                **Entrance Exams:** **NCHMCT JEE** (National Council for Hotel Management and Catering Technology Joint Entrance Exam), **AIMA UGAT**, or university-specific tests.
                <br><br>
                **Top Colleges:** **IHM Pusa (Delhi)**, **IHM Mumbai**, **WelcomGroup Graduate School of Hotel Administration (WGSHA)**, **Institute of Hotel Management, Bangalore**.
            `
        },
        'architecture': {
            title: 'Architecture',
            details: `
                **Why Join:** Combines **artistic vision** with **technical engineering** knowledge. You design and plan buildings and public spaces, shaping the physical environment around us.
                <br><br>
                **Entrance Exams:** **NATA** (National Aptitude Test in Architecture) and **JEE Main Paper 2** (for B.Arch programs in NITs/IITs and centrally funded institutions).
                <br><br>
                **Top Colleges:** **SPA Delhi (School of Planning and Architecture)**, **IIT Kharagpur**, **CEPT University (Ahmedabad)**, **Jadavpur University (Kolkata)**.
            `
        },
        'aviation': {
            title: 'Aviation',
            details: `
                **Why Join:** Pursue an exciting and highly skilled career, whether as a **Commercial Pilot** (high pay, unique lifestyle) or an **Aeronautical Engineer** (designing and maintaining aircraft).
                <br><br>
                **Entrance Exams:**
                * **Pilot:** Requires clearing a class 2 medical exam, aptitude tests, and getting admission into a flying club.
                * **Engineering:** **JEE Main/Advanced** (for Aeronautical/Aerospace Engineering degrees).
                <br><br>
                **Top Institutes (Flying):** **Indira Gandhi Rashtriya Uran Akademi (IGRUA)**, **Bombay Flying Club**.
                **Top Institutes (Engineering):** **IIT Bombay**, **Madras Institute of Technology (MIT Chennai)**.
            `
        },
        'defence': {
            title: 'Defence Services',
            details: `
                **Why Join:** A career of honor, adventure, and selfless service to the nation. Offers rigorous training, excellent pay, and a disciplined life structure. MPC students can apply for the **Technical Arms**.
                <br><br>
                **Entrance Exams:** **NDA (National Defence Academy) Entrance Exam** (written exam conducted by UPSC, followed by SSB Interview).
                <br><br>
                **Top Institutes:** **National Defence Academy (NDA) Pune** (The primary training ground). Other technical entries come through **Indian Naval Academy (INA)** and **Air Force Academy (AFA)**.
            `
        },
        'research': {
            title: 'Research Programs',
            details: `
                **Why Join:** These programs are for students who have a deep curiosity in fundamental science. They offer early exposure to **cutting-edge research**, high stipends, and pathways to becoming a top scientist or professor.
                <br><br>
                **Entrance Exams:** **IISER Aptitude Test (IAT)**, **NEST** (for NISER), and certain admissions via **JEE Advanced** or **KVPY** scores.
                <br><br>
                **Top Institutes:** **IISERs (Indian Institutes of Science Education and Research)**, **NISER Bhubaneswar**, **IISc Bangalore (B.S. program)**.
            `
        }

        
        
    };

    // The function to reset the display container content
    const resetDisplay = () => {
        return '<p class="initial-message">Click on a "Show Details" button to learn more about the program requirements and entrance exams.</p>';
    };

    // 2. Select the display container and all the buttons
    const displayContainer = document.getElementById('detailed-info-display');
    const detailButtons = document.querySelectorAll('.show-details-btn');

    // 3. Add event listener to each button
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const infoKey = button.getAttribute('data-info-key');
            const info = careerDetails[infoKey];

            if (info) {
                // Construct the HTML content with a CLOSE button
                const htmlContent = `
                    <div class="detailed-card animate-fadeIn">
                        <h4>${info.title} - Program Details</h4>
                        <p>${info.details}</p>
                        <button class="close-details-btn">Close Details</button>
                    </div>
                `;

                // Inject the content
                displayContainer.innerHTML = htmlContent;

                // Scroll the container into view (Optional: helps on smaller screens)
                displayContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Add functionality to the new 'Close Details' button
                document.querySelector('.close-details-btn').addEventListener('click', () => {
                    displayContainer.innerHTML = resetDisplay();
                });
            }
        });
    });
});