import { merge, sort } from './merge-sort';
import { isEqual, isSorted, shuffle } from '../utils/array-util';

test('merge two sorted arrays', () => {
  const a = [1, 3, 5, 7, 2, 4, 6];
  const b = [1, 2, 3, 4, 5, 6, 7];
  const c = [1];
  const d = [1];
  const e = [1, 3, 5, 2, 4, 6];
  const f = [1, 3, 5, 2, 4, 6];
  merge(a, 0, 6, 3);
  merge(c, 0, 0, 0);
  merge(e, 4, 3, 3);
  expect(isEqual(a, b)).toBeTruthy;
  expect(isEqual(c, d)).toBeTruthy;
  expect(isEqual(e, f)).toBeTruthy;
});

test('merge sort', () => {
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
