// 객체와 객체지향 프로그래밍
// 프로퍼티의 나열
// 프로퍼티의 나열에는 순서가 보장되지 않는다.

// for ... in

const SYM = Symbol();

const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

for (let prop in o) {
  if (!o.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${o[prop]}`);
}
/* 결과
a: 1
b: 2
c: 3
undefined 
 */

//  hasOwnProperty 는 상속된 프로퍼티가 for...in에 나타날 위험을 제거하기 위해 사용합니다. 이러한 습관을 들이길 권합니다.
// for...in 루프에는 키가 심볼인 프로퍼티는 포함되지 않습니다.
// 배열에서는 for...in은 좋은 생각이 아닙니다. 배열에는 일반적으로 for루프나 forEach를 사용하십시오.

// Object.keys
// 객체에서 나열가능한 문자열 프로퍼티를 배열로 반환합니다.

const SYM1 = Symbol();

const o1 = { a: 1, b: 2, c: 3, [SYM1]: 4 };

Object.keys(o1).forEach(prop => {
  console.log(`${prop}: ${o1[prop]}`);
});
// for...in 루프를 썼을때 같은 결과이고 hasOwnProperty를 체크할 필요는 없습니다.
// 객체의 프로퍼티를 배열로 가져왔을때 Object.keys가 편리합니다.
const o2 = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };

Object.keys(o2)
  .filter(prop => prop.match(/^x/))
  .forEach(prop => console.log(`${prop}: ${o2[prop]}`));
// 결과: 객체에서 x로 시작하는 프로퍼티를 모두 출력하는 결과이다.
