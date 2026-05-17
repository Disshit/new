// @ts-check

// declare when input field is or isn't empty
function inputCheck() {
    /** @type {HTMLInputElement | null} */
    const intext = document.querySelector('form #inlink');
    if (intext?.value !== '') {
        intext?.closest('form')?.classList.add('text');
        intext?.closest('form')?.querySelector('.btn-clear')?.removeAttribute('tabindex');
        intext?.closest('form')?.querySelector('.btn-send')?.removeAttribute('tabindex');
    } else {
        intext?.closest('form')?.classList.remove('text');
        intext?.closest('form')?.querySelector('.btn-clear')?.setAttribute('tabindex','-1');
        intext?.closest('form')?.querySelector('.btn-send')?.setAttribute('tabindex','-1');
    }
}

// listen for input and keydown events
if (/** @type {any} */ (window).dataPage === 'home') {
    document.querySelector('form #inlink')?.addEventListener('input', inputCheck);
    document.querySelector('form #inlink')?.addEventListener('keydown', inputCheck);
}

// clear input fields upon load/refresh
function clearInput() {
    /** @type {HTMLInputElement | null} */
    const intext = document.querySelector('form #inlink');
    if (intext) {intext.value = '';}
}
clearInput();
inputCheck();

// listen for click event on clear button
document.querySelector('form .btn-clear')?.addEventListener('click', () => {
    clearInput();
    // wait for the click transition to finish
    setTimeout(inputCheck, 100);
});

// move label to top when input is filled or focused within (only for settings)
/** @param {HTMLInputElement | null} key */
function moveLabel(key) {
    if (!key?.tagName.match(/input/i)) {return;}
    
    if (key.value === '') {
        key.classList.remove('keep-above');
    } else {
        key.classList.add('keep-above');
    }
}

document.querySelector('menu')?.addEventListener('input', (e) => {
    moveLabel(/** @type {any} */ (e.target));
});
document.querySelector('menu')?.addEventListener('keydown', (e) => {
    moveLabel(/** @type {any} */ (e.target));
});
(() => {
    // autorun once on refresh
    const inputs = document.querySelectorAll('menu input');

    for (let x = 0; x < inputs.length; x++) {
        moveLabel(/** @type {HTMLInputElement} */ (inputs[x]));
    }
})();
