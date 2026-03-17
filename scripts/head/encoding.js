/* Security features for hiding link content
 * Further actions needed to produce and deduce link
 */

const encoding = {
    /* Basic Base64 conversion for strings
     * https://stackoverflow.com/a/30106551
     */
    base64: {
        encode: function (string) {
            return btoa(
                encodeURIComponent(string).replace(/%([0-9A-F]{2})/g,
                    function toSolidBytes(match, p1) {
                        return String.fromCharCode('0x' + p1);
                    }
                )
            );
        },
        decode: function (string) {
            return decodeURIComponent(
                atob(string).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join('')
            );
        }
    },
    /* Simple character displacement Cypher using random numbers
     * Does not increase string size
     */
    cypher: {
        cases: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","`","1","2","3","4","5","6","7","8","9","0","-","=","[","]","\\",";","'",",",".","/","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","!","@","#","$","%","^","&","*","(",")","_","+","{","}","|",":","\"","<",">","?"],
        goIn: function (arr, displace) {
            const goodIndex = (displace % arr.length + arr.length) % arr.length;
            
            return arr[goodIndex];
        },
        encode: function (string, displace) {
            let newString = "";

            for (let x = 0; x < String(string).length; x++) {
                if (encoding.cypher.cases.includes(String(string)[x])) {
                    newString += encoding.cypher.goIn(encoding.cypher.cases, encoding.cypher.cases.indexOf(String(string)[x]) + displace);
                } else {
                    newString += String(string)[x];
                }
            }

            return newString;
        },
        decode: function (string, displace) {
            let originalString = "";

            for (let x = 0; x < String(string).length; x++) {
                if (encoding.cypher.cases.includes(String(string)[x])) {
                    originalString += encoding.cypher.goIn(encoding.cypher.cases, encoding.cypher.cases.indexOf(String(string)[x]) - displace);
                } else {
                    originalString += String(string)[x];
                }
            }

            return originalString;
        }
    },
    /* Deal with Pako and return strings
     * Better compression than LZW, shorter string
     */
    pako: {
        encode: function (string) {
            if (!pako.deflate) {return;}
            return String(pako.deflate(String(string), {level: 9}));
        },
        decode: function (string) {
            if (!pako.inflate) {return;}
            let inflated = pako.inflate(String(string).split(','));
            return new TextDecoder().decode(inflated);
        }
    },
    /* Utilize simple crypto and return strings
     * It's the encoding you deserve, not the one you need
     */
    scrypto: {
        encode: function (key, string) {
            const sc = new SimpleCrypto(key);
            return sc.encrypt(string);
        },
        decode: function (key, estring) {
            const sc = new SimpleCrypto(key);
            return sc.decrypt(estring);
        }
    }
};