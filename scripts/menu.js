const mobileNav = document.getElementById('mobileNav');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', () => {
    mobileNav.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
});
