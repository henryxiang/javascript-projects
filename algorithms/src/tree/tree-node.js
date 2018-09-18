export default class Node {
  constructor(key, value) {
    this.key = key,
    this.value = value,
    this.left = null;
    this.right = null;
    this.size = 1;
    this.height = 0;
  }
}