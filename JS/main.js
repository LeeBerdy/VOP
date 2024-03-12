const menu_btn = document.querySelector('.burgermenu');
const res_nav = document.querySelector('.Resp-navbar');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    res_nav.classList.toggle('hidden');
});

document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!targetElement.closest('.burgermenu') && !targetElement.closest('.Resp-navbar')) {
        res_nav.classList.remove('hidden');
        menu_btn.classList.remove('is-active');
    }
});




