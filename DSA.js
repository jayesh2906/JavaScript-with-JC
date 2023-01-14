// 👉 1) Reverse an array
function DSA1() {
  const customReverse = (array) => {
    let rightIndex = array.length - 1;
    for (let leftIndex = 0; leftIndex < array.length / 2; leftIndex++) {
      // swapping using array destucturing [ a, b ] = [ b, a ]
      let temp = array[leftIndex];
      array[leftIndex] = array[rightIndex];
      array[rightIndex] = temp;
      rightIndex--;
    }
  };
  const numbers = [1, 2, 3, 4, 5, 6];
  customReverse(numbers);
  console.log(numbers);

  // while Loop approach
  const customReverse2 = (array) => {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex < rightIndex) {
      let temp = array[leftIndex];
      array[leftIndex] = array[rightIndex];
      array[rightIndex] = temp;
      leftIndex++;
      rightIndex--;
    }
  };
}
// DSA1();

// 👉 2) Maximum and minimum of an array using minimum number of comparisons
// Input: arr = [3, 5, 4, 1, 9]
// Output: Minimum element is: 1
//         Maximum element is: 9
function DSA2() {
  const numbers = [3, 5, 4, 1, 9];
  let max, min;
  if (numbers[0] > numbers[1]) {
    max = numbers[0];
    min = numbers[1];
  } else {
    max = numbers[1];
    min = numbers[0];
  }

  for (let i = 2; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }
  console.log(min); // 1
  console.log(max); // 9

  // using Math.min and Math.max
  console.log(Math.min(...numbers)); // 1
  console.log(Math.max(...numbers)); // 9

  // using Math and apply
  console.log(Math.min.apply(null, numbers)); // 1
  console.log(Math.max.apply(null, numbers)); // 9
}
// DSA2();

// 👉 3) Find the "Kth" max and min element of an array
// arr[] = 7 10 4 3 20 15
// K = 3;
// Output: kth Min - 7, kth Max - 10
function DSA3() {
  const numbers = [7, 10, 4, 3, 20, 15];

  function minMax(array, k) {
    let min, max;
    const sortedArray = array.slice().sort((a, b) => a - b);
    min = sortedArray[k - 1];
    max = sortedArray[array.length - k];

    return { min, max };
  }

  const { min, max } = minMax(numbers, 3);
  console.log(min); // 7
  console.log(max); // 10

  // simple selection sort simple
  const array = [7, 10, 4, 3, 20, 15];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  console.log("array", array);
}
// DSA3();

// 👉 4) Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order without sort.
// arr = [0, 2, 1, 2, 0]
// Output: [0, 0, 1, 2, 2]
function DSA4() {
  const numbers = [0, 2, 1, 2, 0];

  let zeroCount = 0;
  let oneCount = 0;
  let k = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      zeroCount++;
    } else if (numbers[i] === 1) {
      oneCount++;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    numbers[k++] = 0;
  }
  for (let i = 0; i < oneCount; i++) {
    numbers[k++] = 1;
  }
  while (k < numbers.length) {
    numbers[k++] = 2;
  }

  console.log(numbers);
}
// DSA4();

// 👉 5) Move all negative numbers to beginning and positive to end without extra space
// Input: [11, -13, -5, 6, -7, 5, -3, -6]
// Output: [-13, -5, -7, -3, -6, 11, 6, 5]
function DSA5() {
  // positive number prr j point karenga swap negative number of i with j
  // j flag will point to positive number and as soon as get any negative number in loop swap i postion value with
  // j postion value and increment j if (value is negative)
  const array = [11, -13, -5, 6, -7, 5, -3, -6];

  const reArrange = (array) => {
    let j = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        if (i !== j) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        j++;
      }
    }
  };

  reArrange(array);
  console.log(array);

  // easy way but not efficient
  const arr = [11, -13, -5, 6, -7, 5, -3, -6];
  let temp = [];
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      temp[k++] = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      temp[k++] = arr[i];
      if (k === arr.length) break;
    }
  }

  console.log(temp);
}
// DSA5();

// 👉 6) Find the Union of two sorted arrays.
// arr1 = [1, 2, 3, 4, 5]
// arr2 = [1, 2, 3, 8, 9]
// output = [ 1, 2, 3, 4, 5, 8, 9 ]
function DSA6() {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 3, 8, 9];

  // first, using set
  console.log([...new Set([...arr1, ...arr2])]); // [ 1, 2, 3, 4, 5, 8, 9 ]

  // second, using concat
  const unionR = arr1.concat(
    arr2.filter((num) => {
      return !arr1.includes(num);
    })
  );
  console.log("unionR", unionR); // [ 1, 2, 3, 4, 5, 8, 9 ]

  // third, using while loop
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  console.log("result", result); // [ 1, 2, 3, 4, 5, 8, 9 ]
}
// DSA6();

// 👉 6A) Find the Intersection of two sorted arrays.
// arr1 = [1, 2, 3, 4, 5]
// arr2 = [1, 2, 3, 8, 9]
// output = [ 1, 2, 3]
function DSA6A() {
  // using filter
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 3, 8, 9];

  const intersection = arr1.filter((num) => arr2.includes(num));
  console.log("intersection", intersection);

  // using while loop sorted array
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }

  console.log("result", result); // [ 1, 2, 3]

  // using map object

  let map = {};
  let common = [];
  for (let num of arr1) {
    map[num] = 1;
  }

  for (let num of arr2) {
    if (map[num] === 1) {
      map[num]++;
      common.push(num);
    }
  }
  console.log("common", common);

  // unique from two arrays
  const arr3 = [1, 2, 3, 4];
  const arr4 = [1, 2, 5, 6];
  // output : [ 3, 4, 5, 6 ]

  const uniqueArr3 = arr3.filter((num) => !arr4.includes(num));
  const uniqueArr4 = arr4.filter((num) => !arr3.includes(num));
  console.log([...uniqueArr3, ...uniqueArr4]); // [ 3, 4, 5, 6 ]

  // unique from two arrays [imp]
  function uniqueNums() {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 5, 6];
    // output : [ 3, 4, 5, 6 ]
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        i++;
        j++;
      } else if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    console.log(result);
  }
  uniqueNums();
}
// DSA6A();

// 👉 7) Write a program to cyclically rotate an array by one.
// arr1 = [1, 2, 3, 4, 5]
// output = [ 5, 1, 2, 3, 4 ]
function DSA7() {
  const arr = [1, 2, 3, 4, 5];
  const last = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;

  console.log("arr", arr); // [ 5, 1, 2, 3, 4 ]

  // using pop and shift
  const arr1 = [1, 2, 3, 4, 5];
  const lastNum = arr1.pop();
  arr1.unshift(lastNum);
  console.log("arr1", arr1);
}
// DSA7();

// 👉 8) find duplicate in an array
// arr1 = [1, 2, 2, 2, 3, 4, 4, 5]
// output = [ 2, 4 ]
function DSA8() {
  // using object and for loop
  const arr2 = [3, 4, 5, 1, 2, 4, 3, 5];
  const obj2 = {};
  const result1 = [];

  for (let num of arr2) {
    if (obj2[num]) {
      if (!result1.includes(num)) result1.push(num);
    } else {
      obj2[num] = (obj2[num] || 0) + 1;
    }
  }

  console.log("result1", result1);

  // using two loop
  const array = [1, 2, 2, 2, 3, 4, 4, 5];
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        if (!result.includes(array[i])) {
          result.push(array[i]);
        }
        break;
      }
    }
  }

  console.log("result", result);

  // using sorting and one loop
  const arr = [3, 4, 5, 1, 2, 4, 3, 5];
  const sorted = [...arr.sort()];
  const output = [];

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      if (!output.includes(sorted[i])) {
        output.push(sorted[i]);
      }
    }
  }

  console.log("output", output);

  // using reduce count obj and Object.entries()
  const arr1 = [3, 4, 5, 1, 2, 4, 3, 5];
  const final = [];

  const countObj = arr1.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: (acc[curr] || 0) + 1,
    };
  }, {});

  for (let [num, count] of Object.entries(countObj)) {
    if (count > 1) {
      final.push(+num);
    }
  }
  console.log("final", final);
}
// DSA8();

