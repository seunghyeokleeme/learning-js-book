/*
 if...else 문의 목적이 변수의 값을 얻는 것이라면(할당이든, 표현식의 일부분이든, 함수의 반환값이든)
 일반적으로 if...else 대신 3항 연산자를 쓰는 편이 더 좋습니다. 3항 연산자를 쓰면 코드는 더 간단해지고 읽기 쉽습니다.
*/
if (isPrime(n)) {
  label = "prime";
} else {
  label = "non-prime";
}

// 앞의 코드는 다음과 같이 바꾸면 좋습니다.

label = isPrime(n) ? "prime" : "non-prime";

// 할당이 주 목적인 if문은 단축평가를 사용하는 or 표현식을 써서 간결하게 줄일수 있습니다.
// 3항 연산자는 if...else 문보다 거의 항상 좋지만 단훅평가는 뚜렷하게 무엇이 좋다고 말하기는 어렵습니다.
// 하지만 매우 자주 사용하는 패턴이므로 알아두는 편이 더좋습니다. 다음 코드를 보십시오.

if (!options) options = {};

// 앞의 코드를 다음과 같이 쓸수 있습니다.

options = options || {};
