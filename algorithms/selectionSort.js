/* 
Temporal Complexity -> O( 1 + n * n +1 +1 +1 +1 +1 ) -> O(n^2)
Space Complexity -> O(  )
 */

function selectSort(array) {
  let longitude = array.length;               // O(1)
  for (let i = 0; i < longitude; i++) {       // O(n)
    let minimo = i                            // O(1)
    for (let j = i + 1; j < longitude; j++) { // O(n)
      if (array[j] < array[minimo]) {         // O(1)
        minimo = j                            // O(1)
      }
    }
    if (minimo != i) {                        // O(1)
      let temp = array[i]                     // O(1)
      array[i] = array[minimo]                // O(1)
      array[minimo] = temp                    // O(1)
    }
  }
  return array                                // O(1)
}