const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
// Get the Pulchowk Campus link element
const schoolLink = document.querySelector('.school');

// Add click event listener to toggle additional styling
schoolLink.addEventListener('click', function() {
    // Toggle class on click
    this.classList.toggle('clicked');
});


