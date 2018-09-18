import BST from './BST';

test('add nodes to BST', () => {
  const tree = new BST();
  const keys = [4, 2, 5, 7, 1, 6, 3];
  keys.forEach((k) => {
    tree.put(k, k);
  });
  expect(tree.size()).toBe(7);
});