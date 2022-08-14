const sumTo = (num) => {
  if (num === 1) {
    return num;
  }
  return num + sumTo(num - 1);
};
// console.log(sumTo(100));

const sumTo2 = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};
// console.log(sumTo2(100));

const factorial = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return (num *= factorial(num - 1));
  }
};
// console.log(factorial(5));

const factorial2 = (num) => {
  let sum = 1;
  for (let i = num; i >= 1; i--) {
    sum *= i;
  }
  return sum;
};
// console.log(factorial2(5));

const fib = (num) => {
  return num <= 1 ? num : num - 1 + num - 2;
};
//fib(2) ->3
//fib(7) ->13
const fib2 = (num) => {
  let num1 = 1;
  let num2 = 1;
  let count = 2;
  while (count < num) {
    [num1, num2] = [num2, num1 + num2];
    count = count + 1;
  }
  return num2;
};
// console.log(fib2(7));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const printList = (list) => {
  if (!list) return;
  console.log(list);
  printList(list.next);
};
const printList2 = (list) => {
  console.log(list);
  if (list.next) printList2(list.next);
};
// printList(list);

const printList3 = (list) => {
  while (list) {
    console.log(list);
    list = list.next;
  }
  return;
};
// printList3(list);

const reversePrintList = (list) => {
  if (list.next) {
    reversePrintList(list.next);
  }
  console.log(list.value);
};
// reversePrintList(list);

const reversePrintList2 = (list) => {
  const stack = [];
  while (list) {
    stack.push(list.value);
    list = list.next;
  }
  while (stack.length) {
    console.log(stack.pop());
  }
};
// reversePrintList2(list);
