function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openInNewTab(url) {
    window.open(url, '_blank');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 20; // Set the offset value as needed

        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: targetPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    // Show or hide the scroll-to-top button based on scroll position
    window.addEventListener('scroll', () => {
        const scrollButton = document.querySelector('.scroll-to-top');
        if (scrollButton) {
            if (window.scrollY > 300) { // Adjust the scroll threshold as needed
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        }
    });

    // Scroll to the top when the scroll-to-top button is clicked
    document.querySelectorAll('.scroll-to-top').forEach(button => {
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});



function sendEmail() {
    window.location.href = "mailto:DevonNPhillips@Outlook.com";
}

