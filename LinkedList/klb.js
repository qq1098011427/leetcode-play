function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
let lb1 = new ListNode(1, 0)
let lb2 = new ListNode(2, 0)
let lb3 = new ListNode(2, 0)
let lb4 = new ListNode(4, 0)
let lb5 = new ListNode(5, 0)
lb1.next = lb2
lb2.next = lb3
lb3.next = lb4
lb4.next = lb5
lb5.next = null
console.log(lb1, '链表')

var deleteDuplicates = function (head) {
  if (!head) return null
  let xuni = new ListNode(-1, head),
    cur = head,
    pre = xuni

  while (cur.next) {
    if (pre.next.val != cur.next.val) {
      cur = cur.next
      pre = pre.next
    } else {
      pre.next = cur.next
      cur = cur.next
    }
  }
  return xuni.next
}
console.log(deleteDuplicates(lb1), '删除后')
