/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var sum = 0; 
  var result = new ListNode(-1);
  var dummy = result;  
    
  while (l1 || l2 || sum){
    let val1 = l1 ? l1.val:0;
    let val2 = l2 ? l2.val:0;
    
    let nextD = (val1 + val2 + sum) % 10; 
    result.next = new ListNode(nextD);
    result = result.next;
      
    sum = Math.floor((val1 + val2 + sum)/10);
      
    l1 = l1?l1.next:null;
    l2 = l2?l2.next:null;
  }
    return dummy.next
}

