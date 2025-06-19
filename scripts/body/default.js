// Read from localstorage and update default choices
function setActiveOptions() {
    let securityChoice = localStorage.security || 'Base64',
        shorteningChoice = localStorage.shortening || 'is.gd';

    let security = document.querySelector('option[data-type="security"]'),
        shortening = document.querySelector('option[data-type="shortening"]'),
        securityInput = security.querySelector('input'),
        shorteningInput = shortening.querySelector('input');

    security.querySelector('.value').textContent = securityChoice;
    securityInput.value = securityChoice;
    shortening.querySelector('.value').textContent = shorteningChoice;
    shorteningInput.value = shorteningChoice;

    for (let x = 0; x < security.querySelectorAll('.op-list li').length; x++) {
        if (security.querySelectorAll('.op-list li')[x].textContent.match(securityChoice)) {
            security.querySelectorAll('.op-list li')[x].classList.add('active');
        }
    }

    for (let x = 0; x < shortening.querySelectorAll('.op-list li').length; x++) {
        if (shortening.querySelectorAll('.op-list li')[x].textContent.match(shorteningChoice)) {
            shortening.querySelectorAll('.op-list li')[x].classList.add('active');
        }
    }
}

setActiveOptions();