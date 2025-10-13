// 1. if 조건문 (if문)
let num = 5;

if (num >= 10) {
  console.log("num은 10이상입니다.");
} else if (num >= 5) {
  console.log("num은 5이상입니다.");
} else {
  console.log("5이하 입니다.");
}

// 2. Switch문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.
// Switch문은 거의 모든 case에 break를 넣어줘야 됨.
// default: 어떤 case에도 해당하지 않을 때 실행되는 기본 동작

let animal = "cat";
switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("검색어가 없습니다.");
  }
}
