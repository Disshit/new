// declare when input field is or isn't empty
function inputCheck() {
    let intext = document.querySelector('form #inlink');
    if (intext.value !== '') {
        intext.closest('form').classList.add('text');
        intext.closest('form').querySelector('.btn-clear').removeAttribute('tabindex');
        intext.closest('form').querySelector('.btn-send').removeAttribute('tabindex');
    } else {
        intext.closest('form').classList.remove('text');
        intext.closest('form').querySelector('.btn-clear').setAttribute('tabindex','-1');
        intext.closest('form').querySelector('.btn-send').setAttribute('tabindex','-1');
    }
}

// listen for input and keydown events
if (window.dataPage === 'home') {
    document.querySelector('form #inlink').addEventListener('input', inputCheck);
    document.querySelector('form #inlink').addEventListener('keydown', inputCheck);
}

// clear input fields upon load/refresh
function clearInput() {
    let intext = document.querySelector('form #inlink');
    intext.value = '';
}
clearInput();
inputCheck();

// listen for click event on clear button
document.querySelector('form .btn-clear').addEventListener('click', () => {
    clearInput();
    // wait for the click transition to finish
    setTimeout(inputCheck, 100);
});
