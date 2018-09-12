import { shuffle, swap} from '../utils/array-util';

/**
 * 
 * @param {object[]} data 
 * @param {integer} start 
 * @param {integer} end 
 * @param {function} comp - comparator function
 */
export function partition(data, start, end, comp) {
  if (!comp) {
    comp = (a, b) => a === b ? 0 : (a-b)/Math.abs(a-b);
  }
  const pivot = data[start];
  let i = start;
  let lo = start;
  let hi = end;
  while (i <= hi) {
    if (comp(data[i], pivot) === 0) {
      i += 1;
    } else if (comp(data[i], pivot) < 0){
      swap(data, i++, lo++);
    } else {
      swap(data, i, hi--);
    }
  }
  return [lo, hi];
}

/**
 * 
 * @param {object[]} data 
 * @param {integer} [start=0] start 
 * @param {integer} [end=0] 
 */
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
