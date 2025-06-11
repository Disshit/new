/* Basic Base64 conversion for strings */
// https://stackoverflow.com/a/30106551

function enCode(str) {
    return btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
            }
        )
    );
}

function deCode(str) {
    return decodeURIComponent(
        atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join('')
    );
}