import { findMinIndex, swap } from '../utils/array-util';

/**
 * Sort the array in place (selection sort)
 * @param {object[]} data 
 */
export function sort(data) {
  for (let i = 0; i < data.length; i++) {
    const j = findMinIndex(data, i);
    swap(data, i, j);
  }
}
