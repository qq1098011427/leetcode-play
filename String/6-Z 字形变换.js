// 思路: 其实z字型,只不过是 让数组下标 i 遍历numrows - 1次，然后下标k遍历 {1 ,  numRows - 2} 次
var convert = function (s, numRows) {
    let k = numRows - 2;
    let arr = new Array(numRows).fill('')
    let i = 0;
    for (ch of s) {
        if (i < numRows) arr[i++] += ch
        else {
            if (k >= 1) arr[k--] += ch
            else {
                i = 0;
                k = numRows - 2;
                arr[i++] += ch
            }
        }
    }
    return arr.join('')
};