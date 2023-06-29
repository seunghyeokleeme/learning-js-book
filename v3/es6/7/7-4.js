// 블록 스코프
console.log("before block");
{
  console.log("inside block");
  const x = 3;
  console.log(x); // x is 3
}
console.log(`outside block; x=${x}`); // ReferenceError: x는 정의되지 않습니다.
