/** @module */

/**
 * Merge two sorted sub-arrays
 * @param {object[]} data 
 * @param {integer} start 
 * @param {integer} end 
 * @param {integer} mid
 * @param {function} comp - comparator function
 */
export function merge(data, start, end, mid, comp) {
  if (!comp) {
    comp = (a, b) => a === b ? 0 : (a-b)/Math.abs(a-b)
  }
  if (start > end) {
    return;
  }
  const temp = data.slice(start, end + 1);
  let i = 0;
  let j = mid - start + 1;
  for (let k = start; k <= end; k++) {
    if (j > end - start || comp(temp[i], temp[j]) <= 0) {
      data[k] = temp[i++];
    } else {
      data[k] = temp[j++];
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
