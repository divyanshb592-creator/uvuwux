// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const closeSidebar = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');
const pageSections = document.querySelectorAll('.page-section');
const homeSection = document.getElementById('home-section');
const hiringButton = document.getElementById('hiringButton');
const downloadResume = document.getElementById('downloadResume');

// PDF Section Elements
const pdfGrid = document.getElementById('pdf-grid-view');
const pdfDetailView = document.getElementById('pdf-detail-view');
const backToGridBtn = document.getElementById('backToGrid');
const viewPdfBtns = document.querySelectorAll('.view-pdf-btn');
const downloadPdfDetailBtn = document.getElementById('downloadPdfDetail');
const copyLinkBtn = document.getElementById('copyLinkBtn');
const whatsappShareBtn = document.getElementById('whatsappShare');

// PDF Data
const pdfData = {
    1: {
        title: "Ultimate Resume Guide",
        description: "Learn how to create a resume that gets you interviews in 2025. This comprehensive guide covers everything from formatting to content strategy, with modern templates and ATS optimization techniques.",
        filename: "ultimate-resume-guide-2025.pdf",
        pages: 15,
        size: 2.5,
        date: "Jan 2025",
        highlights: [
            "Modern resume templates for 2025",
            "ATS optimization techniques",
            "Industry-specific resume samples",
            "Common mistakes to avoid",
            "Action verb cheat sheet",
            "Digital resume best practices"
        ],
        tags: ["Resume", "Career", "ATS", "Job Search"]
    },
    2: {
        title: "Interview Mastery",
        description: "50+ interview questions with perfect answers and strategies. This guide covers behavioral, technical, and situational interviews across all industries.",
        filename: "interview-mastery-guide.pdf",
        pages: 22,
        size: 3.1,
        date: "Feb 2025",
        highlights: [
            "50+ common interview questions",
            "STAR method explained",
            "Salary negotiation scripts",
            "Virtual interview tips",
            "Body language guide",
            "Follow-up email templates"
        ],
        tags: ["Interview", "Preparation", "Career", "Job Search"]
    },
    3: {
        title: "Salary Negotiation",
        description: "Get paid what you're worth with our negotiation playbook. Learn how to research salaries, negotiate offers, and maximize your compensation package.",
        filename: "salary-negotiation-playbook.pdf",
        pages: 18,
        size: 2.8,
        date: "Jan 2025",
        highlights: [
            "Market salary research methods",
            "Negotiation scripts",
            "Benefits package evaluation",
            "Counter-offer strategies",
            "Timing your negotiation",
            "Remote work compensation"
        ],
        tags: ["Salary", "Negotiation", "Career", "Money"]
    },
    4: {
        title: "LinkedIn Optimization",
        description: "Transform your LinkedIn profile into a job magnet. This guide shows you how to optimize every section of your profile for maximum visibility and opportunities.",
        filename: "linkedin-optimization-guide.pdf",
        pages: 12,
        size: 2.2,
        date: "Dec 2024",
        highlights: [
            "Profile headline formulas",
            "About section templates",
            "Skills endorsement strategy",
            "Content creation tips",
            "Networking messaging",
            "Recruiter visibility"
        ],
        tags: ["LinkedIn", "Social Media", "Networking", "Career"]
    },
    5: {
        title: "Career Switch Guide",
        description: "Step-by-step guide to successfully switch careers in 2025. Learn how to identify transferable skills, build a transition plan, and land your dream role.",
        filename: "career-switch-guide-2025.pdf",
        pages: 25,
        size: 3.5,
        date: "Jan 2025",
        highlights: [
            "Transferable skills assessment",
            "Industry research methods",
            "Networking for career changers",
            "Education vs. experience",
            "Portfolio building",
            "Entry-level strategy"
        ],
        tags: ["Career Change", "Transition", "Development", "Growth"]
    },
    6: {
        title: "Freelance Starter Kit",
        description: "Launch your freelance career with our comprehensive guide. From finding clients to managing finances, this kit covers everything you need to succeed.",
        filename: "freelance-starter-kit.pdf",
        pages: 20,
        size: 3.0,
        date: "Nov 2024",
        highlights: [
            "Client acquisition strategies",
            "Portfolio creation guide",
            "Pricing and contracts",
            "Tax and legal basics",
            "Time management tools",
            "Scaling your business"
        ],
        tags: ["Freelance", "Business", "Entrepreneur", "Remote"]
    },
    7: {
        title: "Remote Work Handbook",
        description: "Master remote work productivity and communication. This handbook covers tools, routines, and best practices for successful remote work.",
        filename: "remote-work-handbook.pdf",
        pages: 16,
        size: 2.7,
        date: "Jan 2025",
        highlights: [
            "Home office setup guide",
            "Time blocking techniques",
            "Virtual communication tools",
            "Work-life balance",
            "Team collaboration",
            "Productivity hacks"
        ],
        tags: ["Remote Work", "Productivity", "Communication", "Workplace"]
    },
    8: {
        title: "Networking Blueprint",
        description: "Build professional relationships that advance your career. Learn how to network effectively both online and in-person.",
        filename: "networking-blueprint.pdf",
        pages: 14,
        size: 2.4,
        date: "Dec 2024",
        highlights: [
            "Elevator pitch templates",
            "Event networking strategies",
            "Follow-up system",
            "Relationship maintenance",
            "Online networking tips",
            "Mentorship guidance"
        ],
        tags: ["Networking", "Relationships", "Career", "Communication"]
    },
    9: {
        title: "Cover Letter Templates",
        description: "10 professional cover letter templates for any industry. Customize these templates to create compelling cover letters that get noticed.",
        filename: "cover-letter-templates.pdf",
        pages: 24,
        size: 3.2,
        date: "Jan 2025",
        highlights: [
            "10 industry-specific templates",
            "Customization instructions",
            "ATS-friendly formatting",
            "Email cover letters",
            "Cold outreach templates",
            "Follow-up letters"
        ],
        tags: ["Cover Letter", "Application", "Career", "Job Search"]
    }
};

