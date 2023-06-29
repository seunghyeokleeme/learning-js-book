let a = 1; // 원본
let b = a; // 사본, b는 1입니다. a가 아닙니다.
a = 2; // 원본의 값을 바꿈
console.log(b); // 1. 사본의 값은 바뀌지 않음

a === 2; // true

function change(a) {
  a = 5;
}

a = 3;
change(a);
console.log(a); // 3

let o = { a: 1 };
let p = o; // 이제는 p는 o가 '가리키고 있는 것'을 가리킵니다.
o.a = 2;
console.log(p); // {a:2}

let c = { a: 1 };
let x = c; // 이제 x는 'c가 가리키고 있는 것'을 가리킵니다.
x === c; // true
c = { a: 2 }; // 이제 o는 다른 것을 가리킵니다. {a: 1}을 수정합니다.
c === x; // false
console.log(x); // {a: 1}

let q = { a: 1 };
q === { a: 1 }; // false

function change_d(d) {
  d.a = 999;
}

let d = { a: 1 };
change_d(d);
console.log(d); // {a: 999}