// 👉 9) Merge 2 sorted arrays without using Extra space ( memory )
// arr1 = [1, 2, 5, 6 ]
// arr2 = [ 3, 4, 7 ]
// output
// arr1 : [1, 2, 3, 4 ]
// arr2 : [ 5, 6, 7 ]
// [ 1, 2, 3, 4, 5, 6, 7]
function DSA9() {
  const arr1 = [1, 2, 5, 6];
  const arr2 = [3, 4, 7];

  let m = arr1.length;
  let n = arr2.length;

  // first check if arr1[i] > arr2[0], swap num and sort arr2
  for (let i = 0; i < m; i++) {
    if (arr1[i] > arr2[0]) {
      let temp = arr1[i];
      arr1[i] = arr2[0];
      arr2[0] = temp;

      let j = 0;
      while (j < n - 1 && arr2[j] > arr2[j + 1]) {
        let temp = arr2[j];
        arr2[j] = arr2[j + 1];
        arr2[j + 1] = temp;
        j++;
      }
    }
  }

  console.log("arr1", arr1); // [ 1, 2, 3, 4 ]
  console.log("arr2", arr2); // [ 5, 6, 7 ]
  console.log([...arr1, ...arr2]); // [ 1, 2, 3, 4, 5, 6, 7 ]
}
// DSA9();

// 👉 10) Merge Intervals
// Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [ [1, 6], [8, 10], [15, 18]]
// https://www.youtube.com/watch?v=LvygwImtvEw
function DSA10() {
  const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ];

  intervals.sort((a, b) => a[0] - b[0]);

  // 1) Using simple for loop
  const result = [intervals[0]]; // [[1,3]]

  for (let interval of intervals.slice(1)) {
    e1 = result[result.length - 1][1]; // 3
    s2 = interval[0]; // 2
    e2 = interval[1]; // 6

    if (e1 >= s2) {
      // 3 >= 2
      result[result.length - 1][1] = Math.max(e1, e2); // [[1,6]]
    } else {
      result.push(interval);
    }
  }

  console.log("result", result);

  // 2) Using Reduce
  const intervals1 = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ];

  intervals1.sort((a, b) => a[0] - b[0]);

  const result1 = intervals1.reduce((acc, curr) => {
    let last = acc.pop();
    if (last) {
      if (last[1] > curr[0]) {
        let newLast = [last[0], curr[1]];
        acc.push(newLast);
      } else {
        acc.push(last, curr);
      }
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);

  console.log("result", result1);
}
// DSA10();

// 👉 11) Count Inversion
/* 
For an array, inversion count indicates how far (or close) the array is from being sorted. 
If array is already sorted then the inversion count is 0. If an array is sorted in the reverse 
order then the inversion count is the maximum
Input: N = 5, arr[] = {2, 4, 1, 3, 5}
Output: 3
Explanation: The sequence 2, 4, 1, 3, 5 
has three inversions (2, 1), (4, 1), (4, 3).
*/
function DSA11() {
  const array = [2, 4, 1, 3, 5];
  let count = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        count++;
      }
    }
  }
  console.log("output", count);
}
// DSA11();

// 👉 12) Best Time to Buy and Sell Stock:-
/* 
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/
function DSA12() {
  const prices = [7, 1, 5, 3, 6, 4];

  let maxProfit = 0;
  let lowestPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    lowestPrice = Math.min(prices[i], lowestPrice);
    maxProfit = Math.max(prices[i] - lowestPrice, maxProfit);
  }

  console.log("maxProfit", maxProfit);

  // 2) Using two for loop
  const arr = [7, 1, 5, 3, 6, 4];
  let maxProfit1 = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > maxProfit1) {
        maxProfit1 = arr[j] - arr[i];
      }
    }
  }

  console.log(maxProfit1);
}
// DSA12();

// 👉 13) find all pairs on integer array whose sum is equal to given number
/* 
arr[] = {1, 5, 7, 1}
Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6.
*/
function DSA13() {
  const arr = [1, 5, 7, 1];
  let sum = 6;
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        count++;
        console.log(`[${arr[i]},${arr[j]}]`);
      }
    }
  }
  console.log("No. of Pairs", count);

  // 2) Using one for loop and map
  let result = [];
  let map = new Map();

  for (let num of arr) {
    if (map.has(num)) {
      let prevCount = map.get(num);
      map.set(num, prevCount + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (let num of arr) {
    if (map.has(sum - num)) {
      map.delete(sum - num);
      result.push([num, sum - num]);
    }
  }

  console.log(result, result.length);
}
// DSA13();

// 👉 14) find common elements In 3 sorted arrays
/* 
n1 = 6; A = {1, 5, 10, 20, 40, 80}
n2 = 5; B = {6, 7, 20, 80, 100}
n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
Output: 20 80
Explanation: 20 and 80 are the only
common elements in A, B and C.
*/
function DSA14() {
  const arr1 = [1, 5, 10, 20, 40, 80];
  const arr2 = [6, 7, 20, 80, 100];
  const arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
  let result = [];
  let i = 0,
    j = 0,
    k = 0;

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      result.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }
  console.log("result", result); // [ 20, 80 ]
}
// DSA14();

// 👉 15) Rearrange array in alternating positive & negative items
/* 
Input:  arr[] = {1, 2, 3, -4, -1, 4}
Output: arr[] = {-4, 1, -1, 2, 3, 4}
*/
function DSA15() {
  const arr = [1, 2, 3, -4, -1, 4];
  const negative = [];
  const positive = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.push(arr[i]);
    } else {
      positive.push(arr[i]);
    }
  }

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < positive.length && j < negative.length) {
    if (k % 2 === 0) {
      arr[k++] = positive[i++];
    } else {
      arr[k++] = negative[j++];
    }
  }

  while (i < positive.length) {
    arr[k++] = positive[i++];
  }

  while (j < negative.length) {
    arr[k++] = negative[j++];
  }

  console.log("arr", arr); // [ 1, -4, 2, -1, 3, 4 ]
}
// DSA15();

// 👉 16) Find if there is any subarray with sum equal to 0
/* 
Input:  arr[] = 4 2 -3 1 6
Output: 2, -3, 1 is the subarray 
with sum 0.

How to solve:-
4 2 -3 1 6
4 6  3 4<- while summing aray elements 4 is repeated means yes it has an subarray with sum equal to 0.
*/
function DSA16() {
  // 1) Using map and sum
  const arr = [4, 2, -3, 1, 6];
  let map = new Map();
  let sum = 0;

  function checkSubArray() {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];

      if (arr[i] === 0 || map.has(sum) || sum === 0) {
        return true;
      }

      map.set(arr[i]);
    }

    return false;
  }
  console.log("subArray with sum", checkSubArray(arr));

  // 2) Using 3 for loop
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum === 0) {
        let temp = [];
        let start = i;
        while (start <= j) {
          temp.push(arr[start]);
          start++;
        }
        result.push(temp);
      }
    }
  }

  console.log(result);
}
// DSA16();

// 👉 17) Find factorial of a large number
function DSA17() {
  function factorial(num) {
    if (num < 0) {
      console.log("Please provide positive number");
      return;
    }
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  console.log(factorial(5));
}
// DSA17();

// 👉 18) find maximum product subarray
/* 
Arr[] = [ 6, -3, -10, 0, 2 ]
Output: 180

solution :-  posible sub array 10
[6,-3], [6,-3,-10], [6,-3,-10,0], [6,-3,-10,0,2] => i=0
[-3,-10], [-3,-10,0], [-3,-10,0,2] => i=1
[-10,0], [-10,0,2] => i=2
[0,2] => i=3
*/
function DSA18() {
  const arr = [6, -3, -10, 0, 2];

  function maxProduct(arr) {
    let outMaxProd = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      let innerProd = 1;
      for (let j = i; j < arr.length; j++) {
        innerProd *= arr[j];

        if (innerProd > outMaxProd) {
          outMaxProd = innerProd;
        }
      }
    }
    return outMaxProd;
  }

  console.log(maxProduct(arr));
}
// DSA18();

// 👉 19) Find longest coinsecutive subsequence
/* 
a[] = {2,6,1,9,4,5,3}
Output:
6 => [1,2,3,4,5,6]
*/
function DSA19() {
  const arr = [2, 6, 1, 9, 4, 5, 3];

  function longestCoinsecutive(arr) {
    let max = 0;
    let count = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (i > 0 && arr[i] === arr[i - 1] + 1) {
        count++;
      } else if (i > 0 && arr[i] === arr[i - 1]) {
        continue;
      } else {
        count = 1;
      }
      max = Math.max(max, count);
    }
    return max;
  }

  console.log(longestCoinsecutive(arr));
}
// DSA19();

// 👉 20) Given Array of size n, find all elements that appear more than k times
/* 
Input: arr[] = {3, 1, 2, 2, 1, 2, 3, 3}, k = 2
Output: {2, 3}
*/
function DSA20() {
  const arr = [3, 1, 2, 2, 1, 2, 3, 3];
  const k = 2;
  const map = new Map();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (let [key, value] of map) {
    if (value > k) {
      result.push(key);
    }
  }

  console.log("result", result);
}
// DSA20();

