var leastInterval = function(tasks, n) {
  let objArr = [] // 构造一个数组对象 存Key 就是字母 value 就是出现了几次
  let i = 0;
  while (i < tasks.length) {
      if (!objArr.length || !objArr.find(x => x.key === tasks[i])) {
          objArr.push({
              key: tasks[i],
              value: 1
          })
      } else {
          let obj = objArr.find(x => x.key === tasks[i]);
          obj.value += 1
      }
      i++;

  }
  let m = 0 // 出现最多的字母的次数
  let num = 0; // 出现最多次的字母有几个
  m = Math.max(...objArr.map(x => x.value));
  num = objArr.filter(x => x.value === m).length;
  let res = (n + 1)*(m - 1) + num;
  let result = Math.max(res, tasks.length);
  return result;
};

let test = ["A","A","A","B","B","B"];
let result = leastInterval(test, 2);
console.log(result);
