// 一、O(n^3) 暴力破解
var longestPalindrome = function (s) {
  let i = 0,
    j = 0
  let maxLength = 1
  let begin = 0
  while (j < s.length || i < s.length) {
    if (j + 1 - i + 1 > maxLength && isHw(s, i, j + 1)) {
      maxLength = j + 1 - i + 1
      begin = i
    }
    if (j++ == s.length) {
      j = ++i
    }
  }
  return maxLength == 1 ? s[0] : s.substring(begin, begin + maxLength)
}
var isHw = function (str, begin, end) {
  while (begin < end) {
    if (str[begin++] !== str[end--]) return false
  }
  return true
}

// 二、中心扩散 O(n^2)
var longestPalindrome = function (s) {
  let n = 0
  let maxLength = 0
  let begin = 0
  while (n < s.length) {
    let oddLength = getHwLen(s, n, n)
    let evenLength = getHwLen(s, n, n + 1)
    if (Math.max(oddLength, evenLength) > maxLength) {
      maxLength = Math.max(oddLength, evenLength)
      begin = n - Math.floor((maxLength - 1) / 2)
    }
    n++
  }
  return maxLength.length === 0 ? s[0] : s.substring(begin, begin + maxLength)
}

var getHwLen = function (s, left, right) {
  while (left >= 0 && right < s.length) {
    if (s[left--] !== s[right++]) {
      left++
      right--
      break
    }
  }
  return right - left - 1
}

// 三、dp动态规划，空间换时间，暴力枚举的优化 O(n^2)
var longestPalindrome = function (s) {
  return dp(s)
}
var dp = function (s) {
  let begin = 0
  let maxLength = 0
  let arr2 = new Array(s.length).fill(false).map((x) => new Array(s.length).fill(false)) // 特别注意
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] === s[j]) {
        if (j - i <= 2) {
          arr2[i][j] = true
        } else {
          arr2[i][j] = arr2[i + 1][j - 1]
        }
      } else {
        arr2[i][j] = false
      }
      if (arr2[i][j] && j - i + 1 > maxLength) {
        begin = i
        maxLength = j - i + 1
      }
    }
  }
  console.log('dp')
  return maxLength === 0 ? s[0] : s.substring(begin, begin + maxLength)
}

//  结果
let str = 'babaabab'
//  let start = new Date().getTime()
console.time()
console.log('结果', longestPalindrome(str))
//  let end = new Date().getTime()
//  console.log('所用时间', end - start)
console.timeEnd()
