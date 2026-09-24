fetch('/components/navbar.html')
    .then(response => response.text())
    .then(data => {
        const navbarContainer = document.getElementById('navbar-container');
        navbarContainer.innerHTML = data;

        const navbar = document.querySelector('.navbar');
        navbarContainer.style.height = `${navbar.offsetHeight}px`;
        let previousScrollY = window.scrollY;

        window.addEventListener('resize', () => {
            navbarContainer.style.height = `${navbar.offsetHeight}px`;
        });

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                navbar.classList.remove('navbar-floating');
                navbar.classList.remove('navbar-hidden');
            } else {
                navbar.classList.add('navbar-floating');
            }

            if (currentScrollY > previousScrollY + 8) {
                navbar.classList.add('navbar-hidden');
            } else if (currentScrollY < previousScrollY - 8) {
                navbar.classList.remove('navbar-hidden');
            }

            previousScrollY = currentScrollY;
        }, { passive: true });
});