const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet() {
  return `Hello, I'm ${this.name}!`;
}

greet(); // "Hello, I'm undefined!" this는 어디에도 묶이지 않았습니다.
greet.call(bruce); // "Hello, I'm Bruce!" this는 bruce입니다.
greet.call(madeline); // "Hello, I'm Madeline!" this는 madline입니다.

console.log(bruce);
console.log(madeline);

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(bruce, 1949, "singer");
update.call(madeline, 1942, "actress");

console.log(bruce);
console.log(madeline);

// apply
// 함수 매개변수를 처리하는 방법을 제외하면 call 과 완전히 같습니다.
// call 은 일반적, apply는 배열로 받습니다.

update.apply(bruce, [1955, "actor"]);
update.apply(madeline, [1918, "writer"]);

console.log(bruce);
console.log(madeline);

const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr); // -5
Math.max.apply(null, arr); // 15
// this 값에 null을 쓴 이유는 Math.min과 Math.max가 this와 관계엾이 동작하기 때문...

// ... 사용 = apply 결과

const newBruce = [1940, "material artist"];
update.call(bruce, ...newBruce); // apply(bruce, newBruce) 와 같습니다.
console.log(bruce);
Math.min(...arr); // -5
Math.max(...arr); // 15

// bind
// this의 값을 영구히 바꿀수 있습니다.

const updateBruce = update.bind(bruce);

updateBruce(1940, "actor");
console.log(bruce);
updateBruce.call(madeline, 1274, "king");
console.log(bruce); // this는 bruce 그리고 새로운 정보만 업데이트
console.log(madeline); // madline은 변하지 않았습니다.
// bind는 매우 유용하지만 함수의 this가 어디에 묶이는지 정확히 파악하고 사용해야한다. 그러지 않을 경우는 매우 찾기 어려운 버그의 원인이 될수 있다.

//bind 에 매개변수를 넘기면 항상 그 매개변수를 받으면서 호출되는 새함수를 만드는 효과를 준다.
const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer");
console.log(bruce);
