/* 
Temporal Complexity -> O( 1 + n * n +1 +1 +1 +1 +1 ) -> O(n^2)
Space Complexity -> O( n + 4 )
Auxiliar Space -> (Space Complexity - Input Space) -> O(n) - O(4) -> O(4) -> O(1)
*/

function bubbleSort(array) {                          //O(n)
  let longitude = array.length;             // O(1)   //O(1)
  for (let i = 0; i < longitude; i++) {     // O(n)   //O(1)
    for (let j = 0; j < longitude; j++) {   // O(n)   //O(1)
      if (array[j] > array[j+1]) {          // O(1)
        let temp = array[j]                 // O(1)   //O(1)
        array[j] = array[j+1]               // O(1)
        array[j+1] = temp                   // O(1)
      }
    }
  }
  return array                              // O(1)
}