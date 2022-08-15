function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

let initial_time = performance.now()
count(5);
let final_time = performance.now()
let length_time = final_time - initial_time

console.log(`The duration is: ${length_time}ms`);