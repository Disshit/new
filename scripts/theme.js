/* Light theme should be updated later. Delete this when done. */

const darkTheme = `
    html, html[data-dark="default"] {
        --accent-color: #ec9918;
        --accent-lite: #f2d230;
        --accent-deep: #e56000;
        --text-color: #f8fafc;
        --border-color: #282828;
        --bg-deep: #161616;
        --bg-mid: #1c1c1c;
        --bg-lite: #333333;
    }
`;

const lightTheme = `
    html, html[data-light="default"] {
        --accent-color: #ec9918;
        --accent-lite: #f2d230;
        --accent-deep: #e56000;
        --text-color: #080a0c;
        --bg-deep: #ffffff;
        --bg-mid: #f9f9f9;
        --bg-lite: #f2f2f3;
    }
`;

// Add Colors to CSS
function addColors() {
    let nightCSS = document.getElementById('nightCSS'),
        dayCSS = document.getElementById('dayCSS');
    
    nightCSS.textContent = darkTheme.replace(/\n/g,'').replace(/[\t\s]/g,'');
    dayCSS.textContent = lightTheme.replace(/\n/g,'').replace(/[\t\s]/g,'');
}

// Switch Themes
function switchColors(key) {
    let nightCSS = document.getElementById('nightCSS'),
        dayCSS = document.getElementById('dayCSS');

    let mediaNight = '(prefers-color-scheme: no-preference), (prefers-color-scheme: dark)',
        mediaDay = '(prefers-color-scheme: light)',
        typeEnabled = 'text/css',
        typeDisabled = 'null';

    if (key === 'day') {
        nightCSS.setAttribute('type',typeDisabled);
        dayCSS.setAttribute('type',typeEnabled);
        nightCSS.removeAttribute('media');
        dayCSS.removeAttribute('media');
    } else if (key === 'night') {
        nightCSS.setAttribute('type',typeEnabled);
        dayCSS.setAttribute('type',typeDisabled);
        nightCSS.removeAttribute('media');
        dayCSS.removeAttribute('media');
    } else {
        nightCSS.setAttribute('type',typeEnabled);
        dayCSS.setAttribute('type',typeEnabled);
        nightCSS.setAttribute('media',mediaNight);
        dayCSS.setAttribute('media',mediaDay);
    }
}

addColors();
switchColors(localStorage.switchState);