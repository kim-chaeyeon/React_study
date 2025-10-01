// 1. Number Type(숫자형)
let num1 = 27; // 정수
let num2 = 1.5; // 실수
let num3 = -20; // 음수

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2); // 곱셈
console.log(num1 / num2); // 나눗셈
console.log(num1 % num2); // 나머지
console.log(num1 ** num2); // 제곱

let inf = Infinity; // 양의 무한대
let negInf = -Infinity; // 음의 무한대
let nan = NaN; // 숫자가 아닌 값
console.log(1 * "hello");

// String Type(문자열)
let myName = "이정환";
let myLocation = "서울";
let introduce = myName + myLocation;
// 문자열은 덧셈 연산자를 지원함.
console.log(introduce);

// 템플릿 리터럴 문법(Template Literal)
let introduceText = `저는 ${myName}이고, ${myLocation}에 살고 있습니다.`;
// backtick(``)을 사용하면 변수의 값을 동적으로 문자열에 포함시킬 수 있다.
console.log(introduceText);

// Boolean Type(불리언형)
let isSwitchOn = true;
let isEmpty = false;
console.log(isSwitchOn);
console.log(isEmpty);

// Null Type(아무것도 없다)
let empty = null;
console.log(empty);

// Undefined Type (Undefined라는 단 하나의 값만 포함하는 특수 타입)
let none;
console.log(none);