// Job Slider Elements
const jobSlides = document.querySelectorAll('.jobs-slide');
const pageButtons = document.querySelectorAll('.page-btn');
const nextButton = document.querySelector('.next-btn');

// PDF Slider Elements
const pdfSlides = document.querySelectorAll('.pdf-slide');
const pdfPageButtons = document.querySelectorAll('.pdf-page-btn');
const pdfNextButton = document.querySelector('.pdf-page-btn.next-btn');

// Current slide indices
let currentJobSlide = 1;
let currentPdfSlide = 1;
let currentPdfId = null;
const totalJobSlides = jobSlides.length;
const totalPdfSlides = pdfSlides.length;

// Toggle Sidebar
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close Sidebar
closeSidebar.addEventListener('click', closeSidebarFunction);
overlay.addEventListener('click', closeSidebarFunction);

function closeSidebarFunction() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Handle navigation between sections
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section
        const targetSection = this.getAttribute('data-section');
        
        // Update active states
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        // Hide all sections
        pageSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the target section
        if (targetSection === 'home') {
            homeSection.classList.add('active');
            // Scroll to top of home section
            window.scrollTo({top: 0, behavior: 'smooth'});
            // Clear URL hash
            window.history.replaceState(null, null, ' ');
        } else {
            const targetElement = document.getElementById(`${targetSection}-section`);
            targetElement.classList.add('active');
            // Scroll to the target section
            targetElement.scrollIntoView({behavior: 'smooth'});
            // Update URL hash
            window.history.replaceState(null, null, `#${targetSection}`);
        }
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            closeSidebarFunction();
        }
    });
});

// Hiring Button click handler
hiringButton.addEventListener('click', function() {
    // Scroll to Today's Hirings section
    navLinks.forEach(nav => nav.classList.remove('active'));
    document.querySelector('a[data-section="hirings"]').classList.add('active');
    
    pageSections.forEach(section => {
        section.classList.remove('active');
    });
    
    const hiringsSection = document.getElementById('hirings-section');
    hiringsSection.classList.add('active');
    hiringsSection.scrollIntoView({behavior: 'smooth'});
    
    // Update URL hash
    window.history.replaceState(null, null, '#hirings');
    
    // Close sidebar if open
    closeSidebarFunction();
});

// Download Resume button
downloadResume.addEventListener('click', function() {
    // Simulate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'JobsByKilo-Resume-Template.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    showNotification('Resume template download started!', 'success');
    
    // Change button text temporarily
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-check"></i> Download Complete!';
    this.style.backgroundColor = '#2ecc71';
    
    setTimeout(() => {
        this.innerHTML = originalText;
        this.style.backgroundColor = '';
    }, 2000);
});

