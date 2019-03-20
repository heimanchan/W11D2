// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    if(this.length === 0){
      let newNode = new Node(value);
      this.top = newNode;
      this.bottom = newNode;
    }
    let temp = this.top;
    this.top = new Node(value);
    this.top.next = temp;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0){
      return null;
    }

    let temp = this.top;
    if (this.length === 1){
      this.top = null;
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return temp.value;

  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
