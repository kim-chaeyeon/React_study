function funcA() {
  // console.log(funcA);
}

let varA = funcA;
varA();

// 1. 함수 표현식
// 값으로써 함수를 생성하는 방식
// 호이스팅이 되지 않음.
let varB = function () {
  // 익명함수
  // console.log(funcB);
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
