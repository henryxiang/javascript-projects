import { shuffle, swap} from '../array-utils';

export function partition(data, start, end) {
  const pivot = data[start];
  let i = start;
  let lo = start;
  let hi = end;
  while (i <= hi) {
    if (data[i] === pivot) {
      i += 1;
    } else if (data[i] < pivot) {
      swap(data, i, lo);
      i += 1;
      lo += 1;
    } else {
      swap(data, i, hi);
      hi -= 1;
    }
  }
  return [lo, hi];
}

export function sort(data, start, end) {
  if (start === undefined) {
    shuffle(data);
    start = 0;
    end = data.length - 1;
  }
  if (start >= end) {
    return;
  }
  const [lo, hi] = partition(data, start, end);
  sort(data, start, lo-1);
  sort(data, hi+1, end);
}
