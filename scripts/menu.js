function menuClick() {
    document.body.classList.toggle('open-menu');
}

document.querySelector('header .btn-menu').addEventListener('click', menuClick);