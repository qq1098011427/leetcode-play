function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function createTree(arr) {
  let index = 1
  let root = new TreeNode(arr[index])
  let head = root
  let recursion = (arr, root, index) => {
    if (arr[index * 2]) {
      // 左子树数据存在
      let node = new TreeNode(arr[index * 2])
      root.left = node
      recursion(arr, root.left, index * 2)
    }
    if (arr[index * 2 + 1]) {
      // 左子树数据存在
      let node = new TreeNode(arr[index * 2 + 1])
      root.right = node
      recursion(arr, root.right, index * 2 + 1)
    }
  }
  recursion(arr, root, index)
  return head
}

export { createTree }
