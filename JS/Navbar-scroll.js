window.addEventListener('scroll', handleScroll);
const navbar = document.querySelector('.content-navbar');

function handleScroll() {

    if (window.scrollY >= 100) {
        navbar.classList.add('hide')
        navbar.classList.remove('show')
    } else {
        navbar.classList.remove('hide')
        navbar.classList.add('show')
    }
}
