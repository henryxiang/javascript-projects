<<<<<<< HEAD
import { findMinIndex, swap } from '../array-utils';

/** @module */
=======
import { findMinIndex, swap } from '../utils/array-util';
>>>>>>> dcad6ebaf2d7eac39a0ac6d004b7869743d5c42c

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
