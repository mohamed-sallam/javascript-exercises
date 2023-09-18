const removeFromArray = function(haystack, ...needles) {
    for (const needle of needles)
        for (let i = 0; i < haystack.length; ++i)
            if (haystack[i] === needle) 
                haystack.splice(i, 1);

    return haystack;
};

// Do not edit below this line
module.exports = removeFromArray;
