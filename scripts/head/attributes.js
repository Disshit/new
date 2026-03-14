// URL Scraping
function getUrlVars(link) {
    let vars = {};
    link.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// Random number generator
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random string generator
function getRandomString(strlen) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let x = 0; x < parseInt(strlen); x++) {
        result += chars[getRandom(0, chars.length - 1)];
    }

    return result;
}