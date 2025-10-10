//  1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20; // +=: 현재 변수에 값을 더한 뒤 다시 저장
num7 -= 20; // -=: 현재 변수에 값을 뺀 뒤 다시 저장
num7 *= 20;
num7 /= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
num8++; // 후위 증가: 현재 값 사용 후 +1 (다음에 반영됨)
num8--; // 후위 감소: 현재 값 사용 후 -1 (다음에 반영됨)
++num8; // 전위 증가: 바로 +1 적용됨
--num8; // 전위 감소: 바로 -1 적용됨

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

// 6. 비교 연산자
let comp1 = 1 == 2; // 값만 비교 (느슨한 비교)
let comp2 = 1 === 2; // 값 + 타입까지 비교 (엄격한 비교)
let comp3 = 1 !== 2; // 값 또는 타입이 다르면 true
let comp4 = 2 > 1; // 대소비교
let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
