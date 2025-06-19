/* Deal with Pako and return strings */

function enPako(string) {
    if (!pako.deflate) {return;}
    return String(pako.deflate(String(string), {level: 9}));
}

function dePako(string) {
    if (!pako.inflate) {return;}
    let inflated = pako.inflate(String(string).split(','));
    return new TextDecoder().decode(inflated);
}