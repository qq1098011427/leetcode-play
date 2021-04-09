// 时间复杂度 n^3 猜测

var longestPalindrome = function(s) {
    let i = 0, j = 0;
    let maxstr = ''
    while (j < s.length || i < s.length) {
        if (isHw(s.slice(i, j + 1)) && s.slice(i, j + 1).length >= maxstr.length) {
            maxstr = s.slice(i, j + 1)
        }
        if (j++ == s.length) {
            j = ++i;
        }
    }
    return maxstr.length == 0 ? s[0] : maxstr
 };
 
 var isHw = function(stack) {
    let is = true
    let i = 0;
    let j = stack.length - 1
    while (i <= j) {
        if (stack[i++] !== stack[j--]) return false
    }
    return is
 };
 let str = 'babaabab'
 let start = new Date().getTime()
 console.log('结果', longestPalindrome(str))
 let end = new Date().getTime()
 console.log('所用时间', end - start)