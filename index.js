 
 const heartsContainer = document.getElementById('hearts-container');
        
 function createHeart() {
     const heart = document.createElement('div');
     heart.classList.add('heart');
     
     // Random positioning
     heart.style.left = Math.random() * 100 + 'vw';
     heart.style.animationDuration = Math.random() * 3 + 3 + 's';
     heart.style.opacity = Math.random() * 0.5 + 0.3;
     heart.style.transform = `rotate(45deg) scale(${Math.random() * 0.6 + 0.4})`;
     
     heartsContainer.appendChild(heart);
     
     // Remove heart after animation completes
     setTimeout(() => {
         heart.remove();
     }, 6000);
 }
 
 // Create hearts periodically
 setInterval(createHeart, 300);
 
 // Create initial batch of hearts
 for (let i = 0; i < 20; i++) {
     setTimeout(createHeart, 100 * i);
 }
 
 // Animate sparkles
 const sparkles = document.querySelectorAll('.sparkle');
 sparkles.forEach((sparkle, index) => {
     sparkle.style.animationDelay = `${index * 0.7}s`;
 });
 
 // Add more sparkles to header dynamically
 const headerContent = document.querySelector('.header-content');
 for (let i = 0; i < 8; i++) {
     const newSparkle = document.createElement('div');
     newSparkle.classList.add('sparkle');
     newSparkle.style.top = `${Math.random() * 100}%`;
     newSparkle.style.left = `${Math.random() * 100}%`;
     newSparkle.style.animationDelay = `${Math.random() * 2}s`;
     headerContent.appendChild(newSparkle);
 }
 
 // Animate timeline items on scroll
 const timelineItems = document.querySelectorAll('.timeline-item');
 
 function isElementInViewport(el) {
     const rect = el.getBoundingClientRect();
     return (
         rect.top >= 0 &&
         rect.left >= 0 &&
         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
     );
 }
 
 function handleScroll() {
     timelineItems.forEach(item => {
         if (isElementInViewport(item)) {
             item.classList.add('visible');
         }
     });
 }
 
 // Initial check on load
 window.addEventListener('load', handleScroll);
 
 // Check on scroll
 window.addEventListener('scroll', handleScroll);