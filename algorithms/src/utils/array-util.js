const compare = (a, b) => a === b ? 0 : (a-b)/Math.abs(a-b);

/**
 * Swap the array elements indexed by i and j
 * @param {object[]} data - input data
 * @param {integer} i - index of first element
 * @param {integer} j - index of second element
 */
export function swap(data, i, j) {
  const temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}

/**
 * Shuffle the data in an array
 * @param {object[]} data - input data
 */
export function shuffle(data) {
  for (let i = 0; i < data.length; i++) {
    const n = data.length - i;
    const j = Math.floor(Math.random() * n);
    swap(data, i, j);
  }
}

/**
 * Check if an array is sorted
 * @param {object[]} data - input data
 * @param {boolean} inverse - data sorted in inverse order
 * @param {function} comp - comparator function
 */
export function isSorted(data, inverse, comp) {
  if (!comp) {
    comp = compare;
  }
  if (data.length <= 1) {
    return true;
  }
  for (let i = 0; i < data.length; i++) {
    if (!inverse && comp(data[i+1], data[i]) < 0) {
      return false;
    } else if (comp(data[i+1], data[i]) > 0) {
      return false;
    }
  }
  return true;
}

/**
 * Reverse the order of an array in place
 * @param {object[]} data - input data
 */
export function reverse(data) {
  let i = 0;
  let j = data.length - 1;
  while (i < j) {
    swap(data, i++, j--);
  }
}

/**
 * Compare if two arrays have the same elements
 * @param {object[]} a 
 * @param {object[]} b
 * @param {function} comp - comparator function
 */
export function isEqual(a, b, comp) {
  if (!comp) {
    comp = compare;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (comp(a[i], b[i]) !== 0) {
      return false;
    }
  }
  return true;
}

/**
 * Find the index with minimum value in given range of an array
 * @param {object[]} data - input data
 * @param {integer} from - from index
 * @param {integer} to - to index (exclusive)
 * @param {function} comp - comparator function
 */
export function findMinIndex(data, from, to, comp) {
  if (!comp) {
    comp = compare;
  }
  if (!from) {
    from = 0;
  }
  if (!to) {
    to = data.length;
  }
  if (from >= to) {
    return -1;
  }
  let min = data[from];
  let minIndex = from;
  for (let i = from; i < to; i++) {
    if (comp(data[i], min) < 0) {
      min = data[i];
      minIndex = i;
    }
  }
  return minIndex;
}

/**
 * Find the index with maximum value in given range of an array
 * @param {object[]} data - input data
 * @param {integer} from - from index
 * @param {integer} to - to index (exclusive)
 * @param {function} comp - comparator function
 */
export function findMaxIndex(data, from, to, comp) {
  if (!comp) {
    comp = compare;
  }
  if (!from) {
    from = 0;
  }
  if (!to) {
    to = data.length;
  }
  if (from >= to) {
    return -1;
  }
  let max = data[from];
  let maxIndex = from;
  for (let i = from; i < to; i++) {
    if (comp(data[i], max) > 0) {
      max = data[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}
