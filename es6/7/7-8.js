// 함수 스코프와 호이스팅
let var1;
let var2 = undefined;
var1; // undefined
var2; // undefined
// undefinedVar;   // ReferenceError: undefinedVar 정의되지 않았다.

// let을 쓰면 변수를 선언하기 전 사용하려 할때 에러가 일어납니다.
x; // ReferenceError: x 정의 되지 않았습니다.
let x = 3; // 에러가 일어나서 실행을 멈췄으므로 여기에 결코 도달할수 없습니다.

// 반면 var로 변수를 선언하면 선언하기 전에도 사용하실수 있습니다.
x1; //undefined
var x1 = 3;
x1; // 3
// 호이스팅 개념 적용한 예시이다. 중요한것은 함수나 전역스코프 전체를 살펴보고 var로 선언한 변수를 맨위로 끌어올린다. 선언만!!!!!

var x2; // 선언(할당은 아닌)이 끌어올려집니다.
x2; // undefined
x2 = 3;
x2; // 3

// 복잡한 example

// 원래 코드

if (x3 !== 3) {
  console.log(y);
  var y3 = 5;
  if (y3 === 5) {
    var x3 = 3;
  }
  console.log(y3);
}
if (x3 === 3) {
  console.log(y3);
}

/* 자바스크립트가 해석한 코드
var x3;
var y3;
if(x3 !== 3) {
    console.log(y3);
    y3 = 5;
    if(y3 === 5) {
        x3 = 3;
    }
    console.log(y3);
}
if(x3 === 3) {
    console.log(y3);
}
*/

// 원래 코드
var x4 = 3;
if (x4 === 3) {
  var x4 = 2;
  console.log(x4);
}
console.log(x4);

// 이 예제를 보면 같은 함수나 전역 스코프안에서 var로 새 변수를 만들수 없으며 let 문으로 가능했던 변수숨김도 불가능함을 알수 있습니다.

// 호이스팅을 알아야 할 이유: es6가 어디에서든 쓸수 있으려면 아직 시간이 더 필요하므로 es5로 트랜스컴파일을 해야합니다. 따라서 var 의 움직임을 알아야한다.
// 변수, 함수 선언 역시 끌어올린다는 점!