// 👉 21) Find whether an array is a subset of another array
/*
Input:
a1[] = {11, 1, 13, 21, 3, 7}
a2[] = {11, 3, 7, 1}
Output:
Yes
*/
function DSA21() {
  const a = [11, 1, 13, 21, 3, 7];
  const b = [11, 3, 7, 1];

  function checkSubset(a, b) {
    let map = new Map();

    for (let i = 0; i < a.length; i++) {
      if (!map.has(a[i])) {
        map.set(a[i], a[i]);
      }
    }
    for (let i = 0; i < b.length; i++) {
      if (!map.has(b[i])) {
        return false;
      }
    }
    return true;
  }
  console.log(checkSubset(a, b));

  function checkSubset2(a, b) {
    let i = 0; // b=>[11, 3, 7, 1];
    let j = 0; // a=>[11, 1, 13, 21, 3, 7];

    for (i = 0; i < b.length; i++) {
      for (j = 0; j < a.length; j++) {
        if (b[i] === a[j]) {
          break;
        }
      }
      if (j === a.length) {
        // element not found
        return false;
      }
    }
    return true;
  }
  console.log(checkSubset2(a, b));
}
// DSA21();

// 👉 22) Find the triplet that sum to a given value
/*
n = 6, sum = 13
arr[] = [1 4 45 6 10 8]
Output:
The triplet [1, 4, 8] in 
the array sums up to 13.
*/
function DSA22() {
  const arr = [1, 4, 45, 6, 10, 8];
  const sum = 13;

  // 1) Using 3 for loop - O(n3)
  function findTriplet(arr, sum) {
    let result = [];
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] === sum) {
            result.push([arr[i], arr[j], arr[k]]);
          }
        }
      }
    }
    return result;
  }
  console.log(findTriplet(arr, sum));

  // 2) Using 2 for loop and map - O(n2)time +O(n)space
  const arr1 = [1, 4, 45, 6, 10, 8];
  const sum1 = 13;
  const result = [];
  const map = new Map();

  for (let num of arr1) {
    if (!map.has(num)) {
      map.set(num, num);
    }
  }

  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      let key = sum1 - (arr1[i] + arr1[j]);
      if (map.has(key) && key !== arr1[j] && key !== arr1[i]) {
        result.push([arr1[i], arr1[j], key]);
      }
    }
  }

  console.log(result);

  // 3) Using sorting and 2 loops
  function find3Numbers(A, arr_size, sum) {
    let result = [];
    let l, r;
    A.sort((a, b) => a - b);
    console.log(A);
    for (let i = 0; i < arr_size - 2; i++) {
      l = i + 1;
      r = arr_size - 1;
      while (l < r) {
        if (A[i] + A[l] + A[r] == sum) {
          result.push([A[i], A[l], A[r]]);
          return result;
        } else if (A[i] + A[l] + A[r] < sum) {
          l++;
        } else {
          r--;
        }
      }
    }
    return false;
  }
  let arr_size = arr.length;
  console.log(find3Numbers(arr, arr_size, sum));
}
// DSA22();

// 👉 23) Pair elements of an array
/*
const arr = [ 1, 2, 3, 2, 4, 5, 3, 2 ]
output :- [ [ 1 ], [ 2, 2, 2 ], [ 3, 3 ], [ 4 ], [ 5 ] ]
*/
function DSA23() {
  const arr = [1, 2, 3, 2, 4, 5, 3, 2];

  // 1) using map
  function pairElements(arr) {
    let map = new Map();
    const result = [];

    for (let num of arr) {
      map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [key, value] of map) {
      let temp = [];
      for (let j = 0; j < value; j++) {
        temp.push(+key);
      }
      result.push(temp);
    }

    return result;
  }

  console.log(pairElements(arr));

  // 2) using sorting
  arr.sort((a, b) => a - b);
  const result = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }

  console.log(result);
}
// DSA23();

/////////////////////////////////// string ////////////////////////////////

// 👉 24) Reverse a string
function DSA24() {
  // 1) using Built-In Functions
  const str = "hello";
  console.log(str.split("").reverse().join(""));

  // 2) using Decrementing for loop
  const str1 = "hello";
  let reverse = "";
  for (i = str1.length - 1; i >= 0; i--) {
    reverse += str1[i];
  }
  console.log(reverse);

  // 3) recursion substr, charAt
  const str2 = "hello";
  function reverseString(str) {
    if (str === "") {
      return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString(str2));

  // 4) using simple for loop
  const str3 = "hello";
  let output = "";

  for (let char of str3) {
    output = char + output;
  }
  console.log(output);
}
// DSA24();

// 👉 25) Check whether a String is Palindrome or not
/* 
Input: S = "abcba"
Explanation: S is a palindrome
*/
function DSA25() {
  const str = "abcba";

  // using for loop
  function checkPalindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] === str[j]) {
        j--;
      } else {
        return false;
      }
    }
    return true;
  }

  console.log(checkPalindrome(str));

  // using Built-In Functions
  const str1 = "abcba";
  const rev = str1;
  console.log(rev.split("").reverse().join("") === str1);
}
// DSA25();

// 👉 26) Find Duplicate characters in a string
/* 
Input: S = "babbar"
output: b, a
*/
function DSA26() {
  const str = "babbar";
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  for (let [key, value] of map) {
    if (value < 2) {
      map.delete(key);
    }
  }

  console.log(map);
}
// DSA26();

// 👉 27) Write a Code to check whether one string is a rotation of another
/* 
Input: S1 = ABCD, S2 = CDAB
Output: Strings are rotations of each other

Input: S1 = ABCD, S2 = ACBD
Output: Strings are not rotations of each other
*/
function DSA27() {
  const str1 = "ABCD";
  const str2 = "CDAB";

  function checkRotation(str1, str2) {
    const str3 = str1 + str1;

    if (str3.includes(str2)) {
      return true;
    } else {
      return false;
    }
  }

  console.log(checkRotation(str1, str2));
}
// DSA27();

// 👉 28) Write a Program to check whether a string is a valid shuffle of two strings or not
/* 
str1 = "123";
srt2 = "PQR";
str3 = "P1Q2R3"
output: true
*/
function DSA28() {
  const str1 = "123";
  const str2 = "PQR";
  const str3 = "P1Q2R3";

  function validShuffle(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
      return false;
    }

    let i = 0;
    let j = 0;

    for (let k = 0; k < s3.length; k++) {
      if (i < s1.length && s3[k] === s1[i]) {
        i++;
      } else if (j < s2.length && s3[k] === s2[j]) {
        j++;
      } else {
        break;
      }
    }

    if (i < s1.length || j < s2.length) {
      return false;
    } else {
      return true;
    }
  }
  console.log(validShuffle(str1, str2, str3));
}
// DSA28();

// 👉 29) Balanced Parenthesis problem.
/* 
the function should return 'true' for exp = “[()]{}{[()()]()}” and 'false' for exp = “[(])”.
*/
function DSA29() {
  const str = "[()]{}{[()()]()}";
  let stack = [];

  function checkParenthesis(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "[" || str[i] === "{" || str[i] === "(") {
        stack.push(str[i]);
      } else {
        if (str[i] === ")" && stack.pop() !== "(") {
          return false;
        } else if (str[i] === "}" && stack.pop() !== "{") {
          return false;
        } else if (str[i] === "]" && stack.pop() !== "[") {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  console.log(checkParenthesis(str));
}
// DSA29();

// 👉 30) Minimum number of bracket reversals needed to make an expression balanced.
/* 
S = "}{{}}{{{" 
Output: 3
Explanation: One way to balance is:
"{{{}}{}}". There is no balanced sequence
that can be formed in lesser reversals.

first remove all balanced one then reverse left right braces to balanced the string
}{{{ => }{{} => {}{} => 1+2 => 3
*/
function DSA30() {
  const str = "}{{}}{{{";

  function checkNumber(str) {
    let stack = [];
    let openCount = 0;
    let closeCount = 0;

    if (str.length % 2 !== 0) {
      return false;
    }

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "{") {
        stack.push(str[i]);
        openCount++;
      } else {
        if (stack.length > 0) {
          stack.pop();
          openCount--;
        } else {
          closeCount++;
        }
      }
    }

    if (openCount % 2 !== 0) {
      openCount = parseInt(openCount / 2) + 1;
    } else {
      openCount = openCount / 2;
    }

    if (closeCount % 2 !== 0) {
      closeCount = parseInt(closeCount / 2) + 1;
    } else {
      closeCount = closeCount / 2;
    }

    return openCount + closeCount;
  }

  console.log(checkNumber(str));
}
// DSA30();

