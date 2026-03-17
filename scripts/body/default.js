// Read from localstorage and update default choices
function defaultLinkType() {
    const typeChoice = getUrlVars(window.location.href).a || localStorage.linktype || 'link',
          type = document.querySelector(`.link-type li[data-label="${typeChoice}"]`),
          typeInput = document.querySelector('.link-type input');

    type.classList.add('active');
    typeInput.value = typeChoice;
}

function defaultEncoding() {
    const encodingChoice = localStorage.encoding || 'base64',
          encodingNode = document.querySelector('dropmenu[data-type="encoding"]'),
          encodingInput = encodingNode.querySelector('input'),
          encodingOption = encodingNode.querySelector(`li[data-option="${encodingChoice}"]`);

    encodingNode.querySelector('.value').textContent = encodingOption.textContent;
    encodingInput.value = encodingChoice;
    encodingOption.classList.add('active');
}

function defaultShortening() {
    const shorteningChoice = localStorage.shortening || 'isgd',
          shorteningNode = document.querySelector('dropmenu[data-type="shortening"]'),
          shorteningInput = shorteningNode.querySelector('input'),
          shorteningOption = shorteningNode.querySelector(`li[data-option="${shorteningChoice}"]`);

    shorteningNode.querySelector('.value').textContent = shorteningOption.textContent;
    shorteningInput.value = shorteningChoice;
    shorteningOption.classList.add('active');
}

function setDefaults() {
    try {defaultLinkType()} catch {}
    try {defaultEncoding()} catch {}
    try {defaultShortening()} catch {}
}
setDefaults();