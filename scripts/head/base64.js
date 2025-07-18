/* Basic Base64 conversion for strings
 * https://stackoverflow.com/a/30106551
 */

const base64 = {
    "encode": function (string) {
        return btoa(
            encodeURIComponent(string).replace(/%([0-9A-F]{2})/g,
                function toSolidBytes(match, p1) {
                    return String.fromCharCode('0x' + p1);
                }
            )
        );
    },
    "decode": function (string) {
        return decodeURIComponent(
            atob(string).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join('')
        );
    }
};