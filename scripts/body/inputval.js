// Link hasn't been shortened yet
// turn the input tag to readonly

// https://disshit.github.io/get/?r+link
// https://disshit.github.io/get/?b+link
// https://disshit.github.io/get/?c49+link
// https://disshit.github.io/get/?pYzt2+link
// https://disshit.github.io/get/?r+link+type

// https://disshit.github.io/?a=link&b=asd&c=base64
// https://disshit.github.io/?a=link&b=asd&c=cypher&d=49

function updateInputField1() {
    if (window.dataPage !== 'shorten') {return;}

    const inlink = document.querySelector('form #inlink');
    const newtab = document.querySelector('form .btn-newtab');
    const site = window.location.href;
    const a = getUrlVars(site).a;
    const b = decodeURIComponent(getUrlVars(site).b);
    const c = getUrlVars(site).c;
    const d = getUrlVars(site).d || '';

    let link;

    if (c === 'raw') {
        link = `${window.location.origin}/get/?${c[0]+d}+${b}${returnType(a)}`;
    } else {
        link = `${window.location.origin}/get/?${c[0]+d}+${encoding[c].encode(b, d)}${returnType(a)}`;
    }

    inlink.value = link;
    newtab.href = link;
    newtab.setAttribute('target','_about');
    inlink.setAttribute('readonly','');
}
updateInputField1();

function updateInputField2() {
    if (window.dataPage !== 'shortened') {return;}

    const inlink = document.querySelector('form #inlink');
    const newtab = document.querySelector('form .btn-newtab');
    const site = window.location.href;
    const x = decodeURIComponent(getUrlVars(site).x);

    const link = `https://${x}`;

    inlink.value = link;
    newtab.href = link;
    newtab.setAttribute('target','_about');
    inlink.setAttribute('readonly','');
}
updateInputField2();

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