// 함수 선언
/*
function 선언할 함수 이름 () {
  함수가 실행해야 하는 코드
}
*/
// 함수를 선언한다고 실행되는게 아니고 호출해야 실행됨.
/*
function greeting() {
  console.log("안녕하세요!");
}
*/

// 함수 호출
// 함수를 호출할 때는 ()를 반드시 작성해야 됨.
// greeting();

// 함수 내에 또 다른 함수를 만들 수 있음.
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();
  let area = width * height;

  return area;
}

let area1 = getArea(10, 20);
console.log(area1);

// 호이스팅
// JS에서는 선언이 호출보다 밑에 있어도 정상적으로 실행이 됨.
// -> 끌어올리다 라는 뜻
