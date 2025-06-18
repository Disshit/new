/* URL Scraping */

function getUrlVars(link) {
    let vars = {};
    link.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}