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

// Activate Link Type
function linkType(eT) {
    if (!eT.closest('.link-type') && !eT.closest('li')) {return;}

    if (document.querySelector('sup .link-type .active')) {
        let lActive = document.querySelector('sup .link-type .active');
        if (lActive !== eT.closest('li')) {
            eT.closest('li').classList.add('active');
            lActive.classList.remove('active');
        }
    } else {
        eT.closest('li').classList.add('active');
    }
}

// Global listener for menu-like events
document.addEventListener('click', (e) => {
    // Open and close main menu
    try {toggleMenu(e);} catch {}

    // Toggle drop down menus
    try {toggleOption(e);} catch {}

    // Update drop down menu selection and close them
    try {updateOption(e);} catch {}

    // Close if clicks are outside the option element
    try {closeOption(e);} catch {}

    // Trigger link type
    try {linkType(e.target);} catch {}
});

// Sliding across on touch devices
document.addEventListener('touchstart', (e) => {
    try {document.querySelector('sup .link-type').classList.add('sliding');} catch {}
});
document.addEventListener('touchend', (e) => {
    try {document.querySelector('sup .link-type').classList.remove('sliding');} catch {}
});
document.querySelector('sup .link-type').addEventListener('touchmove', (e) => {
    const eUF = document.elementFromPoint(
        e.touches[0].clientX,
        e.touches[0].clientY
    );

    // Trigger link type
    try {linkType(eUF);} catch {}
});

// Recreate Mouse-click effect on Keyboard
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') {return;}
    if (!e.target.classList) {return;}

    e.target.classList.add('keyboard-active');
});
document.addEventListener('keyup', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') {return;}
    if (!e.target.classList) {return;}

    e.target.click();
    e.target.classList.remove('keyboard-active');
});
document.addEventListener('blur', (e) => {
    if (!e.target.classList) {return;}
    
    e.target.classList.remove('keyboard-active');
}, true);