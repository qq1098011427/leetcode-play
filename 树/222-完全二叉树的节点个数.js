import { createTree } from "./common/数组转树.js";

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let root = createTree(arr);
var countNodes = function (root) {
  if (!root) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
};
console.dir(root, "root");
console.log(countNodes(root), "节点个数");
