document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {

        menuToggle.addEventListener('click', function () {

            mainNav.classList.toggle('show');

            const isOpen = mainNav.classList.contains('show');

            menuToggle.setAttribute('aria-expanded', isOpen);
            menuToggle.innerHTML = isOpen ? '✕' : '☰';

        });

        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                mainNav.classList.remove('show');
                menuToggle.innerHTML = '☰';
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

    }

});