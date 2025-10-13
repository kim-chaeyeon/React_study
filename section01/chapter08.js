// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자
// null, undefined값이 없으면 맨 처음의 값을 반환

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var5 = 1;
var5 = "hello";

let t1 = typeof var5;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var6 = 10;

// 요구사항: 변수 res에 var6의 값이 짝수면 "짝", 홀수면 "홀"
let res = var6 % 2 == 0 ? "짝수" : "홀수";
console.log(res);
// ? 앞에는 조건식, ? 뒤에는 참일 때 반환 값, : 뒤에는 거짓일 때 반환 값을 적으면 됨.
