
module.exports = function towelSort (matrix = []) {
  for (let i = 0; i < matrix.length; i++) {
    if (i%2 == 1) {
      matrix[i].reverse();
    }
   }
    return [].concat(...matrix);
  }
