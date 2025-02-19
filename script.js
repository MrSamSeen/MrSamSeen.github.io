// Data
const achievements = [
    {
        title: "1st Place Winner of Dialog Techathon",
        year: "2018",
        description: " VINA | Network Monitoring and Admin project based on Raspberry PI/python / Android app / CISCO",
        icon: "🏆",
        type: "gold"
    },
    {
        title: "Bronze Award for Innovation of the Year",
        year: "2018",
        description: "Dialog Axiata Bronze Award for Innovation of the Year",
        icon: "🏆",
        type: "bronze"
    }
];

const education = [
    {
        title: "BCS Chartered Institute of Information Technology (CIIT)",
        items: [
            "Professional Graduate Diploma in IT – 2018",
            "Diploma level – 2014",
            "Certificate level – 2012"
        ]
    },
    {
        title: "Technical Education Certifications",
        items: [
            "Diploma in Computer Programming (TEC Sri Lanka) – 2002",
            "Computer Programming Intermediate level (TEC Sri Lanka) – 2001",
            "Computer Programming basic level (TEC Sri Lanka) – 2000"
        ]
    },
    {
        title: "Additional Certifications",
        items: [
            "Graphic Designing - WIJEYA Graphics (Pvt.) Ltd – 2005",
            "Sun Certified Java Professional (SCJP) at IJTS",
            "Television Journalism Diploma - National Institute of Television Training"
        ]
    }
];

const skills = [
    { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "WordPress", "SEO"] },
    { category: "Digital Marketing", items: ["Social Media Marketing", "Google Analytics", "Content Creation"] },
    { category: "Design", items: ["Adobe Photoshop", "Canva", "UI/UX Design"] },
    { category: "Technical", items: ["Network Administration", "System Provisioning", "Linux"] },
    { category: "Other Technical Skills", items: ["PHP", "MySQL", "Python", "Java", "Android Development", "iOS Development", "CISCO", "LTE", "WiMax", "HSDPA", "Fiber-GPON", "VOIP"] },
    { category: "Social Media Skills", items: ["Content Creation", "Video Editing", "Social Media Strategy", "Community Management", "Digital Storytelling", "Social Media Analytics", "AI Content Generation"] },
    { category: "Freelance Skills", items: ["Content Writing", "Video Production", "Photography", "Drone Operation"] },
    { category: "Languages", items: ["English - Fluent", "Sinhala - Native", "Hindi - Conversational"] }
];

const experience = [
    {
        role: "Web Production Specialist",
        company: "Evendys Social Media and Digital Solutions (Dubai)",
        period: "2023 - 2024",
        highlights: [
            "Led web production projects from conception to completion",
            "Optimized digital advertising campaigns",
            "Managed social media presence and content strategy"
        ]
    },
    {
        role: "Web Production Officer",
        company: "PGS Lanka - HSBC",
        period: "2020 - 2023",
        highlights: [
            "Managed multiple client websites using CMS",
            "Implemented SEO best practices",
            "Trained and mentored team members"
        ]
    },
    {
        role: "Engineering Executive",
        company: "Dialog Axiata PLC",
        period: "2017 - 2019",
        highlights: [
            "Network and system provisioning for various technologies (CISCO/LTE/Cambium/WiMax/HSDPA/Fiber-GPON/VOIP)",
            "R&D - System Development using PHP/MySQL/CSS/JS on Linux server",
            "Piloted company drones (DJI Mavic 2 Zoom) for signal tower installations"
        ]
    },
    {
        role: "Executive",
        company: "Dialog Axiata PLC",
        period: "2013 - 2017",
        highlights: [
            "Managed team performance reports and resource documentation",
            "Provided 2nd level technical support for smartphones (Blackberry/Android/iOS)",
            "Handled mobile internet (3G/LTE) and Fix Broadband technical support"
        ]
    },
    {
        role: "Officer",
        company: "Dialog Axiata PLC",
        period: "2008 - 2013",
        highlights: [
            "Provided technical support for various products (BlackBerry/Android/iOS/MacOS/LTE/HSPA/WiMax)",
            "Conducted product demos and on-site technical support for VIP clients",
            "Trained staff and participated in promotional campaigns"
        ]
    },
    {
        role: "Technical Training Assistant",
        company: "Innodata ISO Gen Lanka (Pvt) LTD",
        period: "2008",
        highlights: [
            "Developed and maintained technical training materials",
            "Conducted training sessions for staff and new hires",
            "Assisted HR in recruitment and managed company book library"
        ]
    }
];

// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

// Initialize the first tab (Skills) on page load
window.addEventListener('DOMContentLoaded', () => {
    // Remove active class from all buttons and panels first
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Show the Skills tab by default
    const defaultTab = document.querySelector('[data-tab="skills"]');
    const defaultPanel = document.getElementById('skills');

    if (defaultTab && defaultPanel) {
        defaultTab.classList.add('active');
        defaultPanel.classList.add('active');
    }

    // Initialize content for all sections
    populateSkills();
    populateExperience();
    populateEducation();
    populateAchievements();
});

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Add active class to clicked button and corresponding panel
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');

        // Scroll the tabs navigation into view smoothly
        const tabsNavigation = document.querySelector('.tabs-navigation');
        tabsNavigation.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = menuBtn.querySelector('.menu-icon');

menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    const isOpen = mobileNav.classList.contains('active');
    menuIcon.innerHTML = isOpen
        ? '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
        : '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
});

// Function to populate Skills
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    // Clear existing content
    skillsGrid.innerHTML = '';

    skills.forEach(skillGroup => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';

        skillCard.innerHTML = `
            <h3>${skillGroup.category}</h3>
            <ul class="skill-list">
                ${skillGroup.items.map(item => `
                    <li class="skill-item">
                        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        `;

        skillsGrid.appendChild(skillCard);
    });
}

// Function to populate Experience
function populateExperience() {
    const experienceGrid = document.getElementById('experienceGrid');
    if (!experienceGrid) return;

    // Clear existing content
    experienceGrid.innerHTML = '';

    experience.forEach(job => {
        const experienceCard = document.createElement('div');
        experienceCard.className = 'experience-card';

        experienceCard.innerHTML = `
            <div class="experience-header">
                <h3 class="experience-title">${job.role} at ${job.company}</h3>
                <span class="experience-period">${job.period}</span>
            </div>
            <ul class="experience-highlights">
                ${job.highlights.map(highlight => `
                    <li class="highlight-item">
                        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        ${highlight}
                    </li>
                `).join('')}
            </ul>
        `;

        experienceGrid.appendChild(experienceCard);
    });
}

// Function to populate Education
function populateEducation() {
    const educationGrid = document.getElementById('educationGrid');
    if (!educationGrid) return;

    // Clear existing content
    educationGrid.innerHTML = '';

    education.forEach(edu => {
        const educationCard = document.createElement('div');
        educationCard.className = 'education-card';

        educationCard.innerHTML = `
            <div class="education-header">
                <h3 class="education-title">${edu.title}</h3>
            </div>
            <ul class="education-highlights">
                ${edu.items.map(item => `
                    <li class="highlight-item">
                        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        `;

        educationGrid.appendChild(educationCard);
    });
}

// Function to populate Achievements
function populateAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    if (!achievementsGrid) return;

    // Clear existing content
    achievementsGrid.innerHTML = '';

    achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'achievement-card';

        achievementCard.innerHTML = `
            <div class="achievement-content">
                <div class="trophy-icon ${achievement.type}">${achievement.icon}</div>
                <div class="achievement-header">
                    <h3 class="achievement-title">${achievement.title}</h3>
                    <span class="achievement-year">${achievement.year}</span>
                </div>
                <p class="achievement-description">${achievement.description}</p>
            </div>
        `;

        achievementsGrid.appendChild(achievementCard);
    });
}

// Add this after your existing data constants
const education2 = [
    {
        title: "BCS Chartered Institute of Information Technology (CIIT)",
        items: [
            "Professional Graduate Diploma in IT – 2018",
            "Diploma level – 2014",
            "Certificate level – 2012"
        ]
    },
    {
        title: "Technical Education Certifications",
        items: [
            "Diploma in Computer Programming (TEC Sri Lanka) – 2002",
            "Computer Programming Intermediate level (TEC Sri Lanka) – 2001",
            "Computer Programming basic level (TEC Sri Lanka) – 2000"
        ]
    },
    {
        title: "Additional Certifications",
        items: [
            "Graphic Designing - WIJEYA Graphics (Pvt.) Ltd – 2005",
            "Sun Certified Java Professional (SCJP) at IJTS",
            "Television Journalism Diploma - National Institute of Television Training"
        ]
    }
];