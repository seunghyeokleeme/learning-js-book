// map 과 filter
// map --> (사본 반환)
// 배열 요소를 변형합니다. 일정한 형식의 배열을 다른 형식으로 바꿔야하면 필요하다.
const cart = [
  { name: "Widget", price: 9.95 },
  { name: "Gadget", price: 22.95 }
];
const name = cart.map(x => x.name); // ["Widget", "Gadget"]
const prices = cart.map(x => x.price); // [9.95, 22.95]
const discountPrices = price.map(x => x * 0.8); // [7.96, 18.36]

// 두 배열에 상품과 가격이 따로 저장되어 있는 이 둘을 객체로 결합하기
const items = ["Widget", "Gadget"];
const prices1 = [9.95, 22.95];
const cart1 = items.map((x, i) => ({ name: x, price: prices1[i] }));
// cart1 : [{ name: "Widget", price: 9.95}, { name: "Gadget", price: 22.95}]
// 이 예제가 map 함수의 가능성을 잘표현한것
// 요소자체 x만 사용하지 않고 인덱스i를 사용했다. 이유: items의 요소와 prices1의 요소를 인덱스에 따라 결합하기 위해서..
// map은 다른 배열에서 정보를 가져와서 문자열로 이루어진 배열을 객체 배열로 변형하였다.

// filter --> (사본 반환)
// 배열에서 필요한것들만 남길 목적으로 만들어졌습니다.

// 카드 덱을 만듭니다.
const cards = [];
for (let suit of ["H", "C", "D", "S"]) // 하트, 클로버, 다이아몬드, 스페이드
  for (let value = 1; value <= 13; value++) cards.push({ suit, value });

// value 가 2인 카드
cards.filter(c => c.value === 2);
/*
[
    { suit: 'H', vlaue: 2},
    { suit: 'C', vlaue: 2},
    { suit: 'D', vlaue: 2},
    { suit: 'S', vlaue: 2},
]
*/

// 다이아몬드
cards.filter(c => c.suit === "D");

// 킹, 퀸, 주니어
cards.filter(c => c.value > 10);

// 하트의 킹, 퀸, 주니어
cards.filter(c => c.value > 10 && c.suit === "H");

// map과 filter 결합의 예제
const cards = [];
for (let suit of ["H", "C", "D", "S"]) // 하트, 클로버, 다이아몬드, 스페이드
  for (let value = 1; value <= 13; value++) cards.push({ suit, value });

function cardToString(c) {
  const suits = { H: "\u2665", c: "\u2663", D: "\u2666", S: "\u2660" };
  const values = { 1: "A", 11: "J", 12: "Q", 13: "K" };
  for (let i = 2; i <= 10; i++) values[i] = i;
  return values[c.value] + suits[c.suit];
}

// value가 2인 카드
cards.filter(c => value === 2).map(cardToString); //(4) ["2♥", "2♣", "2♦", "2♠"]

// 하트의 킹, 퀸, 주니어
cards.filter(c => c.value > 10 && c.suit === "H").map(cardToString);
