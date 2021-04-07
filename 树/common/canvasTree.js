import  { createTree } from './数组转树.js'
    //  const root = {
    //   val: 'A',
    //   label: '100',
    //   left: {
    //     val: 'B',
    //     label: '70',
    //     left: {
    //       val: 'D'
    //       label: '40',
    //       left: {
    //         val: 'H',
    //         label: '20',
    //         left: null,
    //         right: null
    //       },
    //       right: {
    //         val: 'I',
    //         label: '20',
    //         left: null,
    //         right: null
    //       }
    //     },
    //     right: {
    //       val: 'E',
    //       label: '30',
    //       left: null,
    //       right: null
    //     }
    //   },
    //   right: {
    //     val: 'C',
    //     label: '30',
    //     left: {
    //       val: 'F',
    //       label: '15',
    //       left: null,
    //       right: null
    //     },
    //     right: {
    //       val: 'G',
    //       label: '15',
    //       left: null,
    //       right: null
    //     }
    //   }
    // }
    let arr = new Array(10).fill(0).map((x, index) => index)
    let root = createTree(arr)
    const canvas = document.getElementById('canvas')
    const tooltip = document.getElementById('tooltip')
    const ctx = canvas.getContext('2d')

    const deep = getDeepOfTree(root)
    let distance = 1
    for (let i = 2; i < deep; i++) {
      distance = (distance + 2) * 2 - 2
    }
    const unit = 1000 / (Math.pow(2, deep - 1) * 4 + 8)
    canvas.setAttribute('height', deep * unit * 4)

    const rootX = (1000 - unit) / 2
    const rootY = unit
    let pathArr = []
    preOrderTraverse(root, rootX, rootY, distance)

    // 模拟鼠标hover效果
    canvas.addEventListener('mousemove', (e) => {
      let i = 0
      while (i < pathArr.length) {
        ctx.beginPath()
        ctx.rect(pathArr[i].x, pathArr[i].y, unit, unit)
        if (ctx.isPointInPath(e.offsetX, e.offsetY)) {
          canvas.style.cursor = 'pointer'
          tooltip.innerHTML = `<span style="font-size:14px;color:red;">${pathArr[i].label}</span>`
          tooltip.style.top = `${pathArr[i].y + unit + 4}px`
          tooltip.style.left = `${pathArr[i].x + unit}px`
          break
        } else {
          i++
        }
      }
      if (i === pathArr.length) {
        canvas.style.cursor = 'default'
        tooltip.innerHTML = ``
      }
    })
    
    // 得到该树的高度
    function getDeepOfTree(root) {
      if (!root) {
        return 0
      }
      let left = getDeepOfTree(root.left)
      let right = getDeepOfTree(root.right)
      return (left > right) ? left + 1 : right + 1
    }

    function preOrderTraverse(root, x, y, distance) {
      pathArr.push({
        x,
        y,
        value: root.val,
        label: root.label
      })
      drawRect(root.val, x, y) // 绘制节点
      if (root.left) {
        drawLeftLine(x, y + unit, distance)
        preOrderTraverse(root.left, x - (distance + 1) * unit, y + 3 * unit, distance / 2 - 1)
      }
      if (root.right) {
        drawRightLine(x + unit, y + unit, distance)
        preOrderTraverse(root.right, x + (distance + 1) * unit, y + 3 * unit, distance / 2 - 1)
      }
    }

    function drawRect(text, x, y) {
      ctx.fillRect(x, y, unit, unit)
      ctx.font = "14px serif"
      ctx.fillText(text, x + unit, y + unit)
    }

    function drawLeftLine (x, y, distance) {
      ctx.moveTo(x, y)
      ctx.lineTo(x - distance * unit, y + 2 * unit)
      ctx.stroke()
    }

    function drawRightLine (x, y, distance) {
      ctx.moveTo(x, y)
      ctx.lineTo(x + distance * unit, y + 2 * unit)
      ctx.stroke()
    }