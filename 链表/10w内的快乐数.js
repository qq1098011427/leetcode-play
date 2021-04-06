// 10万以内的快乐数
var isHappy = function(n) {
  if (n ==  1) return true;
  let p = n; let c = getNext(n);
  while(p != c) {
      p = getNext(p);
      c = getNext(getNext(c));
      if (c == 1) {
          return true;
      }
  }
  return false;
};

var getNext = function(n) {
  if (n ==  1) return 1;
  let num = 0;
  while(n) {
    num += (n % 10) * (n % 10);
    n = Math.floor(n/10);
  }
  return num;
};

var main = () => {
  let num = 0;
  let n = 100000;
  while (n) {
    if (isHappy(n)) {
      num++;
    };
    n--;
  }
  return num;
}

// main();
console.log(main());