//////////////////////////////////////// Important Questions /////////////////////////////////////////

// 👉 31) Remove duplicates from an array
// const a = [1, 2, 3, 4, 5, 1, 3];
// output: [1, 2, 3, 4, 5];
function DSA31() {
  // 1) Using Brute-force ( complexity O(n2) )
  const arr = [1, 2, 3, 4, 5, 1, 3];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  console.log(result); // [ 1, 2, 3, 4, 5 ]

  // 2) Using Filter and indexOf ( complexity O(n2) )
  const res = arr.filter((number, index, array) => {
    if (array.indexOf(number) === index) {
      return true;
    } else {
      return false;
    }
  });

  console.log(res); // [ 1, 2, 3, 4, 5 ]

  // 3) Using sorting ( logn ) and comparing loop ( n ) ( O(logn + n) )
  const arr1 = [5, 1, 2, 3, 4, 5, 1, 3];
  arr1.sort((a, b) => a - b);
  const result1 = [arr1[0]];

  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] !== arr1[i - 1]) {
      result1.push(arr1[i]);
    }
  }

  console.log(result1); // [ 1, 2, 3, 4, 5 ]

  // 4) Using Objects map ( O(n2) )
  const arr2 = [5, 1, 2, 3, 4, 5, 1, 3];
  const obj = {};

  arr2.forEach((number) => {
    obj[number] = true;
  });
  console.log(Object.keys(obj));
}
// DSA31();

// 👉 32) Check whether two array are equal or not, does not matter position
// const a = [1, 2, 3, 4, 5];
// const b = [5, 2, 1, 4, 3];
// Output => true
function DSA32() {
  const a = [1, 2, 3, 4, 5];
  const b = [5, 2, 1, 4, 3];

  // 1) Using Map
  function checkTwoArray(a, b) {
    const mapA = {};
    const mapB = {};

    if (a.length !== b.length) return false;

    a.forEach((number) => {
      mapA[number] = (mapA[number] || 0) + 1;
    });

    b.forEach((number) => {
      mapB[number] = (mapB[number] || 0) + 1;
    });

    console.log(mapA);
    console.log(mapB);

    for (let key in mapA) {
      if (mapA[key] !== mapB[key]) {
        return false;
      }
    }
    return true;
  }
  console.log(checkTwoArray(a, b));

  // 2) Using sorting and JSON.stringify()
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  console.log(JSON.stringify(a) === JSON.stringify(b));
}
// DSA32();

// 👉 33) Find Elements that occurred only once in the array
// const a = [1, 2, 3, 4, 5, 1, 2];
// Output => [ 3, 4, 5 ]
function DSA33() {
  // 1) Using hasing map or obj
  const arr = [1, 2, 3, 4, 5, 1, 2];
  const result = [];

  let obj = arr.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: (acc[curr] || 0) + 1,
    };
  }, {});

  for (let key in obj) {
    if (obj[key] === 1) {
      result.push(+key);
    }
  }

  console.log(result); // [ 3, 4, 5 ]

  // 2) Using sorting and comparing element with prev and next item ( for first element only check with next element )
  // ( for last element only check with prev element )
  const arr1 = [1, 2, 3, 4, 5, 1, 2];
  const result1 = [];
  let n = arr1.length;

  arr1.sort((a, b) => a - b);

  if (arr1[0] !== arr1[1]) {
    result1.push(arr1[0]);
  }

  for (let i = 1; i < n - 1; i++) {
    if (arr1[i] !== arr1[i - 1] && arr1[i] !== arr1[i + 1]) {
      result1.push(arr1[i]);
    }
  }

  if (arr1[n - 1] !== arr1[n - 2]) {
    result1.push(arr1[n - 1]);
  }

  console.log(result1); // [ 3, 4, 5 ]
}
// DSA33();

// 👉 34) Find maximum char from string.
// const str = "hello"
// Output => l => 2
function DSA34() {
  // 1) Using hashing map 2 loops
  const str = "hello";
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], 1);
    } else {
      let count = map.get(str[i]);
      map.set(str[i], count + 1);
    }
  }

  let maxCount = map.get(str.charAt(0));
  let maxChar = str.charAt(0);

  for (let [key, value] of map) {
    if (value > maxCount) {
      maxCount = value;
      maxChar = key;
    }
  }

  console.log(`${maxChar} => ${maxCount}`); // l => 2

  // 2) Using one loop and map
  const str1 = "hello";
  const map1 = new Map();

  let maxCount1 = 1;
  let maxChar1 = str1.charAt(0);

  for (let i = 0; i < str1.length; i++) {
    if (!map1.has(str1[i])) {
      map1.set(str1[i], 1);
    } else {
      let prevCount = map1.get(str1[i]);
      map1.set(str1[i], prevCount + 1);
      if (maxCount1 < prevCount + 1) {
        maxCount1 = prevCount + 1;
        maxChar1 = str1[i];
      }
    }
  }

  console.log(`${maxChar1} => ${maxCount1}`); // l => 2
}
// DSA34();

// 👉 35) Check Whether Two Strings Are Anagram Of Each Other
/*
An anagram of a string is another string that contains the same characters, 
only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other. 
*/
function DSA35() {
  // 1) using map hashing
  const str1 = "listen";
  const str2 = "silent";

  // helper function - ( utility )
  function charCount(s) {
    return s.split("").reduce((acc, curr) => {
      return {
        ...acc,
        [curr]: (acc[curr] || 0) + 1,
      };
    }, {});
  }

  function checkAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;

    const obj1 = charCount(s1);
    const obj2 = charCount(s2);

    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }

  console.log(checkAnagram(str1, str2));

  // 2) sorting and compare
  const s1 = "listen";
  const s2 = "silent";

  const ss1 = s1.split("").sort().join("");
  const ss2 = s2.split("").sort().join("");

  if (ss1 === ss2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// DSA35();

// 👉 36) Find Vowels count in a string
/*
 const str = "Jayesh"
 count => 2 [a, e]
*/
function DSA36() {
  const str = "Jayesh";

  function vowelCount(s) {
    const result = [];
    let count = 0;
    const choices = "aeiou";

    for (let char of s.toLowerCase()) {
      if (choices.includes(char)) {
        result.push(char);
        count++;
      }
    }

    return { vowels: result, count };
  }

  console.log(vowelCount(str));
}
// DSA36();

// 👉 37) convert a array into small chunks of given size
/*
 const arr = [1,2,3,4,5,6,7], size of chunk = 2
 output = [[1,2], [3,4], [5,6], [7]]
*/
function DSA37() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const size = 2;
  const chunks = [];

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  console.log(chunks); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
}
// DSA37();

// 👉 38) Reverse word of string
/*
 const str = "Hello World"
 output =>   "olleH dlroW"
*/
function DSA38() {
  const str = "Hello World";

  function reverseWord(s) {
    const reversed = s.split(" ").map((word) => {
      let reverse = "";
      for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
      }
      return reverse;
    });

    return reversed.join(" ");
  }

  console.log(reverseWord(str));
}
// DSA38();

// 👉 39) String Capatalize
/*
 const str = "hello world"
 output =>   "Hello World"
*/
function DSA39() {
  const str = "hello world";

  // 1) Using split method
  function capatalize(s) {
    const resultArray = s.split(" ").map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });
    return resultArray.join(" ");
  }
  console.log(capatalize(str)); // Hello World

  // 2) Using for loop
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    result += str[i - 1] === " " ? str[i].toUpperCase() : str[i];
  }
  console.log(result); // Hello World
}
// DSA39();

// 👉 40) Array Rotation by n
/*
 const arr = [1,2,3,4,5,6] n=2
 output =>   [5,6,1,2,3,4]
*/
function DSA40() {
  // 1) Using pop and unshift
  const arr = [1, 2, 3, 4, 5, 6];
  const n = 2 % arr.length;
  // Note :- if rotation is more than length of array then just do n = n % arr.length.

  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }

  console.log(arr); // [ 5, 6, 1, 2, 3, 4 ]

  // 2) Using merging arr twice
  const arr1 = [1, 2, 3, 4, 5, 6];
  const doubleArr = [...arr1, ...arr1];
  const start = arr1.length - n;
  const end = start + arr1.length;

  console.log(doubleArr.slice(start, end)); // [ 5, 6, 1, 2, 3, 4 ]
}
// DSA40();

