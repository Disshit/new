// Toggle the menu open and close
function menuClick() {
    document.body.classList.toggle('open-menu');
}

// Listen for menu button click
document.querySelector('header .btn-menu').addEventListener('click', menuClick);