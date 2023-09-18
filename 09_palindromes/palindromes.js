function isAlphaNum(s) {
    return s.match(/^[0-9a-zA-Z]+$/);
}

const palindromes = function (s) {
    for (let i = 0, j = s.length - 1; i < j; ++i, --j) {
        while (!isAlphaNum(s.charAt(i))) 
            ++i;
        while (!isAlphaNum(s.charAt(j))) 
            --j;
        
        if (s.charAt(i).toUpperCase() !== s.charAt(j).toUpperCase())
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
