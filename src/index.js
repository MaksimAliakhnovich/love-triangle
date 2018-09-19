/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
    var count = 0;
  
    for (let i = 0; i < preferences.length; i++) {    
      let chainOne = preferences[i];
      let chainTwo = preferences[chainOne - 1];
      let chainThree = preferences[chainTwo - 1];

      if (chainThree - 1 == i && chainOne != chainTwo) {
        count++;
      }
    }
    return count / 3;
  }