// 👉 41) Find all permutations of string
/*
 const str = "ABC"
 output => ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
*/
function DSA41() {
  const str = "ABC";

  function findPermutations(s) {
    if (s.length < 2) {
      return s;
    }

    let permutationArray = [];

    for (let i = 0; i < s.length; i++) {
      let char = s[i]; // A
      let remainingChar = s.slice(0, i) + s.slice(i + 1, s.length); // BC

      for (let permutation of findPermutations(remainingChar)) {
        // BC
        // CB
        permutationArray.push(char + permutation); // ["ABC", "ACB"];
      }
    }
    return permutationArray;
  }
  console.log(findPermutations(str));
}
// DSA41();

// 👉 42) Find missing number from an array 1 to n. ( sum of 1 to n and subtract all one by one to get missing number )
/*
 const arr = [1,2,3,5,6] 
 output =>  missing number is 4
*/
function DSA42() {
  const arr = [1, 2, 3, 5, 6];
  const n = arr.length + 1; // + 1 for missing number

  // 1) using sum and minus
  function findMissing(arr, n) {
    let total = (n * (n + 1)) / 2;

    for (let num of arr) {
      total -= num;
    }
    return total;
  }
  console.log(findMissing(arr, n)); // 4

  // 2) Using sorting and for loop
  let missing;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      missing = arr[i] - 1;
    }
  }

  console.log(missing);
}
// DSA42();

// 👉 43) Reverse a Number
/*
 const number = 123
 output => 321

 const number = -123
 output => -321

 const number = 12300
 output => 321
*/
function DSA43() {
  // 1) Using inbuilt methods
  const n1 = 123;
  const n2 = -123;
  const n3 = 12300;

  function reverseNumber(n) {
    return parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);
  }

  console.log(reverseNumber(n1));
  console.log(reverseNumber(n2));
  console.log(reverseNumber(n3));

  // 2) Without using inbuilt method
  function reverseNumber2(n) {
    let reverse = 0;

    while (n !== 0) {
      let r = n % 10;
      reverse = reverse * 10 + r;
      n = parseInt(n / 10);
    }

    return reverse;
  }

  console.log(reverseNumber2(n1));
  console.log(reverseNumber2(n2));
  console.log(reverseNumber2(n3));
}
// DSA43();

// 👉 44) Remove duplicate items object from an array
/*
 const arr = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 5 }]
 output => [{ id: 1 }, { id: 2 }, { id: 5 }]
 */
function DSA44() {
  const arr = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 5 }];

  // using map ( filter won't work beacuse of diff object reference )
  let map = new Map();
  let result = [];

  for (let item of arr) {
    if (!map.has(item.id)) {
      map.set(item.id, true);
      result.push(item);
    }
  }

  console.log(result); // [ { id: 1 }, { id: 2 }, { id: 5 } ]
}
// DSA44();

// 👉 45) Check all the chars are unique in string
/*
 const str = "Jayesh"
 output => true

 const str = "boss"
 output => false
 */
function DSA45() {
  const str = "Jayesh";
  const str2 = "boss";

  function checkAllCharUnique(s) {
    let obj = {};

    for (let char of s.split("")) {
      if (obj[char]) {
        return false;
      } else {
        obj[char] = true;
      }
    }

    return true;
  }

  console.log(checkAllCharUnique(str)); // true
  console.log(checkAllCharUnique(str2)); // false
}
// DSA45();

// 👉 46) Difference between two sorted array.
/*
 const arr1 = [1,2,3,4,5,6]
 const arr2 = [1,2,3,4,7,8]

 output => arr1-arr2 => [5,6]
 output => arr2-arr1 => [7,8]
 */
function DSA46() {
  const arr1 = [1, 2, 3, 4, 5, 6];
  const arr2 = [1, 2, 3, 4, 7, 8];

  function difference(a1, a2) {
    const diff = [];
    let obj = {};

    for (let num of a2) {
      obj[num] = 1;
    }

    for (let num of a1) {
      if (obj[num] !== 1) {
        diff.push(num);
      }
    }

    return diff;
  }

  console.log(difference(arr1, arr2)); // [ 5, 6 ]
  console.log(difference(arr2, arr1)); // [ 7, 8 ]
}
// DSA46();

// 👉 47) Implement Deep copy of an object ( deepClone )
/* 
  const obj1 = { a: 10, b: { x: 20 } };
  const obj2 = deepClone(obj1);
  obj2.b.x = 90;

  console.log(obj1); // { a: 10, b: { x: 20 } }
  console.log(obj2); // { a: 10, b: { x: 90 } }
*/
function DSA47() {
  function deepClone(obj) {
    let clone = {};

    for (let key in obj) {
      if (typeof obj[key] === "object") {
        clone[key] = deepClone(obj[key]);
      } else {
        clone[key] = obj[key];
      }
    }

    return clone;
  }

  const obj1 = { a: 10, b: { x: 20 } };
  const obj2 = deepClone(obj1);
  obj2.b.x = 90;

  console.log(obj1); // { a: 10, b: { x: 20 } }
  console.log(obj2); // { a: 10, b: { x: 90 } }
}
// DSA47();

// 👉 48) String compression
/*
 const str = "aaaaaabbcc"
 output => 'a6b2c2'
*/
function DSA48() {
  const str = "aaaaaabbcc";

  function compress(s) {
    let compressed = "";
    let map = new Map();

    for (let char of s.split("")) {
      if (!map.has(char)) {
        map.set(char, 1);
      } else {
        let prevCount = map.get(char);
        map.set(char, prevCount + 1);
      }
    }

    console.log(map);

    for (let [key, value] of map) {
      compressed += key + value;
    }

    return compressed;
  }

  console.log(compress(str));
}
// DSA48();

// 👉 49) Check two given strings are isomorphic in JavaScript
/*
 Two strings are said to be isomorphic if it is possible to map every character of the first string to every character 
 of the second string. Basically, in isomorphic strings, there is a one-to-one mapping between every character of 
 the first string to every character of the second string

str1 = 'ABCA'
str2 = 'XYZX'
'A' maps to 'X'
'B' maps to 'Y'
'C' maps to 'Z' true

str1 = 'ABCA'
str2 = 'WXYZ'
'A' maps to 'W'
'B' maps to 'X'
'C' maps to 'Y'
'A' again maps to 'Z' false
*/
function DSA49() {
  const str1 = "ABCA";
  const str2 = "XYZX";

  const str3 = "ABCA";
  const str4 = "WXYZ";

  function checkIsomorphic(s1, s2) {
    let map = {};
    if (s1.length !== s2.length) {
      return false;
    }

    for (let i = 0; i < s1.length; i++) {
      if (map[s1[i]]) {
        if (map[s1[i]] !== s2[i]) {
          return false;
        }
      } else {
        map[s1[i]] = s2[i];
      }
    }

    return true;
  }
  console.log(checkIsomorphic(str1, str2));
  console.log(checkIsomorphic(str3, str4));
}
// DSA49();

// 👉 50) find count of given digit ( 0 to 9 ) in range 1 to 250
/*
 output => 4 -> 52, 9 -> 43
*/
function DSA50() {
  let digit = 4;
  let range = 250;
  let count = 0;

  function checkNumber(num) {
    while (num !== 0) {
      let r = num % 10;
      num = parseInt(num / 10);
      if (r === digit) {
        return true;
      }
    }
    return false;
  }

  for (let i = 1; i <= range; i++) {
    if (checkNumber(i)) {
      count++;
    }
  }
  console.log(count);
}
// DSA50();

// 👉 51) compare ONE-LEVEL object ( custom without JSON.stringify())
/*
const obj1 = { a: 20, b:40 }
const obj2 = { a: 20, b:40 }
*/
function DSA51() {
  const obj1 = { a: 20, b: 40 };
  const obj2 = { a: 20, b: 40 };
  const obj3 = { a: 20, b: 50 };

  function compareObj(o1, o2) {
    let props1 = Object.keys(o1);
    let props2 = Object.keys(o2);

    if (props1.length !== props2.length) {
      return false;
    }

    for (let prop of props1) {
      if (o1[prop] !== o2[prop]) {
        return false;
      }
    }

    return true;
  }

  console.log(compareObj(obj1, obj2)); // true
  console.log(compareObj(obj1, obj3)); // true
}
// DSA51();

// 👉 52) Find all subsets of an array
/*
const arr = [1, 2, 3];
output => [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]
*/
function DSA52() {
  const arr = [1, 2, 3];
  function getAllSubsets(arr) {
    const result = arr.reduce(
      (subsets, value) => subsets.concat(subsets.map((set) => [...set, value])),
      [[]]
    );
    return result;
  }
  console.log(getAllSubsets(arr));
}
// DSA52();

