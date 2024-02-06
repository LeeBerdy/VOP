const menu_btn = document.querySelector('.burgermenu');
const res_nav = document.querySelector('.Resp-navbar');


menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    res_nav.classList.toggle('hidden');
});



