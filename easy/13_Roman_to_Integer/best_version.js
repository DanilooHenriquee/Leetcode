symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    value = 0;
    for(let i = 0; i < s.length; i+=1){
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    return value
};

console.log(romanToInt('MCMXCIV'));


/**
 * 1000 / 100 / 1000 / 10 / 100 / 1 / 5
 * 
 * 1000 < 100 : false, value = 0 + 1000 = 1000;
 * 100 < 1000 : true, value = 1000 - 100 = 900;
 * 1000 < 10 : false, value = 900 + 1000 = 1900;
 * 10 < 100: true, value = 1900 - 10 = 1890;
 * 100 < 1: false, value = 900 + 100 = 1990;
 * 1 < 5: true, value = 1990 - 1 = 1989;
 * 5 < 0: false, value = 1989 + 5 = 1994;
 */
