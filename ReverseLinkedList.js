let head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

/* Function to reverse the linked list */
function reverse(head) {
  let [prev, curr, next] = [null, head, null];
  while (curr) {
    /* Time O(N) */
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }
  return prev;
}

// prints content of linked list
function printList(head) {
  let curr = head;
  while (curr != null) {
    console.log(curr.data + " ");
    curr = curr.next;
  }
}

// Driver Code

head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);

console.log("Given linked list");
printList(head);
head = reverse(head);
console.log("Reversed linked list");
printList(head);
