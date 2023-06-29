// closure
let globalFunc; // 정의되지 않는 전역 함수
{
  let blockVar = "a";
  globalFunc = function() {
    console.log(blockVar);
  };
}
globalFunc(); //"a"

// example

let f; // 정의 되지 않은 함수
{
  let o = { note: "Safe" };
  f = function() {
    return o;
  };
}
let oRef = f();
oRef.note = "Not so safe after all!";
