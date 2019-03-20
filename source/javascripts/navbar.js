const backdrop = document.querySelector(".backdrop");
const toggleButton = document.querySelector(".nav-menu");
const mobileNav = document.querySelector(".mobile-nav");

backdrop.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
})

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
})