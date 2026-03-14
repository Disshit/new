// Update security value based on selected security level
function setSecurityValue() {
    if (window.dataPage !== 'home') {return;}

    let security = document.querySelector('form dropmenu[data-type="security"]'),
        securityChoice = security.querySelector('.op-list li.active').getAttribute('data-option'),
        securityRandom = security.querySelector('input.random');

    securityRandom.setAttribute('name','d');

    if (securityChoice === 'cypher') {
        securityRandom.value = getRandom(0,93);
    } else if (securityChoice === 'scrypto') {
        securityRandom.value = getRandomString(4);
    } else {
        securityRandom.removeAttribute('name');
    }
}
setSecurityValue();