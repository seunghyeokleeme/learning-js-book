function avg(a, b) {
  return (a + b) / 2;
}

avg(5, 10);

function f(x) {
  console.log(`f 내부: x=${x}`);
  x = 5;
  console.log(`f 내부: x=${x} (할당 후)`);
}

let x = 3;
console.log(`f 를 호출하기 전: x=${x}`); // 3
f(x); // 3
// 5
console.log(`f를 호출한 다음: x=${x}`); // 3

// object
function f2(o) {
  o.message = "f2에서 수정함";
  o = {
    message: "새로운 객체!"
  };
  console.log(`f2 내부: o.message=${o.message} (할당후)`);
}

let o = {
  message: "초깃값"
};

console.log(`f2를 호출하기 전: o.message=${o.message}`);
f2(o);
console.log(`f2를 호출한 다음: o.message=${o.message}`);
