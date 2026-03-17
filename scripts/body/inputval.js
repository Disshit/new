// Link hasn't been shortened yet
// turn the input tag to readonly

// https://disshit.github.io/get/?r+link
// https://disshit.github.io/get/?b+link
// https://disshit.github.io/get/?c49+link
// https://disshit.github.io/get/?pYzt2+link
// https://disshit.github.io/get/?r+link+type

// https://disshit.github.io/?a=link&b=asd&c=base64
// https://disshit.github.io/?a=link&b=asd&c=cypher&d=49

function updateInputField() {
    if (window.dataPage !== 'shorten') {return;}

    const inlink = document.querySelector('form #inlink'),
          newtab = document.querySelector('form .btn-newtab'),
          site = window.location.href,
          a = getUrlVars(site).a,
          b = getUrlVars(site).b,
          c = getUrlVars(site).c,
          d = getUrlVars(site).d || '';

    const link = `${window.location.origin}/get/?${c[0]+d}+${encoding[c].encode(b, d)}${returnType(a)}`;

    inlink.value = link;
    newtab.href = link;
    newtab.setAttribute('target','_about');
    inlink.setAttribute('readonly','');
}
updateInputField();

function returnType(a) {
    if (a === 'link') {return '';}

    const matchList = {
        "magnet": "tm",
        "gdrive": "gd",
        "download": "dl"
    };

    if (matchList[a]) {
        return '+' + matchList[a];
    }

    return undefined;
}