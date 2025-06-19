// declare when input field is or isn't empty
function inputCheck() {
    let intext = document.querySelector('form input[name="v"]');
    if (intext.value !== '') {
        intext.closest('form').classList.add('text');
    } else {
        intext.closest('form').classList.remove('text');
    }
}

// listen for input and keydown events
document.querySelector('form input[name="v"]').addEventListener('input', inputCheck);
document.querySelector('form input[name="v"]').addEventListener('keydown', inputCheck);

// clear input fields upon load/refresh
function clearInput() {
    let intext = document.querySelector('form input[name="v"]');
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

// submit button on main form
document.querySelector('form .btn-send').addEventListener('click', (e) => {
    e.target.closest('form').submit();
});

// form submit on Enter
document.querySelector('form input[name="v"]').addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        e.target.closest('form').submit();
    }
});