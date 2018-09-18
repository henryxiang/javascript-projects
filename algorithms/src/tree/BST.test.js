import BST from './BST';

test('add nodes to BST', () => {
  const tree = new BST();
  const keys = [4, 2, 5, 7, 1, 6, 3];
  keys.forEach((k) => {
    tree.put(k, k);
  });
  // console.debug(JSON.stringify(tree, null, 2));
  expect(tree.size()).toBe(7);
  expect(tree.height()).toBe(3);
});

test('remove nodes from BST', () => {
  const tree = new BST();
  const keys = [4, 2, 5, 7, 1, 6, 3];
  keys.forEach((k) => {
    tree.put(k, k);
  });
  tree.delete(7);
  // console.debug(JSON.stringify(tree, null, 2));
  expect(tree.size()).toBe(6);
  expect(tree.height()).toBe(2);
});

test('in-order traverse BST', () => {
  const tree = new BST();
  const keys = [4, 2, 5, 7, 1, 6, 3];
  keys.forEach((k) => {
    tree.put(k, k);
  });
  const nodes = tree.getAllNodes();
  nodes.forEach((node, i) => {
    expect(node.key).toBe(i+1);
    expect(node.value).toBe(i+1);
  });
});