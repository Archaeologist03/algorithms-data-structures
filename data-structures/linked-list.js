class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      //1. iteration(for second added item) set both, tail and head .next to newNode(coz obj = refrc type)
      //2. After second item added, tail is not anymore pointing at the same item as head. So when we change tail.next we're changing only current tail(node added in previous push is current tail). 
      this.tail.next = newNode;
      console.log("FROM TAIL --- nextAdd", this.tail)
      console.log("FROM HEAD --- nextAdd", this.head)

      // Points tail to be newly added node. So it does not point to head anymore. So any changes to tail wont affect head.(or any node added 2 steps)
      // head/node1 = 1, -> node2 = 2, -> node3 = 3, -> TAI/node4 = 4.
      // In this case when new node was about to be added only change occurs in tail/node4.
      // It changes node4.next to newNode. So node.next = {5, null}, but (node4.val still = 4), and then with this.tail = newNode, we change tails reference to point to newNode. After that tail/node5 is = {5, null}, and node4 is = {4, node5} 
      //  
      this.tail = newNode;
      console.log("FROM TAIL --- refrcChange", this.tail);
      console.log("FROM HEAD --- refrcChange", this.head)

      // Essentially with every new push it adds another next to previous nexts. So it looks like: 
      // head: 1, head.next: 2, head.next.next: 3... 
    }
    this.length++;
    return this;
  }


  unshift(val) {
    let newNode = new Node(val);
    let prevHead = this.head;
    this.head = newNode;
    this.head.next = prevHead;
    this.length++;
    return this;
  }

  insert(index, val) {
    let newNode = new Node(val);
    let i = 0;
    let currNode = this.head;
    while(currNode.next !== this.tail) {
    if (i === index) {
      
      // currNode. = newNode;
      // currNode.
    }
    console.log(i, currNode.val)

      i++;
    currNode = currNode.next;
    }
  }
}

let newList = new SinglyLinkedList();


newList.push(1);
newList.push(2)
newList.push(3)
newList.push(4)
newList.unshift(33)
newList.unshift(22)
newList.unshift(11)
newList.insert()




















// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     }
//     this.tail = this.head;
//     this.length = 1;
//   }



//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   prepend(value) {
//     const prevHead = {...this.head};
//     this.head = {
//       value: value,
//       next: prevHead,
//     }
//     this.length++;
//     return this;
//   }

// }

// const myLinkedList = new LinkedList(10);

// myLinkedList.append(11);
// myLinkedList.append(15);
// myLinkedList.prepend(1);
