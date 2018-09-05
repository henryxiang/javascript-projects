import { 
  findMaxIndex, findMinIndex,
  isEqual, isSorted,
  reverse, shuffle, swap
} from './index';

test('swap array data', () => {
  const a = [1, 2, 3, 4];
  const b = [1, 3, 2, 4];
  swap(a);
  expect(isEqual(a, b)).toBeTruthy;
});

test('shuffle array', () => {
  const a = [1, 2, 3, 4, 5];
  shuffle(a);
  expect(isSorted(a)).toBeFalsy;
});

test('reverse array', () => {
  const a = [1, 2, 3, 4, 5];
  const b = [5, 4, 3, 2, 1];
  reverse(a);
  expect(isEqual(a, b)).toBeTruthy;
});

test('compare array equality', () => {
  const a = [1, 2, 3, 4, 5];
  const b = [1, 2, 3, 4, 5];
  const c = [1, 2, 3];
  const d = [2, 3, 4, 5, 6];
  expect(isEqual(a, b)).toBeTruthy;
  expect(isEqual(a, c)).toBeFalsy;
  expect(isEqual(a, d)).toBeFalsy;
});

test('check sorted array', () => {
  const a = [1, 2, 3, 4, 5];
  const b = [5, 4, 3, 2, 1];
  const c = [3, 1, 4, 2, 5];
  const d = [];
  const reverse = true;
  expect(isSorted(a)).toBeTruthy;
  expect(isSorted(b, reverse)).toBeTruthy;
  expect(isSorted(c)).toBeFalsy;
  expect(isSorted(d)).toBeTruthy;
});

test('find max index', () => {
  const a = [1, 2, 3, 9, 5, 6, 7, 4];
  expect(findMaxIndex(a)).toBe(3);
  expect(findMaxIndex(a, 1)).toBe(3);
  expect(findMaxIndex(a, 2, 5)).toBe(3);
  expect(findMaxIndex(a, 2, 2)).toBe(-1);
});

test('find min index', () => {
  const a = [1, 2, 3, 0, 5, 6, 7, 4];
  expect(findMinIndex(a)).toBe(3);
  expect(findMinIndex(a, 1)).toBe(3);
  expect(findMinIndex(a, 2, 5)).toBe(3);
  expect(findMinIndex(a, 2, 2)).toBe(-1);
});
