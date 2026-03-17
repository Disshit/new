// Update encoding value based on selected encoding level
function setEncodingValue() {
    if (window.dataPage !== 'home') {return;}

    let encodingNode = document.querySelector('form dropmenu[data-type="encoding"]'),
        encodingChoice = encodingNode.querySelector('.op-list li.active').getAttribute('data-option'),
        encodingRandom = encodingNode.querySelector('input.random');

    encodingRandom.setAttribute('name','d');

    if (encodingChoice === 'cypher') {
        encodingRandom.value = getRandom(0,93);
    } else if (encodingChoice === 'scrypto') {
        encodingRandom.value = getRandomString(4);
    } else {
        encodingRandom.removeAttribute('name');
    }
}
setEncodingValue();