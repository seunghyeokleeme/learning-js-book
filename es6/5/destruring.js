// 객체 선언
const obj = { b: 2, c: 3, d: 4 };

// 해체 할당
const { a, b, c } = obj;
a; // undefined: obj에는 "a" 라는 프로퍼티가 없습니다.
b; // 2;
c; // 3;
d; // Reference error: "d"가 정의 되지 않습니다.

const obj2 = { b1: 2, c1: 3, d1: 4 };
let a1, b1, c1;

// // error !!!
// {a1,b1,c1} = obj2;

({ a1, b1, c1 } = obj2);

// 배열 선언
const arr = [1, 2, 3];

// 배열 해체
let [x, y] = arr;
x; // 1
y; // 2
z; // ReferenceError: "z" is definde

const arr2 = [1, 2, 3, 4, 5];

let [x1, y2, ...rest] = arr2;

x1; // 1
y2; // 2
z3; // [3, 4, 5]

let f = 5,
  g = 10;
[f, g] = [g, f];
f; // 10
g; // 5
