const sumAll = (num) => {
  // if (num === 1) {
  //   return 1;
  // } else {
  //   return (num += sumAll(num - 1));
  // }
  return num === 1 ? 1 : (num += sumAll(num - 1));
};
// console.log(sumAll(3));

const pow = (number, exponent) =>
  exponent === 1 ? number : (number *= pow(number, exponent - 1));
// console.log(pow(2, 3));

const factorial = (num) => (num === 1 ? num : (num *= factorial(num - 1)));
// console.log(factorial(5));

// const checkAllValuesInArray = (arr, cb) => arr.every((item) => cb(item));
// console.log(checkAllValuesInArray([1, 2, 3], (num) => num < 2));

const all = (arr, cb) => {
  let copy = [...arr];
  if (copy.length === 0) return true;
  if (cb(copy[copy.length - 1])) {
    copy.pop();
    return all(copy, cb);
  } else {
    return false;
  }
};
// console.log(all([1, 2, 9], (num) => num < 10));

// .every
const all2 = (arr, cb) => {
  let token = true;
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i])) return (token = false);
  }
  return token;
};
// console.log(all2([1, 2, 9, 11], (num) => num < 3));

// .includes
const doesInlucde = (arr, target) => {
  let token = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return (token = true);
    }
  }
  return token;
};
// console.log(doesInlucde([1, 2, 3, 4], 1));

const removeFromArray = (keepArr, removeArr) => {
  const res = [];
  for (let i = 0; i < keepArr.length; i++) {
    if (!doesInlucde(removeArr, keepArr[i])) res.push(keepArr[i]);
  }
  return res;
};
// console.log(removeFromArray([1, 2, 3, 4], [2, 3]));

const productOfArray = (arr) => {
  let copy = [...arr];
  if (copy.length === 0) return 1;
  if (copy.length === 1) return copy.pop();
  let num = copy.pop();
  return num * productOfArray(copy);
};
// console.log(productOfArray([1, 2, 3, 10]));

const productOfArray2 = (arr) => {
  let copy = [...arr];
  return copy.length === 0 ? 1 : copy.pop() * productOfArray(copy);
};
// console.log(productOfArray2([1, 2, 3, 10]));

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

const nestedObjContains = (obj, target) => {
  for (const key in obj) {
    if (typeof obj[key] === 'object')
      return nestedObjContains(obj[key], target);
    if (obj[key] === target) return true;
  }
  return false;
};
// console.log(nestedObjContains(nestedObject, 44));
// console.log(nestedObjContains(nestedObject, 'foo'));

const totalInts = (arr) => {
  let copy = [...arr];
  if (copy.length === 0) return 0;
  let count = 0;
  let last = copy.pop();
  if (Array.isArray(last)) {
    count += totalInts(last);
  } else if (Number.isInteger(last)) {
    count += 1;
  }
  return count + totalInts(copy);
};
// console.log(totalInts([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));

const sumSquares = (arr) => {
  if (arr.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count += sumSquares(arr[i]);
    } else {
      count += arr[i] * arr[i];
    }
  }
  return count;
};
// 1 + 4 + 9 = 14 -> 1*1=1, 2*2=4, 3*3=9 1,4,9 -> 1+4+9
// console.log(sumSquares([1, 2, 3]));
// console.log(sumSquares([[1, 2], 3]));
// console.log(sumSquares([[[[[[[[1]]]]]]]]));
// console.log(sumSquares([10, [[10], 10], [10]]));

//lol iterative because fuck it
const replicate = (amount, num) => {
  if (amount < 0) return [];
  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push(num);
  }
  return arr;
};
// console.log(replicate(3, 5));
// console.log(replicate(1, 69));
// console.log(replicate(-2, 6));

const replicate2 = (amount, num) => {
  if (amount < 0) return [];
  return [num].concat(replicate(amount - 1, num));
};
// [5,5,5] | [69] | []
console.log(replicate2(3, 5));
console.log(replicate2(1, 69));
console.log(replicate2(-2, 6));