// 👉 53) Filter array of objects with exclude array
/*
let items = [
  { color: "red", type: "tv" },
  { color: "silver", type: "phone" },
  { color: "black", type: "phone" },
  { color: "blue", type: "phone" },
];

let excludes = [
  { k: "color", v: "silver" },
  { k: "type", v: "tv" },
];

output:- 
[ 
  { color: "black", type: "phone" },
  { color: "blue", type: "phone" },
];
*/
function DSA53() {
  let items = [
    { color: "red", type: "tv" },
    { color: "silver", type: "phone" },
    { color: "black", type: "phone" },
    { color: "blue", type: "phone" },
  ];

  let excludes = [
    { k: "color", v: "silver" },
    { k: "type", v: "tv" },
  ];

  const result = items.filter((item) => {
    const isExclude = excludes.some((exclude) => {
      if (item[exclude.k] === exclude.v) {
        return true;
      } else {
        return false;
      }
    });

    if (isExclude) {
      return false;
    } else {
      return true;
    }
  });

  console.log(result); // [ { color: 'black', type: 'phone' }, { color: 'blue', type: 'phone' } ]
}
// DSA53();

// 👉 54) Moving selected item at tne end of an array ( move all 0 to end I.M.P )
/*
const arr = [1, 2, 3, 4, 3, 5, 3, 6, 7]; selected item = 3
output => [1, 2, 4, 5, 6, 7, 3, 3, 3];
*/
function DSA54() {
  const arr = [1, 2, 3, 4, 3, 5, 3, 6, 7];
  const selected = 3;
  let count = 0;

  // 1) Move all selected at back
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== selected) {
      arr[count++] = arr[i];
    }
  }

  while (count < arr.length) {
    arr[count++] = selected;
  }

  console.log("Back", arr); // [1, 2, 4, 5, 6, 7, 3, 3, 3];

  // 2) Move all selected at front
  const arr1 = [1, 2, 3, 4, 3, 5, 3, 6, 7];
  count = arr1.length - 1;
  for (let i = arr1.length - 1; i >= 0; i--) {
    if (arr1[i] !== selected) {
      arr1[count--] = arr1[i];
    }
  }
  while (count >= 0) {
    arr1[count--] = selected;
  }

  console.log("Front", arr1); // [3, 3, 3, 1, 2, 4, 5, 6, 7];

  // 3) Using replace
  const item = 3;
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[j] === item) {
      if (arr[i] !== item) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        j++;
      }
    } else {
      j++;
    }
  }

  console.log(arr);
}
// DSA54();

// 👉 55) write a program to print the first non-repeated number in an array.
/*
const arr = [1, 2, 3, 1, 2, 4, 5]
output => 3
*/
function DSA55() {
  const arr = [1, 2, 3, 1, 2, 4, 5];

  // 1) Using map hashing ( time complexity n+n O(2n), sapce O(n) for map )
  let map = {};
  for (let num of arr) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  }

  for (let key in map) {
    if (map[key] === 1) {
      console.log(+key);
      break;
    }
  }

  // 2) Using two for loop (  time complexity n*n O(n2), sapce O(1) )
  function findFirstNonRepeating(a) {
    for (i = 0; i < a.length; i++) {
      for (j = 0; j < a.length; j++) {
        if (i === j) {
          continue;
        }
        if (a[i] === a[j]) {
          break;
        }
      }
      if (j === a.length) {
        return a[i];
      }
    }
    return -1;
  }
  console.log(findFirstNonRepeating(arr));
}
// DSA55();

// 👉 56) Find all the common elements from the arrays ( not sorted ) .
/*
const arr = [1, 100, 10, 20, 50];
const arr1 = [2, 30, 21, 10, 20];
output :- [ 10, 20 ]
*/
function DSA56() {
  const arr = [1, 100, 10, 20, 50];
  const arr1 = [2, 30, 21, 10, 20];
  const result = [];

  // 1) Using Two for loops O(n2)
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr1[i] === arr[j]) {
        result.push(arr1[i]);
        break;
      }
    }
  }

  console.log(result);

  // 2) Using Map O(2n)
  const map = {};
  const result1 = [];
  for (let num of arr) {
    if (!map[num]) {
      map[num] = true;
    }
  }

  for (let num of arr1) {
    if (map[num]) {
      result1.push(num);
    }
  }

  console.log(result1);
}
// DSA56();

// 👉 57) Array of objects manipulatiion.
/*
a) declare array of employees & sort them in ascending order (empId)
b) declare an array of employees & sort them in ascending order by name.
c) declare array of employees & filter the employees whose sal>6000;
d) declare array of employees & increase sal of every employee by 500;
e) declare array of employees & add "comp:ibm" to every employee;
*/
function DSA57() {
  const employees = [
    { empId: 1, name: "John", salary: 8000 },
    { empId: 3, name: "Ana", salary: 4000 },
    { empId: 2, name: "Zion", salary: 7000 },
  ];

  // a) declare array of employees & sort them in ascending order (empId)
  employees.sort((a, b) => a.empId - b.empId);
  console.log(employees);

  // b) declare an array of employees & sort them in ascending order by name.
  employees.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });
  console.log(employees);

  // c) declare array of employees & filter the employees whose sal>6000;
  const result = employees.filter((employee) => {
    return employee.salary > 6000;
  });
  console.log(result);

  // d) declare array of employees & increase sal of every employee by 500;
  const increaseSal = employees.map((employee) => ({
    ...employee,
    salary: employee.salary + 500,
  }));
  console.log(increaseSal);

  // e) declare array of employees & add "comp:ibm" to every employee;
  const addIbm = employees.map((employee) => ({ ...employee, comp: "IBM" }));
  console.log(addIbm);
}
// DSA57();

// 👉 58) Add Dept info for each employee.
function DSA58() {
  const employees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" },
  ];

  const departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "manager" },
  ];

  const updatedEmployees = employees.map((employee) => {
    let department = departments.find((department) => {
      if (department.eId === employee.eId) {
        return true;
      }
    }).dept;

    return { ...employee, dept: department };
  });

  console.log(updatedEmployees);
}
// DSA58();

// 👉 59) WAP to print Account number
/* 
input:- '12345678987'
 output:- '12*******87'
*/
function DSA59() {
  let accountNo = "12345678987";

  // 1) Using Splice
  const accountNoArray = accountNo.split("");
  accountNoArray.splice(2, 7, ...Array(7).fill("*"));
  console.log(accountNoArray.join(""));

  // 2) Using Slice
  const paddedNo = [
    ...accountNo.split("").slice(0, 2),
    ...Array(accountNo.length - 4).fill("*"),
    ...accountNo.split("").slice(-2),
  ];

  console.log(paddedNo.join(""));

  // 3) Using for loop
  accountNo = accountNo.split("");
  for (let i = 2; i < accountNo.length - 2; i++) {
    accountNo[i] = "*";
  }
  console.log(accountNo.join(""));
}
// DSA59();

// 👉 60) WAP to print Credit-card number
/* 
   input:- '1111222233334444'
   output:- '1111-2222-3333-4444'
*/
function DSA60() {
  const str = "1111222233334444";
  const result = [];

  for (let i = 1; i < str.length; i++) {
    if (i % 4 === 0) {
      result.push(str.slice(i - 4, i));
    }
  }
  result.push(str.slice(-4));

  console.log(result.join("-"));
}
// DSA60();

// 👉 61) WAP to remove special character from a string
/* 
   input:- 'hello@#hi&'
   output:- 'hellohi'
*/
function DSA61() {
  const str = "hello@#hi&";
  console.log(str.replace(/[^a-zA-Z0-9 ]/g, ""));

  /*
  The first parameter we passed to the String.replace method is a regular expression.

  We used the g (global) flag to match all occurrences of the regex in the string and not just the first occurrence.

  The square brackets [] part denotes a character class and the caret ^ symbol means "not the following characters".

  After the ^ (not) symbol we specify:
  ranges for lower (a-z) and upper case (A-Z) letters. This only applies to the Latin alphabet.
  a range for digits from (0-9)
  a space character

  In its entirety, the regular expression matches all characters but lower and uppercase letters, digits and spaces.
  */
}
// DSA61();

// 👉 62) WAP to move all the special characters to the end of the string
/* 
  input:- 'hello@#hi&'
  output:- 'hellohi@#&'
*/
function DSA62() {
  const str = "hello@#hi&";

  function moveAll(str) {
    let res1 = "";
    let res2 = "";

    var regex = new RegExp("[a-zA-Z0-9\\s+]");
    // \s+ will match one or more whitespace characters

    for (let i = 0; i < str.length; i++) {
      if (regex.test(str[i])) {
        res1 = res1 + str[i];
      } else {
        res2 = res2 + str[i];
      }
    }

    return res1 + res2;
  }

  console.log(moveAll(str));
}
// DSA62();

