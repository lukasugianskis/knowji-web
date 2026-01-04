// Mobile menu toggle - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let isMenuOpen = false;
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.right = '20px';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.padding = '20px';
                navLinks.style.borderRadius = '10px';
                navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                navLinks.style.zIndex = '100';
                navLinks.style.gap = '15px';
            } else {
                navLinks.style.display = 'none';
            }
        });
        
        // Close menu when clicking outside - FIXED
        document.addEventListener('click', function(event) {
            if (isMenuOpen && 
                !event.target.closest('.nav-links') && 
                !event.target.closest('.mobile-menu-btn')) {
                navLinks.style.display = 'none';
                isMenuOpen = false;
            }
        });
        
        // Also close menu when clicking a nav link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.style.display = 'none';
                isMenuOpen = false;
            });
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && isMenuOpen) {
                navLinks.style.display = 'none';
                isMenuOpen = false;
            }
        });
    }
    
    // Button interactions
    const startLearningBtn = document.getElementById('startLearningBtn');
    const exploreBtn = document.getElementById('exploreBtn');
    
    if (startLearningBtn) {
        startLearningBtn.addEventListener('click', function() {
            alert('Starting your learning journey! Get ready for AI-powered quizzes.');
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            alert('Exploring available quizzes...');
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    // Quiz option interactions
    const quizOptions = document.querySelectorAll('.option');
    
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            quizOptions.forEach(opt => {
                opt.classList.remove('selected');
            });
            
            this.classList.add('selected');
            
            if (this.classList.contains('correct')) {
                this.style.backgroundColor = '#e8f5e9';
                this.style.color = '#2e7d32';
                this.style.borderColor = '#4caf50';
                
                const message = document.createElement('div');
                message.className = 'quiz-feedback';
                message.textContent = 'Correct! Well done!';
                message.style.cssText = `
                    position: absolute;
                    background: #4caf50;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-weight: 600;
                    bottom: -40px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                    animation: fadeIn 0.3s ease;
                `;
                
                const existingFeedback = document.querySelector('.quiz-feedback');
                if (existingFeedback) {
                    existingFeedback.remove();
                }
                
                this.parentElement.style.position = 'relative';
                this.parentElement.appendChild(message);
                
                setTimeout(() => {
                    message.remove();
                }, 2000);
            } else {
                this.style.backgroundColor = '#ffebee';
                this.style.color = '#c62828';
                this.style.borderColor = '#ef5350';
                
                const correctOption = document.querySelector('.correct');
                correctOption.style.backgroundColor = '#e8f5e9';
                correctOption.style.color = '#2e7d32';
                correctOption.style.borderColor = '#4caf50';
                correctOption.style.boxShadow = '0 0 0 2px rgba(76, 175, 80, 0.3)';
            }
        });
    });
    
    // Add CSS animation for fadeIn
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-50%) translateY(10px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        
        .selected {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);
    
    // Update progress animation
    const progressRing = document.querySelector('.ring');
    let rotation = 0;
    
    function animateProgress() {
        rotation += 1;
        if (rotation > 360) rotation = 0;
        
        progressRing.style.borderTop = `8px solid #6a11cb`;
        progressRing.style.transform = `rotate(${rotation}deg)`;
        
        requestAnimationFrame(animateProgress);
    }
    
    animateProgress();
    
    // Stats counter animation
    const stats = document.querySelectorAll('.stat-item h3');
    stats.forEach(stat => {
        const targetValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = targetValue / 100;
        const duration = 1500;
        const steps = 60;
        const stepDuration = duration / steps;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(currentValue) + (stat.textContent.includes('+') ? '+' : '%');
        }, stepDuration);
    });
});