// Job Slider Functions
function showJobSlide(slideNumber) {
    // Hide all slides
    jobSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show the selected slide
    const targetSlide = document.querySelector(`.jobs-slide[data-slide="${slideNumber}"]`);
    if (targetSlide) {
        targetSlide.classList.add('active');
    }
    
    // Update active pagination button
    pageButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-page') == slideNumber) {
            btn.classList.add('active');
        }
    });
    
    // Update current slide
    currentJobSlide = slideNumber;
}

// Job Pagination button click handler
pageButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('next-btn')) {
            // Next button clicked
            currentJobSlide = currentJobSlide < totalJobSlides ? currentJobSlide + 1 : 1;
            showJobSlide(currentJobSlide);
        } else {
            // Number button clicked
            const pageNumber = parseInt(this.getAttribute('data-page'));
            showJobSlide(pageNumber);
        }
    });
});

// PDF Slider Functions
function showPdfSlide(slideNumber) {
    // Hide all slides
    pdfSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show the selected slide
    const targetSlide = document.querySelector(`.pdf-slide[data-slide="${slideNumber}"]`);
    if (targetSlide) {
        targetSlide.classList.add('active');
    }
    
    // Update active pagination button
    pdfPageButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-page') == slideNumber) {
            btn.classList.add('active');
        }
    });
    
    // Update current slide
    currentPdfSlide = slideNumber;
}

// PDF Pagination button click handler
pdfPageButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('next-btn')) {
            // Next button clicked
            currentPdfSlide = currentPdfSlide < totalPdfSlides ? currentPdfSlide + 1 : 1;
            showPdfSlide(currentPdfSlide);
        } else {
            // Number button clicked
            const pageNumber = parseInt(this.getAttribute('data-page'));
            showPdfSlide(pageNumber);
        }
    });
});

// View PDF Details
viewPdfBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const pdfId = this.getAttribute('data-pdf-id');
        const filename = this.getAttribute('data-pdf');
        
        // Store current PDF ID
        currentPdfId = pdfId;
        
        // Get PDF data
        const pdf = pdfData[pdfId];
        
        if (pdf) {
            // Update detail view
            document.getElementById('detail-pdf-title').textContent = pdf.title;
            document.getElementById('detail-description').textContent = pdf.description;
            document.getElementById('detail-pages').textContent = pdf.pages;
            document.getElementById('detail-size').textContent = pdf.size;
            document.getElementById('detail-date').textContent = pdf.date;
            
            // Update highlights
            const highlightsList = document.getElementById('detail-highlights');
            highlightsList.innerHTML = '';
            pdf.highlights.forEach(highlight => {
                const li = document.createElement('li');
                li.textContent = highlight;
                highlightsList.appendChild(li);
            });
            
            // Update tags
            const tagsContainer = document.querySelector('.pdf-tags');
            tagsContainer.innerHTML = '';
            pdf.tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'tag';
                span.textContent = tag;
                tagsContainer.appendChild(span);
            });
            
            // Set download filename
            downloadPdfDetailBtn.setAttribute('data-filename', pdf.filename);
            
            // Switch to detail view
            pdfGrid.classList.remove('active');
            pdfDetailView.classList.add('active');
            
            // Update URL hash for direct linking
            window.history.replaceState(null, null, `#pdf=${pdfId}`);
            
            // Scroll to top of section
            document.getElementById('pdfs-section').scrollIntoView({behavior: 'smooth'});
        }
    });
});

// Back to PDF Grid
backToGridBtn.addEventListener('click', function() {
    pdfGrid.classList.add('active');
    pdfDetailView.classList.remove('active');
    
    // Update URL hash
    window.history.replaceState(null, null, '#pdfs');
});

// Download PDF Detail
downloadPdfDetailBtn.addEventListener('click', function() {
    if (currentPdfId) {
        const pdf = pdfData[currentPdfId];
        if (pdf) {
            // Create download link
            const link = document.createElement('a');
            link.href = '#';
            link.download = pdf.filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show success message
            showNotification(`${pdf.title} download started!`, 'success');
            
            // Change button text temporarily
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Download Complete!';
            this.style.backgroundColor = '#2ecc71';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        }
    }
});