// 👉 63) Covert char into word
/* 
const input = ["c", "a", "k", "e", "", "e", "a", "t", "", "m", "a", "t", "e", "" ];
output => ["cake", "eat", "mate"];
*/
function DSA63() {
  const input = [
    "c",
    "a",
    "k",
    "e",
    "",
    "e",
    "a",
    "t",
    "",
    "m",
    "a",
    "t",
    "e",
    "",
  ];

  const output = [];
  let temp = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "") {
      output.push(temp);
      temp = "";
    } else {
      temp += input[i];
    }
  }

  console.log(output); // [ 'cake', 'eat', 'mate' ]
}
// DSA63();

// 👉 64) String Capatalize
/* 
let arr = ["jayesh choudhary", "ankit sharma"];
Output: JayeshChoudhary , AnkitSharma
*/
function DSA64() {
  let arr = ["jayesh choudhary", "ankit sharma"];

  for (let i = 0; i < arr.length; i++) {
    let string = arr[i];
    let res = "";
    for (let j = 0; j < string.length; j++) {
      if (j === 0 || string[j - 1] === " ") {
        res = res + string[j].toUpperCase();
      } else if (string[j] === " ") {
        continue;
      } else {
        res = res + string[j];
      }
    }
    console.log(res);
  }
}
// DSA64();

// 👉 65) Rearrange array of Objects
/* 
[ { id: '1', name: 'number1' },
  { id: '2', name: 'number2' },
  { id: '3', name: 'number3' },
  { id: 'S1', name: 'number4' },
  { id: '4', name: 'number4' } ]
       
Output :-
[ { id: 'S1', name: 'number4' },
  { id: '1', name: 'number1' },
  { id: '2', name: 'number2' },
  { id: '3', name: 'number3' },
  { id: '4', name: 'number4' } ]
*/
function DSA65() {
  const arr = [
    { id: "1", name: "number1" },
    { id: "2", name: "number2" },
    { id: "3", name: "number3" },
    { id: "S1", name: "number4" },
    { id: "4", name: "number4" },
  ];

  let front = [];
  let back = [];

  arr.forEach((obj) => (isNaN(obj.id) ? front.push(obj) : back.push(obj)));
  console.log([...front, ...back]);
}
// DSA65();

// 👉 66) Mapping array
/* 
let friends = [
  { name: "chris", age: 13, books: ["sherlock holmes", "english"] },
  { name: "john", age: 13, books: ["bible", "harry potter"] },
  { name: "jack", age: 21, books: ["Alchemist", "Java"] },
  { name: "jack", age: 21, books: ["Wings of fire”,”Davinci code"] },
  { name: "holmes", age: 23, books: ["Invisible man”,”The Rainbow"] },
];

Output:-
{
  13: ["sherlock holmes", "english", "bible", "harry potter"],
  21: ["Alchemist", "Java", "Wings of fire”,”Davinci code"],
  23: ["Invisible man”,”The Rainbow"]
}
*/
function DSA66() {
  const friends = [
    { name: "chris", age: 13, books: ["sherlock holmes", "english"] },
    { name: "john", age: 13, books: ["bible", "harry potter"] },
    { name: "jack", age: 21, books: ["Alchemist", "Java"] },
    { name: "jack", age: 21, books: ["Wings of fire”,”Davinci code"] },
    { name: "holmes", age: 23, books: ["Invisible man”,”The Rainbow"] },
  ];
  const result = {};

  friends.forEach((friend) => {
    if (result[friend.age]) {
      result[friend.age] = [...result[friend.age], ...friend.books];
    } else {
      result[friend.age] = [...friend.books];
    }
  });

  console.log(result);
}
// DSA66();

// 👉 67) Find peak elements from an array, An element is called a peak element if its value is not smaller than the value of its adjacent elements(if they exists).
/* 
const arr = [1, 2, 3, 77, 6, 99, 2];
output :- [ 77, 99 ]
*/
function DSA67() {
  const arr = [1, 2, 3, 77, 6, 99, 2];
  let result = [];

  if (arr[0] > arr[1]) {
    result.push(arr[0]);
  }

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      result.push(arr[i]);
    }
  }

  if (arr[arr.length - 1] > arr[arr.length - 2]) {
    result.push(arr[arr.length - 1]);
  }

  console.log(result); // [ 77, 99 ]
}
// DSA67();

// 👉 68) find continuous sub-array which adds up to a given number.
/* 
A[] = [1,2,3,7,5] , S = 12
Output: [ 2, 3, 7 ], [ 7, 5 ]
Explanation: The sum of elements from 2nd position to 4th position is 12.
*/
function DSA68() {
  const arr = [1, 2, 3, 7, 5];
  const sum = 12;

  function findSubArray(arr, sum) {
    const res = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let subArraySum = arr[i];

      for (let j = i + 1; j < arr.length; j++) {
        subArraySum += arr[j];

        if (subArraySum === sum) {
          let temp = [];
          let start = i;
          let end = j;
          while (start <= end) {
            temp.push(arr[start++]);
          }
          res.push(temp);
        }
      }
    }
    return res;
  }

  console.log(findSubArray(arr, sum)); // [ [ 2, 3, 7 ], [ 7, 5 ] ]
}
// DSA68();

// 👉 69) Panagram Checking:- A pangram is a sentence containing every letter in the English Alphabet ( A to Z )
/* 
Input: S = Bawds jog, flick quartz, vex nymph
Output: 1
Explanation: In the given input, there are all the letters of the English alphabet. Hence, the output is 1.
*/
function DSA69() {
  const str = "Bawds jog, flick quartz, vex nymph";

  function checkPanagram(str) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    str = str.toLowerCase();

    for (let char of alphabets) {
      if (!str.includes(char)) {
        return 0;
      }
    }
    return 1;
  }

  console.log(checkPanagram(str));
}
// DSA69();

// 👉 70) Print all subsequences of a string
/*
Input : abc
Output : a, b, c, ab, bc, ac, abc

Input : aaa
Output : a, a, a, aa, aa, aa, aaa
*/
function DSA70() {
  const str = "abc";
  const output = "";
  const result = [];

  function subsequence(input, output) {
    if (input.length == 0) {
      console.log("op", output);
      return;
    }

    // output is passed with including
    // the Ist character of
    // Input string
    subsequence(input.substring(1), output + input[0]);
    // output is passed without
    // including the Ist character
    // of Input string
    subsequence(input.substring(1), output);
  }

  subsequence(str, output);
  console.log(result);
}
// DSA70();

// 👉 71) Program to convert time from 12 hour to 24 hour format
/*
Input : 07:05:45PM
Output : 19:05:45
*/
function DSA71() {
  const str = "07:05:45PM";

  function convert24(str) {
    let output = "";
    const standard = str.slice(-2);
    let hour = str.slice(0, 2);
    const commonTime = str.slice(2, -2);

    if (standard === "AM") {
      output = hour + commonTime;
    } else {
      hour = parseInt(hour) + 12;
      output = hour + commonTime;
    }

    return output;
  }

  console.log(convert24(str));
}
// DSA71();

// 👉 72) Program to calculate the number of days between two dates
/*
var date1 = new Date("06/30/2019");
var date2 = new Date("07/30/2019");
output => 30 
*/
function DSA72() {
  const date1 = new Date("06/29/2019");
  const date2 = new Date("07/30/2019");

  timeDifference = date2.getTime() - date1.getTime();
  //--------------------------- sec   min   hr   day
  const day = timeDifference / (1000 * 60 * 60 * 24);
  console.log(day);
}
// DSA72();

// 👉 73) check if an object is empty or not in javaScript
function DSA73() {
  function isObjectEmpty(value) {
    return Object.keys(value).length === 0 && value.constructor === Object; // 👈 constructor check
  }

  let obj = {};
  console.log(isObjectEmpty(obj));
  console.log(isObjectEmpty(new Object()));
  console.log(isObjectEmpty("hy"));
  console.log(isObjectEmpty(new String()));
}
// DSA73();

// 👉 74) Print the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
/* 
"test" => "es"
"testing" => "t"
"middle" => "dd"
"A" => "A"
*/
function DSA74() {
  const str1 = "test";
  const str2 = "testing";

  const getMiddle = (str) => {
    const n = str.length;
    if (n === 0) return "";
    if (n === 1) return str;

    const mid = parseInt(n / 2);

    if (n % 2 === 0) {
      return str.slice(mid - 1, mid + 1);
    } else {
      return str[mid];
    }
  };

  console.log(getMiddle(str1)); // es
  console.log(getMiddle(str2)); // t
}
// DSA74();

