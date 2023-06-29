// 문자열 병합
// Array.prototype.join 은 매개변수로 구분자 하나를 받고, 요소들을 하나로 합친 문자열을 반환합니다.
// 이 매개변수를 생략했을때 기본값은 쉼표이며 문자열을 하나로 합쳤을때 정의되지 않은 요소, 삭제된 요소, null, undefined는 모두 빈 문자열을 취급합니다.
const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
arr.join(); // "1,,hello,,true,"
arr.join(""); // "Ihellotrue"
arr.join("--"); // "I -- -- hello -- -- true --"
