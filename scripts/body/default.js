// Read from localstorage and update default choices
function defaultLinkType() {
    const typeChoice = getUrlVars(window.location.href).a || localStorage.linktype || 'link',
          type = document.querySelector(`.link-type li[data-label="${typeChoice}"]`),
          typeInput = document.querySelector('.link-type input');

    type.classList.add('active');
    typeInput.value = typeChoice;
}

function defaultSecurity() {
    const securityChoice = localStorage.security || 'base64',
          security = document.querySelector('dropmenu[data-type="security"]'),
          securityInput = security.querySelector('input'),
          securityOption = security.querySelector(`li[data-option="${securityChoice}"]`);

    security.querySelector('.value').textContent = securityOption.textContent;
    securityInput.value = securityChoice;
    securityOption.classList.add('active');
}

function defaultShortening() {
    const shorteningChoice = localStorage.shortening || 'is.gd',
          shortening = document.querySelector('dropmenu[data-type="shortening"]'),
          shorteningInput = shortening.querySelector('input'),
          shorteningOption = shortening.querySelector(`li[data-option="${shorteningChoice}"]`);

    shortening.querySelector('.value').textContent = shorteningOption.textContent;
    shorteningInput.value = shorteningChoice;
    shorteningOption.classList.add('active');
}

function setDefaults() {
    try {defaultLinkType()} catch {}
    try {defaultSecurity()} catch {}
    try {defaultShortening()} catch {}
}
setDefaults();