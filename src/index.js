/**
 * @param {Array} items
 * @return {Array} concatenation of every array passed as rest parameter
 */
const concat = (...items) =>
  // since reduce is initialized with [], strings are interpreted are unary arrays
  items.reduce((result, item) => result.concat(item), []);

/**
 * @param {Array} otherArrays
 * @return {Array} concatenation of ...otherArrays without duplicates
 */
const dedupe = (...otherArrays) =>
  Array.from(new Set([...concat(...otherArrays)]));

module.exports = dedupe;
