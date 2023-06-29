// 삭제되거나 정의되지 않는 요소들
// Array 메서드는 삭제되거나 정의되지 않은 요소를 다룰때 콜백함수를 호출하지 않습니다.
const arr = Array(10).map(function(x) {
  return 5;
});
const arr1 = [1, 2, 3, 4, 5];
delete arr1[2];
arr1.map(x => 0); // [0. 0. undefined, 0, 0];