// Copy Link Button
copyLinkBtn.addEventListener('click', function() {
    if (currentPdfId) {
        const pdf = pdfData[currentPdfId];
        if (pdf) {
            // Create the shareable link
            const currentUrl = window.location.origin + window.location.pathname;
            const shareUrl = `${currentUrl}#pdf=${currentPdfId}`;
            
            // Copy to clipboard
            navigator.clipboard.writeText(shareUrl).then(() => {
                showNotification('Direct link copied to clipboard!', 'info');
            }).catch(err => {
                console.error('Failed to copy: ', err);
                showNotification('Failed to copy link', 'error');
            });
        }
    }
});

// WhatsApp Share Button
whatsappShareBtn.addEventListener('click', function() {
    if (currentPdfId) {
        const pdf = pdfData[currentPdfId];
        if (pdf) {
            const currentUrl = window.location.origin + window.location.pathname;
            const shareUrl = `${currentUrl}#pdf=${currentPdfId}`;
            const message = `Check out "${pdf.title}" on JobsByKilo: ${shareUrl}`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
    }
});

// Notification function
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 300px;
        max-width: 400px;
        animation: slideIn 0.3s ease;
        transition: all 0.3s ease;
    `;
    
    // Add keyframe animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            margin-left: 1rem;
        }
    `;
    document.head.appendChild(style);
    
    // Add close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Handle URL hash on page load
function handleHashOnLoad() {
    const hash = window.location.hash;
    
    if (hash) {
        // Check if it's a PDF hash
        if (hash.startsWith('#pdf=')) {
            const pdfId = hash.split('=')[1];
            if (pdfData[pdfId]) {
                // Activate PDFs section
                navLinks.forEach(nav => nav.classList.remove('active'));
                document.querySelector('a[data-section="pdfs"]').classList.add('active');
                
                pageSections.forEach(section => {
                    section.classList.remove('active');
                });
                
                const pdfsSection = document.getElementById('pdfs-section');
                pdfsSection.classList.add('active');
                
                // Show the specific PDF
                setTimeout(() => {
                    const viewBtn = document.querySelector(`.view-pdf-btn[data-pdf-id="${pdfId}"]`);
                    if (viewBtn) {
                        viewBtn.click();
                    }
                }, 100);
                
                return;
            }
        }
        
        // Handle regular section hashes
        const sectionName = hash.replace('#', '');
        const targetLink = document.querySelector(`.nav-link[data-section="${sectionName}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize sliders
    showJobSlide(1);
    showPdfSlide(1);
    
    // Handle hash on page load
    handleHashOnLoad();
    
    // Add hover effects to job cards
    document.querySelectorAll('.job-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add hover effects to PDF cards
    document.querySelectorAll('.pdf-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Auto-rotate job slides every 15 seconds
    let jobSlideInterval = setInterval(() => {
        currentJobSlide = currentJobSlide < totalJobSlides ? currentJobSlide + 1 : 1;
        showJobSlide(currentJobSlide);
    }, 15000);
    
    // Auto-rotate PDF slides every 20 seconds
    let pdfSlideInterval = setInterval(() => {
        currentPdfSlide = currentPdfSlide < totalPdfSlides ? currentPdfSlide + 1 : 1;
        showPdfSlide(currentPdfSlide);
    }, 20000);
    
    // Pause auto-rotation when interacting with pagination
    const paginationContainers = document.querySelectorAll('.jobs-pagination, .pdf-pagination');
    paginationContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            clearInterval(jobSlideInterval);
            clearInterval(pdfSlideInterval);
        });
        
        container.addEventListener('mouseleave', () => {
            jobSlideInterval = setInterval(() => {
                currentJobSlide = currentJobSlide < totalJobSlides ? currentJobSlide + 1 : 1;
                showJobSlide(currentJobSlide);
            }, 15000);
            
            pdfSlideInterval = setInterval(() => {
                currentPdfSlide = currentPdfSlide < totalPdfSlides ? currentPdfSlide + 1 : 1;
                showPdfSlide(currentPdfSlide);
            }, 20000);
        });
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    // If screen is large and sidebar is open, close it
    if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
        closeSidebarFunction();
    }
});

// Initialize home section as active if no hash
if (!window.location.hash) {
    homeSection.classList.add('active');
}


// Auto-scroll to download button when opening PDF from direct link
window.addEventListener('load', function() {
    if (window.location.hash.startsWith('#pdf=')) {
        setTimeout(() => {
            const downloadBtn = document.getElementById('downloadPdfDetail');
            if (downloadBtn) {
                setTimeout(() => {
                    downloadBtn.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }, 500);
            }
        }, 10);
    }

});


<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0P627EVFEC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0P627EVFEC');
</script>
