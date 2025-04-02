document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }
});

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.offsetTop - document.querySelector('header').offsetHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });

    highlightSection(targetElement);
}

function highlightSection(element) {
    element.classList.add('highlight', 'active');
    setTimeout(() => {
        element.classList.remove('active');
        setTimeout(() => {
            element.classList.remove('highlight');
        }, 500); // Match the duration of the fade-out transition
    }, 1000); // Duration for how long the highlight should be visible
}