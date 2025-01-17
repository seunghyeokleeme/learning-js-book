// reduce
// map이 배열의 각 요소를 변형한다면 reduce는 배열 자체를 변형합니다.
// 배열에 들어있는 숫자를 더하거나 평균을 구하는것은 배열을 값하나를 줄일수 있습니다.
// 하지만 reduce가 반환하는 값은 객체일수도 있고 다른 배열일 수 있습니다.
// map과 filter 와 배열 메서드 동작을 대부분 대신할수 있습니다.
// reduce는 map이나 filter 와 마찬가지로 콜백함수
// 그러나 전에 설명한 콜백함수와 다르게 첫번째 매개변수는 배열이 줄어드는 대상인 어큐뮬레이터입나다.
// 두번째 매개변수는 현재 배열 요소, 현재 인덱스, 배열 자체입니다.

// reduce는 초깃값으로 옵션을 받을 수 있습니다.

// 배열의 숫자를 더하는 단순한 예제
const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => (a += x), 0);
// reduce callback함수는 매개변수로 누적값a 와 현재 배열 요소 x를 받았습니다.
/*
1. 첫번째 배열요소 5에서 익명합수를 호출합니다. a의 초깃값은 0이고 x의 값은 5입니다.
   함수는 a 와 x(5)의 합을 반환합니다. 이 값은 다음 단계에서 a의 값이 됩니다.
2. 두번째 배열의 요소 7에서 함수를 호출합니다. a의 초깃값은 이전 단계에서 전달한 5이고, x의 값은 7입니다.
   함수는 a와 x의 합 12를 반환합니다. 이값은 다음 단계에서 a의 값이 됩니다.
3. 세번째 배열 요소 2에서 함수를 호출합니다. 이 단계에서 a는 12이고, x는 4입니다. 함수는 a와 x의 값은 14를 반환합니다.
4. 네번째 배열 요소 4에서 합수를 호출합니다. 이 단계에서 a는 14이고 x는 4입니다. 함수는 a와 x의 합인 18을 반환하여
 이값은 reduce의 값이고 sum에 할당되는 값입니다.
*/
// 누적값이 undefined로 시작한다면? 배열의 첫번째 요소가 그대로 초깃값이 될수 있을때는 초깃값 생략해도 됩니다.

// 영단어로 이루어진 배열이 있고 각 단어를 각 글자에 따라 묶는다면 reduce와 함께 객체를 쓸 수 있습니다.
const words = [
  "Beachball",
  "Rodeo",
  "Angel",
  "Aardvark",
  "Xylophone",
  "November",
  "Chocolate",
  "Papaya",
  "Uniform",
  "Joker",
  "Clover",
  "Bali"
];
const alphabetical = words.reduce((a, x) => {
  if (!a[x[0]]) a[x[0]] = [];
  a[x[0]].push(x);
  return a;
}, {});

// 배열의 모든요소에서 콜백함수는 전단계의 결과에 이 단어의 첫글자의 프로퍼터가 있는지 확인합니다.

// reduce는 통계에서도 사용할수 있습니다. 예를 들어 데이터 셋의 평균과 분산을 계산하는 예제
const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
const stats = data.reduce(
  (a, x) => {
    a.N++;
    let delta = x - a.mean;
    a.mean += delta / a.N;
    a.M2 += delta * (x - a.maen);
    return a;
  },
  { N: 0, mean: 0, M2: 0 }
);
if (stats.N > 2) {
  stats.variance = stats.M2 / (stats.N - 1);
  stats.stdev = Math.sqrt(stats.variance);
}

// reduce의 유연성을 알아보기 위해 사용한 예제
const words1 = [
  "Beachball",
  "Rodeo",
  "Angel",
  "Aardvark",
  "Xylophone",
  "November",
  "Chocolate",
  "Papaya",
  "Uniform",
  "Joker",
  "Clover",
  "Bali"
];
const longWords = words1
  .reduce((a, w) => (w.length > 6 ? a + " " + w : a), "")
  .trim();
const test = words1.filter(x => x.length > 6).join(" ");
