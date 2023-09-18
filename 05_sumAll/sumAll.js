const sumAll = function(b, e) {
    if (typeof(b) !== 'number' || 
        typeof(e) !== 'number' || 
        e < 0 ||
        b < 0)
        return 'ERROR';
    let sum = 0;
    if (b > e) {
        let tmp = b;
        b = e;
        e = tmp;
    }
    for (let i = b; i <= e; ++i)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
