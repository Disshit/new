// Link hasn't been shortened yet
// turn the input tag to readonly

function updateInputField() {
    if (window.dataPage !== 'shorten') {return;}

    const inlink = document.querySelector('form #inlink'),
          newtab = document.querySelector('form .btn-newtab');

    inlink.value = getUrlVars(window.location.href).b;
    newtab.href = getUrlVars(window.location.href).b;
    newtab.setAttribute('target','_about');
    inlink.setAttribute('readonly','');
}
updateInputField();