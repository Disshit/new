/* URL Scraping */

function getUrlVars(link) {
    let vars = {};
    link.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

/* Random number generator */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}