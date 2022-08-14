const iterativeFib = (amount) => {
  const arr = [];
  let num1 = 0;
  let num2 = 1;
  while (arr.length < amount) {
    arr.push(num1);
    [num1, num2] = [num2, num1 + num2];
  }
  return arr;
};
// console.log(iterativeFib(8));

const fibRec = (num) => {
  if (num < 2) return [0];
  if (num < 3) return [0, 1];
  let arr = fibRec(num - 1);
  arr.push(arr[num - 2] + arr[num - 3]);
  return arr;
};
// fibRec(8);
// console.log(fibRec(8));
// [0,1,2,3,5,8,13]

function fibRec2(n) {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];
  const arr = fibRec2(n - 1);
  console.log(...arr);
  console.log(n);
  console.log(arr[n - 1]);
  console.log(arr[n - 2]);
  return [...arr, arr[n - 1] + arr[n - 2]];
}
fibRec2(8);
// console.log(fibRec2(15));

/**
 * goes until we hit base case, return [0,1]
 *
 * n at base case  = 2
 * AT n=2 base cases hits and returns [0,1]
 * [0,1][2-1] = 1; [0,1][2-2] = 0
 * [0,1][1] = 1 && [0,1][0] = 0
 * now we add 1 + 0
 * add 1+0 to the array and return the array.
 *
 * array now bubbles up as [0,1,1]
 *
 * now the cycle repeats
 *
 * n=3
 * get [0,1,1][3-1] AND [0,1,1][3-2]
 * which gives us our new value 1 + 1
 * add 1+1 to the array
 * bubble up again
 *
 * n=4
 * arr = [0,1,1,2]
 */
