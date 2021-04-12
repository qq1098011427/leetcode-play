// 一、O(n^3) 暴力破解
var longestPalindrome = function(s) {
    let i = 0, j = 0;
    let maxLength = 1;
    let begin = 0;
    while (j < s.length || i < s.length) {
        if ((j + 1 - i + 1) > maxLength && isHw(s, i, j + 1)) {
            maxLength = j + 1 - i + 1
            begin = i
        }
        if (j++ == s.length) {
            j = ++i;
        }
    }
    return maxLength == 1 ? s[0] : s.substring(begin, begin + maxLength)
 };
 var isHw = function(str, begin, end) {
    while (begin < end) {
        if (str[begin++] !== str[end--]) return false
    }
    return true
 };
 // test
 let str = 'babaabab'
//  let start = new Date().getTime()
    console.time()
 console.log('结果', longestPalindrome(str))
//  let end = new Date().getTime()
//  console.log('所用时间', end - start)
    console.timeEnd()