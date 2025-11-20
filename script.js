
        // Navigation System
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Get target page
                const targetPage = link.getAttribute('data-page');
                
                // Remove active class from all links and pages
                navLinks.forEach(l => l.classList.remove('active'));
                pages.forEach(p => p.classList.remove('active'));
                
                // Add active class to clicked link and corresponding page
                link.classList.add('active');
                document.getElementById(targetPage).classList.add('active');
                
                // Update URL hash
                window.location.hash = targetPage;
            });
        });

        // Handle page load with hash
        window.addEventListener('load', () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const targetLink = document.querySelector(`[data-page="${hash}"]`);
                if (targetLink) {
                    targetLink.click();
                }
            }
        });

        // Dynamic greeting based on time
        function updateGreeting() {
            const hour = new Date().getHours();
            const greetingElement = document.getElementById('current-time');
            
            if (hour < 12) {
                greetingElement.textContent = 'Good morning';
            } else if (hour < 18) {
                greetingElement.textContent = 'Good afternoon';
            } else {
                greetingElement.textContent = 'Good evening';
            }
        }
        updateGreeting();

        // Play button functionality
        document.querySelectorAll('.play-overlay, .icon-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const icon = btn.querySelector('i');
                
                if (icon && icon.classList.contains('fa-play')) {
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                    
                    // Reset after 2 seconds for demo
                    setTimeout(() => {
                        icon.classList.remove('fa-pause');
                        icon.classList.add('fa-play');
                    }, 2000);
                }
            });
        });

        // Like button functionality
        document.querySelectorAll('.icon-btn').forEach(btn => {
            const icon = btn.querySelector('.fa-heart');
            if (icon) {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (icon.classList.contains('fa-heart')) {
                        icon.style.color = '#ff6b6b';
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                    }
                });
            }
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                console.log('Searching for:', searchTerm);
                // Add your search logic here
            });
        }

        // Category chips
        document.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
            });
        });

        // Genre cards
        document.querySelectorAll('.genre-card').forEach(card => {
            card.addEventListener('click', () => {
                console.log('Genre selected:', card.textContent.trim());
            });
        });

        // Card hover effect with smooth play button
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const playBtn = card.querySelector('.play-overlay');
                if (playBtn) {
                    playBtn.style.opacity = '1';
                    playBtn.style.transform = 'translateY(0)';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                const playBtn = card.querySelector('.play-overlay');
                if (playBtn) {
                    playBtn.style.opacity = '0';
                    playBtn.style.transform = 'translateY(10px)';
                }
            });
        });
   
