// let currentTempC = 22; // 섭씨온도
// // 변수 선언(생성) & 초깃값 할당
// currentTempC = 22.5;
// // 값 변경

// let targetTempC; // let targetTempC = undifined; 와 같습니다.

// let targetTempC,
//   room1 = "conference_room_a",
//   room2 = "lobby";

// const ROOM_TEMP_C = 21.5,
//   MAX_TEMP_C = 30;

// let room1 = "conference_room_a"; // "conference_room_a" (따옴표 안)은 리터럴입니다.

// let currentRoom = room1; // 이제 currentRoom의 값은 room 1의 값("conference_room_a")과 같습니다.

// currentRoom = conference_room_a; // 에러가 일어납니다. conference_room_a란 식별자가 존재하지 않습니다.

let count = 10;
// 숫자 리터럴, count는 더블입니다.
const blue = 0x0000ff;
// 16진수, 16진수 ff는 10진수 255와 같습니다.
const umask = 0o0022;
// 8진수, 8진수 22는 십진수 18과 같습니다.
const roomTemp = 21.5;
// 십진수
const c = 3.0e6;
// 지수 (3.0 x 10^6 = 3,000,000)
const e = -1.6e-19;
const Inf = Infinity;
const ninf = -Infinity;
const Nan = NaN;
// 숫자가 아님

const small = Number.EPSILON; // 1에 더했을때 1과 구분되는 결과를 만들수 있는 가장 작은 값입니다. 근사치는 2.2e-16입니다.
const bigInt = Number.MAX_SAFE_INTEGER; // 표현할수 있는 가장 큰 정수
const max = Number.MAX_VALUE; // 표현할수 있는 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER; // 표현할수 있는 가장 작은 정수
const min = Number.MIN_VALUE; // 표현할수 있는 가장 작은 숫자
const nInf = Number.NEGATIVE_INFINITY; // -Infinity
const nan = Number.NaN; // NaN
const inf = Number.POSITIVE_INFINITY; // Infinity
