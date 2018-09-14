<<<<<<< HEAD
import { swap } from '../array-utils';

/** @module */
=======
import { swap } from '../utils/array-util';
>>>>>>> dcad6ebaf2d7eac39a0ac6d004b7869743d5c42c

/**
 * Sort an array in place
 * @param {object[]} data - input data
 * @param {function} [comp] - comparator function
 */
export function sort(data, comp) {
  if (!comp) {
    comp = (a, b) => a === b ? 0 : (a-b)/Math.abs(a-b);
  }
  for (let i = 0; i < data.length; i++) {
    let j = i;
    while(j > 0 && comp(data[j], data[j-1]) < 0) {
      swap(data, j-1, j);
      j -= 1;  
    }
  }
}
