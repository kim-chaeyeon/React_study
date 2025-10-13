// 1. 반복문 (for문)

// for (초기식;조건식;증감식) {
//   console.log("");
// }

for (let idx = 0; idx <= 100; idx++) {
  console.log("반복");
}

// 2. 반복문 + 조건문
for (let id = 1; id <= 5; id++) {
  console.log(id);

  if (id >= 5) {
    break;
  }
}

// 반복문의 특정 회차 건너뛰기
for (let ida = 1; ida <= 5; ida++) {
  if (ida % 2 === 0) {
    continue;
  }
  console.log(ida);
}
