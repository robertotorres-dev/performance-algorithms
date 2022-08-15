/* 
Temporal Complexity -> O( 1 + n * n +1 +1 +1 +1 +1 ) -> O(n^2)
Space Complexity -> O( n + 5) -> O( n )
Auxiliar Space -> (Space Complexity - Input Space) -> O(n) - O(5) -> O(5) -> O(1)
 */

function selectSort(array) {                            // O(n)
  let longitude = array.length;               // O(1)   // O(1)
  for (let i = 0; i < longitude; i++) {       // O(n)   // O(1)
    let minimo = i                            // O(1)   // O(1)
    for (let j = i + 1; j < longitude; j++) { // O(n)   // O(1)
      if (array[j] < array[minimo]) {         // O(1)
        minimo = j                            // O(1)
      }
    }
    if (minimo != i) {                        // O(1)
      let temp = array[i]                     // O(1)   // O(1)
      array[i] = array[minimo]                // O(1)
      array[minimo] = temp                    // O(1)
    }
  }
  return array                                // O(1)
}