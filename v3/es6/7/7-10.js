// 사각지대
// 스코프안에서 변수의 사각지대는 변수가 선언되기 전의 코드입니다.
// typeof 연산자는 변수가 선언됐는지 알아보는 방법은 안전한방법으로 알려져 있습니다. ------> es6 전까지
if (typeof x === "undefined") {
  console.log("x dosen't exisit or is undefined");
} else {
  // x를 사용해도 안전한 코드
}

// es6가 나온 이후 let으로 선언하면 에러가 뜹니다.

// if (typeof x === "undefined") {
//   console.log("x dosen't exisit or undefined");
// } else {
//   // x를 사용해도 안전한 코드
// }
// let x = 5;
