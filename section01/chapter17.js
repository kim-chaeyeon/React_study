// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴(대부분 사용)

// 배열에는 아무 값이 들어가도 됌, 길이의 한계도 없음
let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근
// 배열은 0부터 시작
let item1 = arrC[0];
let item2 = arrC[1];

// 배열 수정
arrC[0] = "hello";
console.log(arrC);
