import { sort } from './insertion-sort';
import { isSorted, shuffle } from '../array-utils';

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