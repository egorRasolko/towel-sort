module.exports = function towelSort (matrix) {
    let arr = [];
    if(matrix !== undefined){
      for(let i = 0; i < matrix.length; i++){
        if(i == 0 || i % 2 == 0){
          arr = arr.concat(matrix[i]);
        }else if(i % 2 != 0){
          matrix[i] = matrix[i].reverse();
          arr = arr.concat(matrix[i]);
        }
      }
    }else{
      return []
    }
    return arr;
  }
