// 배열 검색
// indexOf 찾고자하는 것과 정확히 일치하는 첫번째 요소의 인덱스를 반환합니다.
// lastindexOf는 배열의 끝에서 검색합니다. 배열의 일부분만 검색하려면 시작 인덱스를 지정할 수 있습니다.
// 일치하는 것을 찾지 못하면 -1 를 반환합니다.
const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
arr.indexOf(5); //1
arr.lastIndexOf(5); //5
arr.indexOf("a"); //2
arr.lastIndexOf("a"); //2
arr.indexOf({ name: "Jerry" }); // -1
arr.indexOf(o); //3
arr.indexOf([1, 2]); // -1
arr.indexOf("9"); //7
arr.indexOf(9); // -1

arr.indexOf("a", 5); // -1
arr.indexOf(5, 5); // 5
arr.lastIndexOf(5, 4); // 1
arr.lastIndexOf(true, 3); // -1

// findIndex
// 일치하는 것을 찾지못하면 -1 반환 , 보조함수를 통해 검색조건을 다양하게 활용 가능, 검색을 시작할 인덱스를 지정할수 없다.
const arr1 = [
  { id: 5, name: "Judith" },
  { id: 7, name: "Francis" }
];
arr1.findIndex(o1 => o1.id === 5); // 0
arr1.findIndex(o1 => o1.name === "Francis"); // 1
arr1.findIndex(o1 => o1 === 3); // -1
arr1.findIndex(o1 => o1.id === 17); // -1

// find
// 요소 자체를 원할때 사용한다. 검색조건을 함수로 전달할수 있다. 조건에 맞는 요소가 없을 때 undefined를 반환

const arr2 = [
  { id: 5, name: "Judith" },
  { id: 7, name: "Francis" }
];
arr2.find(o2 => o2.id === 5); // 객체 { id: 5, name: "Judith"}
arr2.find(o2 => o2.id === 2); // undefined

// 특정 인덱스보다 뒤에 있는 제곱수를 찾아야하는 문제
const arr3 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))); // 4

// ID를 조건으로 Person 객체를 검색하는 예제
class Person {
  constructor(name) {
    this.name = name;
    this.id = Person.nextId++;
  }
}
Person.nextId = 0;
const jamie = new Person("Jamie"),
  juliet = new Person("Juliet"),
  peter = new Person("Peter"),
  jay = new Person("Jay");
const arr4 = [jamie, juliet, peter, jay];

// 옵션1: ID를 직접 비교하는 방법
arr4.find(p => p.id === juliet.id); // juliet 객체

// 옵션2: "this" 매개변수를 이용하는 방법
arr4.find(function(p) {
  return p.id === this.id;
}, juliet);

// 요소의 인덱스도 요소 자체도 필요없고 조건을 만족하는 요소가 있는지 없는지만 알면 충분할때
// some 과 every 메서드 사용하기

// some
// 조건에 맞는 요소를 찾으면 즉시 검색을 멈추고, true를 반환하며, 조건에 맞는 요소를 찾지못하면 false를 반환합니다.
const arr5 = [5, 7, 12, 15, 17];
arr5.some(x => x % 2 === 0); // true; 12는 짝수입니다.
arr5.some(x => Number.isInteger(Math.sqrt(x))); // false; 제곰수가 없습니다.

// every
// 배열의 모든 요소가 조건에 맞아야 true를 반환하며 그렇지 않으면 false를 반환합니다. 조건에 맞지 않은 요소를 찾아야만 검색을 멈추고 false를 반환합니다. 조건에 맞지않는 요소를 찾지못하면 배열 전체를 검색합니다.
const arr6 = [4, 6, 16, 36];
arr6.every(x => x % 2 === 0); // true; 홀수가 없습니다.
arr6.every(x => Number.isInteger(Math.sqrt(x))); // false; 6은 제곱수가 아닙니다.
