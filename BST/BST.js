class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

class BST {
  constructor(root) {
    this.root = root;
  }

  insert(node) {
    const ins = (root, node) => {
      if (root === null) {
        return node;
      }

      if (node.val < root.val) {
        root.left = ins(root.left, node);
      } else {
        root.right = ins(root.right, node);
      }

      return root;
    };
    ins(this.root, node);
  }

  remove(val) {
    // traverse until you find the matching node

    const rm = (root, val) => {
      console.log("here");
      if (root.val === val) {
        // check if it has any children first
        if (root.left === null && root.right === null) {
          root = null;
          return root;
        }

        if (root.left === null) {
          root = root.right;
          return root;
        }
        if (root.right === null) {
          root = root.left;
          return root;
        }

        // case when has two chilren?
      } else if (val < root.val) {
        root.left = rm(root.left, val);
      } else {
        root.right = rm(root.right, val);
      }

      return root;
    };
    rm(this.root, val);
  }

  // Traverses nodes in order from smallest to largest
  printInOrder() {
    const print = (node) => {
      if (node === null) return;
      print(node.left);
      console.log(node.val);
      print(node.right);
    };
    print(this.root);
  }

  // Traverses nodes

  printPreOrder() {
    const print = (node) => {
      if (node === null) return;
      console.log(node.val);
      print(node.left);
      print(node.right);
    };

    print(this.root);
  }

  printPostOrder() {
    const print = (node) => {
      if (node === null) return;
      print(node.left);
      print(node.right);
      console.log(node.val);
    };

    print(this.root);
  }

  search(val) {
    const s = (root, val) => {
      if (root === null) return null;
      if (root.val === val) return root;
      if (val < root.val) {
        root = s(root.left, val);
      } else {
        root = s(root.right, val);
      }
      return root;
    };
    const node = s(this.root, val);
    console.log("node", node);
  }

  minimum() {
    const min = (root) => {
      if (root.left === null) return root;
      root = min(root.left);
      return root;
    };
    console.log(min(this.root));
  }
  maximum() {
    const max = (root) => {
      if (root.right === null) return root;
      root = max(root.right);
      return root;
    };
    console.log(max(this.root));
  }

  lowestCommonAncestor(p, q) {
    // concept is.. keep traversing, if both p and q are less than root, go to the left, if they are both greater than root, then go right.
    // if at any point these two conditions are false, that means that either p or q matches the root and therefore that is the lowest common ancestor
    const low = (root) => {
      while (root) {
        if (p.val < root.val && q.val < root.val) {
          root = root.left;
        } else if (p.val > root.val && q.val > root.val) {
          root = root.right;
        } else {
          return root;
        }
      }
    };
    const min = low(this.root);
    return min;
  }

  isBalanced() {
    // split tree into left and right side? count height of each?
    const height = (root) => {
      if (root === null) return 0;

      let leftHeight = height(root.left);
      let rightHeight = height(root.right);

      return Math.max(leftHeight, rightHeight) + 1;
    };
    if (!root.left && !root.right) {
      return true;
    } else if (root.left && root.right) {
      return Math.abs(height(root.left) - height(root.right)) <= 1;
    } else if (root.left && !root.right) {
      return height(root.left) <= 1;
    } else {
      return height(root.right) <= 1;
    }
  }
}

const root = new Node(10, null, null);
const bst = new BST(root);
bst.insert(new Node(5, null, null));
bst.insert(new Node(6, null, null));
bst.insert(new Node(2, null, null));
bst.insert(new Node(2, null, null));
bst.insert(new Node(12, null, null));
bst.insert(new Node(14, null, null));
bst.insert(new Node(14, null, null));
bst.insert(new Node(16, null, null));
// bst.remove(2)
// bst.remove(5)

bst.printInOrder();
// bst.printPreOrder();
// bst.printPostOrder();
// bst.search(10)
// bst.minimum();
// bst.maximum();
// console.log(
//   bst.lowestCommonAncestor(new Node(12, null, null), new Node(14, null, null))
// );

console.log(bst.isBalanced());
