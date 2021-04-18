var minRemoveToMakeValid = function(s) {
  let stack = [];
  let deleteArr = []
  for (let i = 0; i < s.length; i++) {
      item = s[i];
      if (item == '(') stack.push(i)
      else if (item == ')') {
          if (stack.length) {
              stack.pop()
          } else {
              deleteArr.push(i)
          }
      }
  }
  let arr = stack.concat(deleteArr)
  s = s.split('');
  for (let i= s.length - 1; i >= 0; i--) {
      if (arr.includes(i)) {
          s.splice(i, 1)
      }
  }
  return s.join('')
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
