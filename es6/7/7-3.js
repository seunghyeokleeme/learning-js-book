// 전역 스코프
// 프로그램을 시작할대 암시적으로 주어진 스코프가 필요한것, 이 스코프이다.
// 전역스코프에서 선언된것들은 전역 변수이다.
// 전역변수는 반드시 써야한다. 하지만 남용해서는 안된다!!

let name = "Irena";
let age = 25;

function greet() {
  console.log(`Hello, ${name}!`);
}
function getBirthYear() {
  return new Date().getFullYear() - age;
}
// 너무 의존적이어서 문제점이 많다.

// 해결방법: 단일 객체에 보관하기

let user = {
  name: "Irena",
  age: 25
};

function great2() {
  console.log(`Hello, ${user.name}!`);
}
function getBirthYear2() {
  return new Date().getFullYear() - user.age;
}
// user를 써서 전역 스코프의 식별자 숫자를 겨우 하나 줄였을뿐이지만, 수백개의 정보가 있을때 유용, 하지만 개선여지가 필요함

// 해결방법: 전역user에 의존하고 있는 함수들을 고쳐 전역 스코프에 의존하지 않게 만듭니다.

let user2 = {
  name: "Irena",
  age: 25
};
function greet3(user2) {
  console.log(`Hello, ${user2.name}!`);
}
function getBirthYear(user2) {
  return new Date().getFullYear - user2.age;
}
// 이 함수들은 모든 스코프에서 호출합니다.

let a = 25;

function a(b) {
  console.log(b);
}
