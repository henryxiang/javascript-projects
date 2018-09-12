import { partition, sort } from './quick-sort';
import { isEqual, isSorted, shuffle } from '../utils/array-util';

test('partition array', () => {
  const a = [5, 1, 6, 2, 4, 7, 9, 3, 8];
  const b = [4, 4];
  const c = partition(a, 0, 8);
  expect(isEqual(c, b)).toBeTruthy;
});

test('sort array', () => {
  const n = 100;
  const a = [];
  for (let i = 1; i <= n; i++) {
    a.push(i);
  }
  shuffle(a);
  expect(isSorted(a)).toBeFalsy;
  sort(a);
  expect(isSorted(a)).toBeTruthy;
});