// 👉 75) Remove given character from string.
/* 
const str = "Jayesh";
const char = "a";
output = "Jyesh";
*/
function DSA75() {
  const str = "Jayesh";
  const char = "a";

  let result = "";

  for (let c of str) {
    if (c !== char) {
      result += c;
    }
  }

  console.log(result);
}
// DSA75();

// 👉 76) Spell out numbers ( convert numbers which are less than 100 into words ).
/* 
spellNumber(1) => "one"
spellNumber(12) => "twele"
spellNumber(17) => "seventeen"
spellNumber(21) => "twenty one"
spellNumber(40) => "fourty"
spellNumber(99) => "ninty nine"
*/
function DSA76() {
  function spellNumber(number) {
    if (number > 99) {
      return "Greater than 99";
    }
    const lessThan20 = [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twele",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];

    const tenPlace = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Fourty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    let result = "";

    if (number < 20) {
      result = lessThan20[number];
    } else {
      let unit = number % 10;
      let ten = parseInt(number / 10);
      if (unit === 0) {
        result = tenPlace[ten];
      } else {
        result = tenPlace[ten] + " " + (unit ? lessThan20[unit] : "");
      }
    }

    return result;
  }

  console.log(spellNumber(0));
  console.log(spellNumber(1));
  console.log(spellNumber(12));
  console.log(spellNumber(17));
  console.log(spellNumber(21));
  console.log(spellNumber(40));
  console.log(spellNumber(99));
  console.log(spellNumber(100));
}
// DSA76();

// 👉 77) Array of objects Manipulation
/* 
const portfolio = [
  { name: "Mark", stock: "FB" },
  { name: "Steve", stock: "AAPL" },
  { name: "Tim", stock: "AAPL" },
  { name: "Steve", stock: "MSFT" },
  { name: "Bill", stock: "MSFT" },
  { name: "Bill", stock: "AAPL" },
];

Output 
const shareholder = [
  { stock: "AAPL", name: ["Steve", "Bill", "Tim"], count: 3 },
  { stock: "MSFT", name: ["Steve", "Bill"], count: 2 },
  { stock: "FB", name: ["Mark"], count: 1 },
];
*/
function DSA77() {
  const portfolio = [
    { name: "Mark", stock: "FB" },
    { name: "Steve", stock: "AAPL" },
    { name: "Tim", stock: "AAPL" },
    { name: "Steve", stock: "MSFT" },
    { name: "Bill", stock: "MSFT" },
    { name: "Bill", stock: "AAPL" },
  ];

  // 1) first way
  const resultObj = portfolio.reduce((res, { name, stock }) => {
    let existingObj = res[stock] || {
      stock,
      name: [],
      count: 0,
    };

    res[stock] = {
      stock,
      name: [...existingObj.name, name],
      count: existingObj.count + 1,
    };

    return res;
  }, {});

  const shareholder = Object.values(resultObj).sort(
    (a, b) => b.count - a.count
  );
  console.log(shareholder);

  // 2) second way
  const result = portfolio.reduce((acc, curr) => {
    if (acc[curr.stock]) {
      acc[curr.stock] = {
        stock: curr.stock,
        name: [...acc[curr.stock].name, curr.name],
        count: acc[curr.stock].count + 1,
      };
    } else {
      acc[curr.stock] = { stock: curr.stock, name: [curr.name], count: 1 };
    }
    return acc;
  }, {});

  console.log(Object.values(result).sort((a, b) => b.count - a.count));
}
// DSA77();

// 👉 78) Finding sum of digits of a number until sum becomes single digit
/* 
const "5431" => "13" => "4"
*/
function DSA78() {
  const num = 5431;

  function sumOfDigits(num) {
    let res = 0;
    if (num < 10) {
      return num;
    } else {
      while (num > 0) {
        let rem = num % 10;
        res += rem;
        num = parseInt(num / 10);
      }
    }
    return res > 9 ? sumOfDigits(res) : res;
  }

  console.log(sumOfDigits(num));
}
// DSA78();

// 👉 79) Find sum of numbers occurred only once in the array ( using only one loop )
/* 
  const array = [2, 5, 4, 4, 6, 5, 4, 7, 6];
  output => 2 + 7 => 9
*/
function DSA79() {
  const array = [2, 5, 4, 4, 6, 5, 4, 7, 6];
  let obj = {};
  let sum = 0;

  for (let num of array) {
    if (isNaN(obj[num])) {
      sum = sum + num;
      obj[num] = 1;
    } else {
      if (obj[num] > 0) {
        sum = sum - num;
        obj[num] = obj[num] - 1;
      } else {
        obj[num] = obj[num] + 1;
      }
    }
  }

  console.log(sum);
}
// DSA79();

// 👉 80) Find the smallest positive number missing from an unsorted array
/* 
const arr1 = [2, 3, 7, 6, 8, -1, -10, 15]; // 1
const arr2 = [2, 3, -7, 6, 8, 1, -10, 15]; // 4
const arr3 = [1, 1, 0, -1, -2]; // 2
const arr4 = [3, 2, 1, 4, 5]; // 6
*/
function DSA80() {
  const arr1 = [2, 3, 7, 6, 8, -1, -10, 15];
  const arr2 = [2, 3, -7, 6, 8, 1, -10, 15];
  const arr3 = [1, 1, 0, -1, -2];
  const arr4 = [3, 2, 1, 4, 5];

  function findFirstPositive(arr) {
    let length = arr.length;
    let present = new Array(length + 1).fill(false);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && arr[i] <= length) {
        present[arr[i]] = true;
      }
    }

    for (let i = 1; i < present.length; i++) {
      if (!present[i]) {
        return i;
      }
    }
    return present.length;
  }

  console.log(findFirstPositive(arr1));
  console.log(findFirstPositive(arr2));
  console.log(findFirstPositive(arr3));
  console.log(findFirstPositive(arr4));
}
// DSA80();

// 👉 81) compare nested object ( custom without JSON.stringify())
/*
  const obj1 = { a: 20, b: { x: 40, y: 60 } };
  const obj2 = { a: 20, b: { x: 40, y: 60 } };
*/
function DSA81() {
  const obj1 = { a: 20, b: { x: 40, y: 60 } };
  const obj2 = { a: 20, b: { x: 40, y: 60 } };

  function compare(obj1, obj2) {
    for (let key in obj1) {
      if (typeof obj1[key] === "object") {
        return compare(obj1[key], obj2[key]);
      } else {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
    return true;
  }

  console.log(compare(obj1, obj2));
}
// DSA81();

// 👉 82) Remove "0" and "." from given array of elements.
/*
const array = [106, 223, 1.08, 2.005];
output => [16, 223, 18, 25]
*/
function DSA82() {
  const array = [106, 223, 1.08, 2.005];

  const result = array.map((number) => {
    const updatedNumber = number
      .toString()
      .replaceAll(0, "")
      .replaceAll(".", "");
    return +updatedNumber;
  });

  console.log("result", result);

  const result2 = array.map((number) => {
    let num = number.toString();

    for (let char of num) {
      if (["0", "."].includes(char)) {
        num = num.replace(char, "");
      }
    }
    return +num;
  });

  console.log("result2", result2);
}
// DSA82();

// 👉 83) Return indexes of capital letter in string.
/*
const name = "JaYEsh";
output => [ 0, 2, 3 ]
*/
function DSA83() {
  const name = "JaYEsh";
  const result = [];

  for (let i = 0; i < name.length; i++) {
    if (name[i].toLowerCase() !== name[i]) {
      result.push(i);
    }
  }

  console.log("result", result);
}
// DSA83();

// 👉 84) Find the 3rd min element of an array without using index and sorting
/*
const arr = [7, 10, 4, 3, 20, 15]
output => 7
*/
function DSA84() {
  const arr = [7, 10, 4, 3, 20, 15];
  const Max = 1000000;

  let min1 = Max;
  let min2 = Max;
  let min3 = Max;

  for (let num of arr) {
    if (num < min1) {
      min3 = min2;
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min3 = min2;
      min2 = num;
    } else if (num < min3) {
      min3 = num;
    }
  }

  console.log(min3);
}
// DSA84();

// 👉 85) Given an array of string return group of anagrams string array
/*
const arr = ["eat", "tea", "ate", "ball", "dna", "and"]
output => [ [ 'eat', 'tea', 'ate' ], [ 'ball' ], [ 'dna', 'and' ] ]
*/
function DSA85() {
  const arr = ["eat", "tea", "ate", "ball", "dna", "and"];
  const obj = {};

  for (let str of arr) {
    let key = str.split("").sort().join("");
    if (obj[key]) {
      obj[key] = [...obj[key], str];
    } else {
      obj[key] = [str];
    }
  }

  console.log(Object.values(obj));
}
DSA85();
