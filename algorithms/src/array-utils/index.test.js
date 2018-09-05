import arrayUtils from './index';

test('swap array data', () => {
  const a = [1, 2, 3, 4];
  const b = [1, 3, 2, 4];
  arrayUtils.swap(a);
  expect(arrayUtils.isEqual(a, b)).toBeTruthy;
});

test('shuffle array', () => {
  const a = [1, 2, 3, 4, 5];
  arrayUtils.shuffle(a);
  expect(arrayUtils.isSorted(a)).toBeFalsy;
});

test('reverse array', () => {
  const a = [1, 2, 3, 4, 5];
  const b = [5, 4, 3, 2, 1];
  arrayUtils.reverse(a);
  expect(arrayUtils.isEqual(a, b)).toBeTruthy;
});

test('compare array equality', () => {
  const a = [1, 2, 3, 4, 5];
  const b = [1, 2, 3, 4, 5];
  const c = [1, 2, 3];
  const d = [2, 3, 4, 5, 6];
  expect(arrayUtils.isEqual(a, b)).toBeTruthy;
  expect(arrayUtils.isEqual(a, c)).toBeFalsy;
  expect(arrayUtils.isEqual(a, d)).toBeFalsy;
});

test('check sorted array', () => {
  const a = [1, 2, 3, 4, 5];
  const b = [5, 4, 3, 2, 1];
  const c = [3, 1, 4, 2, 5];
  const d = [];
  const reverse = true;
  expect(arrayUtils.isSorted(a)).toBeTruthy;
  expect(arrayUtils.isSorted(b, reverse)).toBeTruthy;
  expect(arrayUtils.isSorted(c)).toBeFalsy;
  expect(arrayUtils.isSorted(d)).toBeTruthy;
});
