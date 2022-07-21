function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  let newArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  let newArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr.reverse();
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  let squareArr = [];
  for (let i = 1; i < arr.length; i *= 2) {
    squareArr.push(arr[i]);
  }
  return squareArr;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  let nthPowerArr = [];
  for (let i = 1; i < arr.length; i *= n) {
    nthPowerArr.push(arr[i]);
  }
  return nthPowerArr;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  let newArr = [];
  for (let i = 0; i < Math.floor((arr.length + 1) / 2); i += 1) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  let halvedArr = [];
  for (let i = Math.floor((arr.length + 1) / 2); i < arr.length; i++) {
    halvedArr.push(arr[i]);
  }
  return halvedArr;
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
