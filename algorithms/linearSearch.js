/* 
Temporal Complexity -> O( n + 3 ) -> O(n)
Space Complexity -> O( n + 1 ) -> O(n)
Auxiliar Space -> (Space Complexity - Input Space) -> O(n) - O(1) -> O(1)
 */

function linearSearch(array, key) {                     //O(n)
  for (let i = 0; i < array.length; i++) {    // O(n)   //O(1)
    if (array[i] === key) {                   // O(1)   N/A
      return i                                // O(1)   
    }
  }
  return -1                                   // O(1)   
}