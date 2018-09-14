/** @module */

/**
 * Merge two sorted sub-arrays
 * @param {number[]} data 
 * @param {integer} start 
 * @param {integer} end 
 * @param {integer} mid 
 */
export function merge(data, start, end, mid) {
  if (start > end) {
    return;
  }
  const temp = data.slice(start, end + 1);
  let i = 0;
  let j = mid - start + 1;
  for (let k = start; k <= end; k++) {
    if (i > mid - start) {
      data[k] = temp[j];
      j++;
    } else if (j > end - start) {
      data[k] = temp[i];
      i++;
    } else if (temp[i] <= temp[j]) {
      data[k] = temp[i];
      i++;
    } else {
      data[k] = temp[j];
      j++;
    }
  }
}

/**
 * Sort the array in between start and end (merge sort)
 * @param {number} data 
 * @param {integer} [start=0] 
 * @param {integer} [end=data.length-1] 
 */
export function sort(data, start, end) {
  if (start === undefined) {
    start = 0;
    end = data.length - 1;
  }
  if (start >= end) {
    return;
  }
  const mid = Math.floor((start + end) / 2);
  sort(data, start, mid);
  sort(data, mid + 1, end);
  merge(data, start, end, mid);
}
