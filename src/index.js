module.exports = function getLoveTrianglesCount(preferences) {
	

let count = 0;
 
  
  for (let i = 0; i < preferences.length; i++) {


  if (i+1 === preferences[preferences[preferences[i] - 1] - 1]) {
    count++;
  
  }

  }
  return Math.floor(count/3); 

}
