/* Simple character displacement Cypher using random numbers */

const cases = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","`","1","2","3","4","5","6","7","8","9","0","-","=","[","]","\\",";","'",",",".","/","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","!","@","#","$","%","^","&","*","(",")","_","+","{","}","|",":","\"","<",">","?"];

function goIn(arr, displace) {
    const goodIndex = (displace % arr.length + arr.length) % arr.length;
    
    return arr[goodIndex];
}

function getRandom() {
    let min = 10,
        max = 99;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function enCypher(string, displace) {
    let newString = "";

    for (let x = 0; x < string.length; x++) {
        if (cases.includes(string[x])) {
            newString += goIn(cases, cases.indexOf(string[x]) + displace);
        } else {
            newString += string[x];
        }
    }

    return newString;
}

function deCypher(string, displace) {
    let originalString = "";

    for (let x = 0; x < string.length; x++) {
        if (cases.includes(string[x])) {
            originalString += goIn(cases, cases.indexOf(string[x]) - displace);
        } else {
            originalString += string[x];
        }
    }

    return originalString;
}