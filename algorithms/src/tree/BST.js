import Node from './tree-node';

export default class BST {
  constructor(root, compare) {
    if (root === undefined) {
      this.root = null;
    }
    if (compare && typeof(compare) === 'function') {
      this.compare = compare;
    }
  }

  /**
   * 
   * @param {object} a 
   * @param {object} b 
   * @returns {integer}
   */
  compare(a, b) {
    return a === b ? 0 : (a-b)/Math.abs(a-b);
  }

  size(root) {
    if (root === undefined) {
      return this.size(this.root);
    }
    if (root === null) {
      return 0;
    }
    if (root.size === null) {
      root.size = this.size(root.left) + this.size(root.right) + 1;
    }
    return root.size;
  }

  height(root) {
    if (root === undefined) {
      return this.size(this.root);
    }
    if (root === null) {
      return -1;
    }
    if (root.height === null) {
      root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
    }
    return root.height;
  }
  /**
   * 
   * @param {object} key 
   * @returns {object} value of node with key, or null
   */
  get(key) {
    const node = this.getNode(key);
    if (node === null) {
      return null;
    }
    return node.value;
  }

  /**
   * 
   * @param {object} key
   * @param {Node} root
   * @returns {Node} - the node with key, or null
   */
  getNode(key, root) {
    if (root === undefined) {
      this.root = this.getNode(key, this.root);
      return;
    }
    if (root === null) {
      return null;
    }
    const cmp = this.compare(key, root.key);
    if (cmp < 0) {
      return this._getNode(key, root.left);
    } else if (cmp > 0) {
      return this._getNode(key, root.right);
    } else {
      return root;
    }
  }

  /**
   * 
   * @param {object} key 
   * @param {object} value 
   * @param {Node} root 
   */
  put(key, value, root) {
    if (root === undefined) {
      this.root = this.put(key, value, this.root);
      return;
    }
    if (root === null) {
      const node = new Node(key, value);
      return node;
    }
    const cmp = this.compare(key, root.key);
    if (cmp < 0) {
      root.left = this.put(key, value, root.left);
    } else if (cmp > 0) {
      root.right = this.put(key, value, root.right);
    } else {
      root.value = value;
    }
    this._adjustTreeHeightAndSize(root);
    return root;
  }

  /**
   * 
   * @param {object} key 
   * @param {Node} root 
   */
  delete(key, root) {
    if (root === undefined) {
      this.root = this.delete(key, this.root);
      return;
    }
    if (root === null) {
      return;
    }
    const cmp = this.compare(key, root.key);
    if (cmp < 0) {
      this.left = this.delete(key, root.left);
    } else if (cmp > 0) {
      this.right = this.delete(key, root.right);
    } else {
      let node;
      if (root.left === null) {
        node = root.right;  
      } else if (root.right === null) {
        node = root.left;
      } else {
        node = this.getMinNode(root.right);
        this.deleteMin(root.right);
        node.left = root.left;
        node.right = root.right;
      }
      this._adjustTreeHeightAndSize(node)
      return node;
    }
    this._adjustTreeHeightAndSize(root);
    return root;
  }

  /**
   * 
   * @param {Node} root 
   */
  getMinNode(root) {
    if (root === undefined) {
      return this.getMinNode(this.root);
    }
    if (root === null) {
      return null;
    }
    if (root.left === null) {
      return root;
    }
    return this.getMinNode(root.left);
  }

  /**
   * 
   * @param {Node} root 
   */
  deleteMin(root) {
    if (root === undefined) {
      this.root = this.deleteMin(this.root);
      return;
    }
    if (root === null) {
      return null;
    }
    if (root.left === null) {
      const node = root.right;
      this._adjustTreeHeightAndSize(node);
      return node;
    }
    root.left = this.deleteMin(root.left);
    this._adjustTreeHeightAndSize(root);
    return root;
  }

  /**
   * 
   * @param {Node} root 
   */
  _adjustTreeHeightAndSize(root) {
    root.height = this.height(root)
    root.size = this.size(root)
  }
}