/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const map = {};
    
    if (s.length != t.length) return false;
    
    for(let i=0; i<s.length; ++i) {
        const c = s[i];
        if (map[c] == undefined) map[c] = 1;
        else ++map[c];
    }
    
    for(let i=0; i<t.length; ++i) {
        const c = t[i];
        if (map[c] == undefined) return false;
        else if (map[c] == 1) delete map[c];
        else --map[c];
    }
    
    return true;
};