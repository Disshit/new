// Detect at what stage of link creation we are in and
// set that value to the html tag

// http://domain/?a=Link&b=asd&c=Base64
// ^ All required values present. abc
//   Offering sharing and shortening settings

function pageType() {
    const site = window.location.href,
          html = document.documentElement;

    html.setAttribute('data-page','home');
    window.dataPage = 'home';

    if (getUrlVars(site).a !== undefined && getUrlVars(site).b !== undefined && getUrlVars(site).c !== undefined) {
        html.setAttribute('data-page','shorten');
        window.dataPage = 'shorten';
    } else if (getUrlVars(site).x !== undefined) {
        html.setAttribute('data-page','shortened');
        window.dataPage = 'shortened';
    }
}
pageType();