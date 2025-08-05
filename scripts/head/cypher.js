/* Simple character displacement Cypher using random numbers
 * Does not increase string size
 */

const cypher = {
    cases: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","`","1","2","3","4","5","6","7","8","9","0","-","=","[","]","\\",";","'",",",".","/","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","!","@","#","$","%","^","&","*","(",")","_","+","{","}","|",":","\"","<",">","?"],
    goIn: function (arr, displace) {
        const goodIndex = (displace % arr.length + arr.length) % arr.length;
        
        return arr[goodIndex];
    },
    encode: function (string, displace) {
        let newString = "";

        for (let x = 0; x < String(string).length; x++) {
            if (cypher.cases.includes(String(string)[x])) {
                newString += cypher.goIn(cypher.cases, cypher.cases.indexOf(String(string)[x]) + displace);
            } else {
                newString += String(string)[x];
            }
        }

        return newString;
    },
    decode: function (string, displace) {
        let originalString = "";

        for (let x = 0; x < String(string).length; x++) {
            if (cypher.cases.includes(String(string)[x])) {
                originalString += cypher.goIn(cypher.cases, cypher.cases.indexOf(String(string)[x]) - displace);
            } else {
                originalString += String(string)[x];
            }
        }

        return originalString;
    }
};