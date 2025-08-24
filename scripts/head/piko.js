/* Deal with Pako and return strings
 * Called piko as pako is taken by the lib
 * Better compression than LZW, shorter string
 */

const piko = {
    encode: function (string) {
        if (!pako.deflate) {return;}
        return String(pako.deflate(String(string), {level: 9}));
    },
    decode: function (string) {
        if (!pako.inflate) {return;}
        let inflated = pako.inflate(String(string).split(','));
        return new TextDecoder().decode(inflated);
    }
};