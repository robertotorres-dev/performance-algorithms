/* 
Temporal Complexity -> O( 1 + n * n +1 +1 +1 +1 +1 ) -> O(n^2)
Space Complexity -> O(  )
 */

function bubbleSort(array) {
  let longitude = array.length;             // O(1)
  for (let i = 0; i < longitude; i++) {     // O(n)
    for (let j = 0; j < longitude; j++) {   // O(n)
      if (array[j] > array[j+1]) {          // O(1)
        let temp = array[j]                 // O(1)
        array[j] = array[j+1]               // O(1)
        array[j+1] = temp                   // O(1)
      }
    }
  }
  return array                              // O(1)
}