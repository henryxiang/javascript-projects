import { swap } from '../array-utils';
/**
 * Sort an array in place
 * @param {number[]} data - input data
 */
export function sort(data) {
  for (let i = 0; i < data.length; i++) {
    let j = i;
    while(j > 0 && data[j] < data[j-1]) {
      swap(data, j-1, j);
      j -= 1;  
    }
  }
}
