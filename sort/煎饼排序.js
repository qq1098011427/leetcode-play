var pancakeSort = function (arr) {
  let k = arr.length - 1
  let newArr = []
  while (k) {
    let i = k
    let max = arr[i]
    while (~i) {
      max = arr[i] > max ? arr[i] : max
      i = i - 1
    }
    let index = arr.findIndex((x) => x === max) // 找到最大值的下标
    if (index !== 0) {
      newArr.push(index + 1)
      for (let i = 0; i <= Math.floor(index / 2); i++) {
        // 煎饼翻转最大数到第一位
        let t = arr[i]
        arr[i] = arr[index - i]
        arr[index - i] = t
      }
    }

    let wuxu = false

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        wuxu = true
      }
    }
    if (wuxu) {
      for (let i = 0; i <= Math.floor(k / 2); i++) {
        // 煎饼翻转最大数排到后面
        let t = arr[i]
        arr[i] = arr[k - i]
        arr[k - i] = t
      }
      newArr.push(k + 1)
    }
    k = k - 1
  }
  return newArr
}
let r = [9, 8, 4, 1, 3, 2, 6, 5, 7]
console.log('煎饼排序后：', pancakeSort(r))
