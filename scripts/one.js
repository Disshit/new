// declare when input field is or isn't empty
function inputCheck() {
    let intext = document.querySelector('form input[type="text"]');
    if (intext.value !== '') {
        intext.closest('form').classList.add('text');
    } else {
        intext.closest('form').classList.remove('text');
    }
}

// listen for input and keydown events
document.querySelector('form input[type="text"]').addEventListener('input', inputCheck);
document.querySelector('form input[type="text"]').addEventListener('keydown', inputCheck);

// clear input fields upon load/refresh
function clearInput() {
    let intext = document.querySelector('form input[type="text"]');
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

function inputCheck(){let e=document.querySelector('form input[type="text"]');""!==e.value?e.closest("form").classList.add("text"):e.closest("form").classList.remove("text")}function clearInput(){let e=document.querySelector('form input[type="text"]');e.value=""}document.querySelector('form input[type="text"]').addEventListener("input",inputCheck),document.querySelector('form input[type="text"]').addEventListener("keydown",inputCheck),clearInput(),inputCheck(),document.querySelector("form .btn-clear").addEventListener("click",()=>{clearInput(),setTimeout(inputCheck,100)});

// Toggle the menu open and close
function menuClick() {
    document.body.classList.toggle('open-menu');
}

// Listen for menu button click
document.querySelector('header .btn-menu').addEventListener('click', menuClick);

function menuClick(){document.body.classList.toggle("open-menu")}document.querySelector("header .btn-menu").addEventListener("click",menuClick);

