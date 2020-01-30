// 즉시 호출하는 한수 표현식
(function() {
  // IIFE 바디
})();
// 함수 표현식을 익명함수로 만들고 그 함수를 즉시 호출합니다.
// 장점: 내부에 있는 것들이 모두 자신만의 스코프를 가지지만, IIFE 자체는 함수이므로 그스코프 밖으로 무언가를 내보낼수 있다.

const message = (function() {
  const secret = "I'm secret!";
  return `The secret is ${secret.length} characters long.`;
})();
console.log(message);
// 변수 secret 은  IIFE의 스코프안에서 안전하게 보호, 외부에서 접근할수 없다.

//example
const f = (function() {
  let count = 0;
  return function() {
    return `I have been called ${++count} time(s).`;
  };
})();
f(); // "I have been called 1 time(s)."
f(); // "I have been called 2 time(s)."
// ------> 클로저를 만들고 클로저에서 무언가 반환받을 때에는 매우 유용하게 쓰임
