// Implementing a single linked list class

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(node) {
    // if head is null make it the head, if not, keep traversing through the LL until you reach a null

    if (this.head === null) {
      this.head = node;
    } else {
      const curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }

      curr.next = node;
    }
  }

  prepend(node) {
    const tmp = this.head;
    node.next = tmp;
    this.head = node;
  }

  insert(node, index) {
    if (this.head === null) {
      this.head = node;
    } else {
      let i = 0;
      let curr = this.head;
      while (i < index - 1) {
        if (curr.next !== null) {
          curr = curr.next;
        }
        i++;
      }

      node.next = curr.next;
      curr.next = node;
    }
  }

	delete(data) {
		if (!this.head) return;

		if (this.head.data === data) {
			this.head = this.head.next;
			return;
		}

		let curr = this.head;
		while (curr.next !== null) {
			if (curr.next.data === data) {
				curr.next = curr.next.next;
				break;
			}
			curr = curr.next;
		}
	}

	search(data) {
		if (!this.head) return;
		const curr = this.head;
		while(curr !== null) {
			if (curr.data === data) {
				return true;
			}
			curr = curr.next;
		}
		return false;
	}

	print() {
		let curr = this.head;
		console.log(curr === this.head)
		while(curr !== null) {
			console.log(curr.data);
			curr = curr.next;
		}
	}

}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

const LL = new LinkedList();
LL.append(node1);
LL.append(node2);
LL.prepend(node3);
LL.insert(node4, 2);
LL.print();
LL.delete(3);
LL.print();