/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var numMatchingSubseq = function(s, words) {
    let ans = 0;
    const dic = {};

    for(let i=0; i< s.length; ++i) {
        const c = s[i];
        if (dic[c] == undefined) dic[c] = [i];
        else dic[c].push(i);
    }

    for(let i=0; i<words.length; ++i) {
        const target = words[i];
        let success = true;
        let prev = -1;
        for (let j=0; (j<target.length) && success; ++j) {
            const c =target[j];
            if (dic[c] == undefined) {
                success = false;
                break;
            }
            
            let find = false;
            for(let k=0; (k<dic[c].length) && !find; ++k) {
                if (prev < dic[c][k] ) {
                    prev = dic[c][k];
                    find = true;
                }
            }
            if (!find) success = false;
        }

        if (success) ++ans;
    }

    return ans;
};

console.log(numMatchingSubseq("abcde",  ["a","bb","acd","ace"])); // 3

console.log(numMatchingSubseq("dsahjpjauf",  ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"])); // 2