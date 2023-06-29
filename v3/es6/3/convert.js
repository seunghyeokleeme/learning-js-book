const numStr = "33.3";
const num = Number(numStr);

const a = parseInt("3a", 16); // 16진수 3a를 10진수로 바꿉니다. 결과는 58입니다.
const b = parseFloat("15.5 kph"); // "kph"는 무시합니다. parseFloat는 항상 기수가 10이라 가정합니다.
const d = new Date(); // 현재 날짜
const ts = d.valueOf(); // UTC 1970년 1월 1일 자정으로부터 몇밀리초가 지나갔는지 나타내는 숫자

// const b = true;
// const n = b ? 1 : 0;

const y = 33.5;
y; // 33.5 - 숫자
const s = y.toString();
s; // "33.5" - 문자열

const arr = [1, true, "hello"];
arr.toString();

const n = 0; // 거짓 같은 값
const b1 = !!n; // false
const b2 = Boolean(n); // false
