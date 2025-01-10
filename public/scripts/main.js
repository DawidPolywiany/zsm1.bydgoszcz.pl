//Боковое меню
const _nav_menu = document.getElementById('nav_menu');
function toggle_menu(button) {
    _nav_menu.classList.toggle('nav-closed');
    button.querySelector('div').classList.toggle('menu-closed');
}
