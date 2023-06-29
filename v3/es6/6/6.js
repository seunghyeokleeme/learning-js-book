function sayHello() {
  // 함수 바디는 여는 중괄호를 시작하고

  console.log("Hello world!");
  console.log("Hello world!");
  console.log("Hello world!");
  console.log("Hello world!");

  // 닫는 중괄호로 끝납니다.
}

sayHello(); // console에 "Hello World"가 출력됩니다.

function getGreeting() {
  return "Hello World!";
}
getGreeting(); // "Hello World!"
getGreeting; // f...

const f = getGreeting;

f(); // "Hello World"

const o = {};
o.f = getGreeting;
o.f(); // "Hello World"

const arr = [1, 2, 3];
arr[1] = getGreeting; // arr = [1, f, 3]
arr[1](); // "Hello World"
