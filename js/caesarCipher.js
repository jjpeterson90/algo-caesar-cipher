exports.caesarCipher = function(str, cipherNum) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let codedStr = '';

    str.split('').forEach((char,i) => {
        if (alpha.includes(char.toLowerCase())) {
            index = alpha.indexOf(char.toLowerCase());
            index += cipherNum;
            while (index > 26 || index < 0) {
                if (index > 26) index -= 26;
                if (index < 0) index += 26;
            }
            if (isUpperCase(char)) codedStr += alpha[index].toUpperCase();
            else codedStr += alpha[index];
        } else {
            codedStr += char
        }
    })

    function isUpperCase(char) {
        if (char != alpha[alpha.indexOf(char.toLowerCase())]) return true
        return false
    }

    return codedStr

};