// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animated progress bars on scroll
window.addEventListener('scroll', function () {
    const skillsSection = document.querySelector('#about .skills');
    const progressBars = document.querySelectorAll('.progress-bar');

    if (skillsSection.getBoundingClientRect().top < window.innerHeight) {
        progressBars.forEach(bar => {
            const value = bar.getAttribute('data-value');
            bar.style.width = value;
        });
    }
});
