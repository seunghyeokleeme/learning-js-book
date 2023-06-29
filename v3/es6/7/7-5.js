// 변수 숨기기
{
  // block 1
  const x = "blue";
  console.log(x); //"blue"
}
console.log(typeof x); // "undefined"; x는 다른 스코프 밖에 있습니다.
{
  // block 2
  const x = 3;
  console.log(x); // "3"
}
console.log(typeof x); // "undefined"; x는 다른 스코프 밖에 있습니다.

// 스코프가 중첩되어 있는 경우
{
  // 외부 블록
  let x = "blue";
  console.log(x); // "blue"
  {
    // 내부 블록
    let x = 3;
    console.log(x); // "3"
  }
  console.log(x); // "blue"
}
console.log(typeof x); // "undefined": x는 스코프에 있지 않습니다.

// 변수의 이름이 같으면 외부 스코프에 있는 변수에 접근할수 있는 방법이 없다.
// 하지만 이전 스코프를 떠나지 않아도 새 스코프에 진입할수 있다. ==> 스코프의 계층적 이해

{
  // 외부 블록
  let x = { color: "blue" };
  let y = x; // y와 x는 같은 객체를 가리킵니다.
  let z = 3;
  {
    // 내부 블록
    let x = 5; // 이제 바깥의 x는 가려졌습니다.
    console.log(x); // 5
    console.log(y.color); // "blue"; y가 가리키는 , x가 가리키는 객체는 스코프 안에 있습니다.
    y.color = "red";
    console.log(z); // 3; z는 숨기지 않았습니다.
  }
  console.log(x.color); // "red"; 객체는 내부 스코프에서 수정했습니다.
  console.log(y.color); // "red"; x와 y는 같은 객체를 가리킵니다.
  console.log(z); // 3;
}
