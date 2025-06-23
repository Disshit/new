// Open and close main menu
function toggleMenu(e) {
    if (e.target.closest('.btn-menu')) {
        document.body.classList.toggle('open-menu');
    }
}

// Toggle drop down menus
function toggleOption(e) {
    if (e.target.closest('.op-button')) {
        e.target.closest('option').classList.toggle('expanded');

        // Close overlapping menu on smaller displays
        let computedStyle = window.getComputedStyle(document.querySelector('sub'));
        if (computedStyle.getPropertyValue('flex-direction').match('column')) {
            document.querySelector(`option:not([data-type="${e.target.closest('option').getAttribute('data-type')}"])`).classList.remove('expanded');
        }
    }
}

// Update drop down menu selection and close them
function updateOption(e) {
    if (e.target.closest('li')) {
        e.target.closest('option').querySelector('.value').textContent = e.target.closest('li').querySelector('span').textContent;
        e.target.closest('option').querySelector('input').value = e.target.closest('li').querySelector('span').textContent;
        localStorage.setItem(e.target.closest('option').getAttribute('data-type'), e.target.closest('li').querySelector('span').textContent);
        try {
            e.target.closest('ul').querySelector('li.active').classList.remove('active');
        } catch {}
        e.target.closest('li').classList.add('active');
        setTimeout(() => {
            e.target.closest('option').classList.remove('expanded');
        }, 50);
    }
}

// Close if clicks are outside the option element
function closeOption(e) {
    if (!e.target.closest('option')) {
        let options = document.querySelectorAll('option');
        for (let x = 0; x < options.length; x++) {
            options[x].classList.remove('expanded');
        }
    }
}

// Global listener for menu-like events
document.addEventListener('click', (e) => {
    // Open and close main menu
    toggleMenu(e);

    // Toggle drop down menus
    toggleOption(e);

    // Update drop down menu selection and close them
    updateOption(e);

    // Close if clicks are outside the option element
    closeOption(e);
});

document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') {return;}

    // Open and close main menu
    toggleMenu(e);

    // Toggle drop down menus
    toggleOption(e);

    // Update drop down menu selection and close them
    updateOption(e);

    // Close if clicks are outside the option element
    closeOption(e);
});