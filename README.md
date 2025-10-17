# 📘 JavaScript 기본 문법 정리

## 📑 목차
- [03. 변수 & 상수](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter03.js)
- [04. 변수 & 상수 (추가)](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter04.js)
- [05. 자료형](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter05.js)
- [06. 형 변환](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter06.js)
- [07. 연산자 ①](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter07.js)
- [08. 연산자 ②](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter08.js)
- [09. 조건문](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter09.js)
- [10. 조건문](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter10.js)
- [11. 함수](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter11.js)
- [12. 함수 표현식과 화살표 함수](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter12.js)
- [13. 콜백함수](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter13.js)
- [14. 스코프](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter14.js)
- [15. 객체 ①](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter15.js)
- [16. 객체 ②](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter16.js)
- [17. 배열](https://github.com/kim-chaeyeon/React_study/blob/main/section01/chapter17.js)
- [01. Truthy와 Falsy](https://github.com/kim-chaeyeon/React_study/blob/main/section02/chapter01.js)
- [index.html 실행 페이지](https://github.com/kim-chaeyeon/React_study/blob/main/section01/index.html)

## 📘 변수와 상수 정리
작성일: 2025.09.26 (금)

### 1. 변수 (let)
```javascript
let age = 24;
```
- 프로그램 실행 중에 값을 바꿀 수 있는 저장소

### 2. 상수(const)
```javascript
const name = "KIM";
```
- 값을 저장한다는 것은 변수와 동일 but **초기화 이후 값 변경이 불가능**

### 3. 변수 명명규칙(Naming Rules)
- $, _ 제외한 기호는 사용할 수 없다.
- 숫자로 시작할 수 없다.
- 예약어는 사용할 수 없다.

## 📘 자료형
작성일: 2025.10.01 (수)

### 1. 자료형(Type)
- 자료형 = 집합
- 동일한 속성이나 특징을 가진 원소들을 묶은 것.
- ex) 고양이, 강아지는 "동물"이라는 집합으로 묶임

<img width="716" height="444" alt="스크린샷 2025-10-01 오후 3 15 51" src="https://github.com/user-attachments/assets/1ad3fc9f-71a1-44e4-b460-948a110edbdf" />

### 2. 원시타입
- 기본형 타입이라고 불림
- 프로그래밍에 있어 가장 기본적인 값들의 타입을 의마함.

### 3. Number (숫자형)
- 사칙연산(+ - * /), 나머지(%), 제곱(**)등 지원
- Infinity(양의 무한대), -Infinity(음의 무한대), NaN 존재

### 4. String (문자열)
- 문자열은 덧셈 연산 가능
- 백틱(```)과 ${}로 템플릿 리터럴 지원

### 5. Boolean (불리언)
- 참(true), 거짓(false) 표현

### 6. Null
```javascript
let empty = null;
```
- “값이 없음”을 의미하는 특수 타입

### 7. Undefined
```javascript
let none;
```
- 값이 할당되지 않은 변수의 기본값

### 8. Null과 Undefined의 차이
#### Null
- 직접 명시적으로 변수에 항당을 해줘야 되는 값
- 변수에 지금 어떠한 값도 없다를 표현할 때 사용
##### Undefined
- 진짜 변수를 선언하고 아무런 값도 하당하지 않았을 때 자동으로 들어가는 값
- 변수를 미처 초기화하지 못했거나 or 존재하지 않는 값을 불러오려고 할 때 발생하는 값

## 📘 형 변환
작성일: 2025.10.02(목)

### 1. 형 변환 (Type casting)
- 어떤 값의 타입을 다른 타입으로 변경하는 것
<img width="708" height="255" alt="스크린샷 2025-10-01 오후 4 28 13" src="https://github.com/user-attachments/assets/9bd927ea-5f30-479b-b032-1224c0fd1a30" />
<img width="568" height="157" alt="스크린샷 2025-10-01 오후 4 25 14" src="https://github.com/user-attachments/assets/c32c4de9-96e4-4bff-b810-74db8720a0a3" />

### 2. 묵시적 형 변환 (암묵적 형 변환)
- 개발자가 직접 설정하지 않아도 알아서 자바스크립트엔진이 형 변환 하는 것

### 3. 명시적 형 변환
- 개발자가 직접 함수 등을 이용해 형 변환을 일으킴.

### 4. parseInt
- 숫자 값을 포함하고 있는 문자열도 숫자 값으로 변환.
- but 문자가 앞에 오고 숫자가 뒤에 오는 경우는 형 변환이 잘 안됨.

## 📘 연산자 ①
작성일: 2025.10.10(금)

### 1. 연산자
- 프로그래밍에서의 다영한 연산을 위한 기호, 키워드를 말함

### 2. 대입 연산자
- 대입 연산자는 변수에 값을 저장

### 3. 산술 연산자
- `+`
- `-`
- `*`
- `/`
- `%`

### 3. 복합 대입 연산자
- `+=` 현재 변수에 값을 더한 뒤 다시 저장
- `-=` 현재 변수에 값을 뺀 뒤 다시 저장
- `*=` 현재 변수에 값을 곱한 뒤 다시 저장
- `/=` 현재 변수에 값을 나눈 뒤 다시 저장
- `%=` 현재 변수에 값을 나눈 나머지를 다시 저장

### 4. 증감 연산자
- `num++` 후위 증가: 현재 값 사용 후 +1 (다음에 반영됨)
- `num--` 후위 감소: 현재 값 사용 후 -1 (다음에 반영됨)
- `++num` 전위 증가: 바로 +1 적용됨
- `--num` 전위 감소: 바로 -1 적용됨

### 5. 논리 연산자
- `||` or
- `&&` and
- `!` not

### 6. 비교 연산자
- `==` 값만 비교 (느슨한 비교)
- `===` 값 + 타입까지 비교 (엄격한 비교)
- `!==` 값 또는 타입이 다르면 true
- `>` 대소비교

## 📘 연산자 ②
작성일: 2025.10.13(월)

### 1. null 병합 연산자
`??` 
- 존재하는 값을 추려내는 기능
- null, undefined가 아닌 값을 찾아내는 연산자
- null, undefined값이 없으면 맨 처음의 값을 반환

### 2. typeof 연산자
- 값의 타입을 문자열로 반환하는 기능을 하는 연산자

### 3. 삼항 연산자
- 항을 3개 사용하는 연산자
- 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
```javascript
let res = var6 % 2 == 0 ? "짝수" : "홀수";
```
- ? 앞에는 조건식, ? 뒤에는 참일 때 반환 값, : 뒤에는 거짓일 때 반환 값을 적으면 됨.

## 📘 조건문

### 1. 조건문 (conditional Statement)
- 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
- 대표적으로 if, Switch 조건문이 존재함.
<img width="643" height="253" alt="스크린샷 2025-10-13 오후 12 53 01" src="https://github.com/user-attachments/assets/7de4e009-e812-450d-943e-966d36ffaba6" />

### 2. if 조건문 (if문)
- if: 가장 먼저 검사되는 조건문
- else if: 첫 번째 조건이 거짓일 때, 추가로 검사할 조건
- else: 위의 모든 조건이 거짓일 때 실행되는 코드

### 3. Switch문
- if문과 기능 자체는 동일
- 다수의 조건을 처리할 때 if보다 더 직관적이다.
- Switch문은 거의 모든 case에 break를 넣어줘야 됨.
- default: 어떤 case에도 해당하지 않을 때 실행되는 기본 동작

## 📘 반복문

### 1. 반복문 (Loop, Iteration)
- 어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법
```javascript
for (초기식;조건식;증감식) {
  console.log("");
}
```
#### 초기식
```javascript
for (let i = 0; ... ; ...)
```
- 반복이 시작될 때 한 번만 실행되는 부분
- 주로 **반복 횟수를 세는 변수(i)**를 선언하고 초기값을 설정할 때 사용

#### 조건식
```javascript
for (... ; i < 5 ; ...)
```
- 매 반복마다 검사되는 조건
- 이 조건이 true일 때만 반복문 안의 코드가 실행, false가 되면 반복이 멈춤

#### 증감식
```javascript
for (... ; ... ; i++)
```
- 반복이 한 번 끝날 때마다 실행되는 부분
- 주로 반복 변수를 증가시키거나 감소시킴

### 2. 반복문 + 조건문
- for문 안에서 if문을 사용하면 특정 조건일 때만 실행하거나, 특정 상황에서 반복을 멈추거나 건너뛰는 동작을 만들 수 있음

#### (1) break : 반복문을 즉시 종료하기
#### (2) continue : 특정 회차만 건너뛰기

## 📘 함수
작성일: 2025.10.15(수)

### 함수
- 특정 동작을 하나의 코드 블록으로 묶어놓은 것
- 필요할 때 호출해서 실행할 수 있음

### 중복으로 작성된 코드의 문제점
- 동일한 기능을 일일이 타이핑 해야 됨
- 향후 코드 수정시 문제가 될 수 있음
- => 함수로 해결 가능

### 1. 함수 선언
```javascript
function 함수이름() {
  실행할 코드
}
```
- 함수 선언만으로 실행되지 않음, 함수를 호출해야 됨.

### 2. 함수 호출
```javascript
함수이름();
```
- 괄호()를 붙여야 실제로 함수가 실행됨

### 3. 중첩 함수
- 함수 안에 또 다른 함수를 정의할 수 있음.

### 호이스팅
- 끌어올리다라는 뜻
- JS에서는 선언이 호출보다 밑에 있어도 정상적으로 실행이 됨.

## 📘 함수 표현식과 화살표 함수

### 1. 함수 표현식
- 익명함수: 값으로써 함수를 생성하는 방식
- 호스팅이 되지 않음
```javascript
const(또는 let) 함수이름 = function(매개변수) {
  실행할 코드
  return 결과값;
};
```

### 2. 화살표 함수
```javascript
const(또는 let) 함수이름 = (매개변수) => {
  실행할 코드
  return 결과값;
};
```

## 📘 콜백함수

### 1. 콜백함수
- 자신이 아닌 다른 함수의 인수로써 전달된 함수를 의미함
- 함수 안에 또 다른 함수를 넣어서. 나중에 실행시키는 것

### 콜백 함수 기본형
```javascript
// 콜백함수를 받는 함수
function main(콜백함수) {
  // 콜백함수를 실행
  콜백함수();
}

// main을 호출할 때, 함수(콜백)를 인수로 전달
main(() => {
  console.log("이건 콜백 함수가 실행된 거야!");
});
```
- main 함수는 다른 함수를 인수로 전달받음
- main 안에서 콜백함수()를 실행하면 → 전달된 함수가 “나중에” 실행됨

## 📘 스코프
작성일: 2025.10.16(목)

### 1. 스코프
- 우리말로 **범위**를 뜻함
- 변수나 함수에 접근하거나 호출할 수 있는 범위를 말 함
<img width="578" height="198" alt="스크린샷 2025-10-16 오후 12 41 04" src="https://github.com/user-attachments/assets/356cecf8-2278-4d56-aeae-f4d1bc660e70" />

### 2. 전역 스코프 (Global Scope)
- 코드 전체(어디서든)에서 접근 가능한 영역
- 함수 바깥에서 선언된 변수는 전역 변수가 됩니다.

### 3. 지역 스코프 (Local Scope)
- 함수, if문, for문 등 블록 {} 내부에서만 접근 가능한 영역
- 블록 안에서 선언된 변수는 바깥에서 사용할 수 없습니다.

## 📘 객체 ①

### 1. 객체
- 객체는 하나의 변수에 여러 데이터를 **"key: value” 쌍**으로 묶어서 저장하는 자료형이다.
- 객체를 이용하면 현실세계의 존재하는 어떤 사물이나 개념을 표한하기 용이하다.

### 2. 객체 생성 방법
#### 2.1 생성자 방식
```javascript
let obj1 = new Object();
```
#### 2.2 리터럴 방식
- 가장 많이 사용
```javascript
let obj2 = {};
```

### 3. 객체 프로퍼티 (속성)
- 프로퍼티(Property) = key(이름) + value(값)
- key: 문자, 숫자 가능
- key에 띄어쓰기 있을 경우 반드시 따옴표 사용
- value: 모든 자료형 가능 (문자, 숫자, 배열, 객체, 함수 등)

### 4. 객체 프로퍼티 다루기

### 4.1 특정 프로퍼티에 접근
#### 4.1.1 점표기법
```javascript
obj.key
```
#### 4.1.2 괄호 표기법
- 가장 많이 사용
```javascript
obj["key"];
```

### 4.2. 새로운 프로퍼티를 추가하는 방법
#### 4.2.1 점표기법
```javascript
obj.newKey = 값
```
#### 4.2.2 괄호 표기법
```javascript
obj[newKey] = "값"
```

### 4.3. 프로퍼티를 수정하는 방법
#### 4.3.1 점표기법
```javascript
obj.Key = New값
```
#### 4.3.2 괄호 표기법
```javascript
obj[Key] = "New값"
```

### 4.4. 프로퍼티를 삭제하는 방법
#### 4.4.1 점표기법
```javascript
delete obj.key;
```
#### 4.4.2 괄호 표기법
```javascript
delete obj[key];
```

### 4.5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
```javascript
"key" in obj
```

## 📘 객체 ②

### 1. 상수 객체 (Constant Object)
- const로 선언된 객체도 내부 값(프로퍼티)은 변경 가능
- 단, 객체 자체를 새로운 객체로 재할당하는 건 불가능

### 2. 메서드 (Method)
- **객체의 동작(기능)**을 정의한 함수 형태의 프로퍼티
- 즉, **객체의 행동**을 나타낸다.
#### 2.1 메서드
```javascript
obj.method = function() {
  
}
```
#### 2.2 메서드 호출
```javascript
obj.method() // 점표기법

obj["method"]() // 괄호표기법
```

## 📘 배열
작성일: 2025.10.17(금)

### 1. 배열
- 여러개의 값을 **순차적**으로 담을 수 있는 자료형
- 각 요소는 **인텍스(index)로 접근하며, **0부터 시작**한다
<img width="728" height="206" alt="스크린샷 2025-10-17 오후 12 59 27" src="https://github.com/user-attachments/assets/7c80e807-9352-4e64-a833-5935cd008b29" />

### 2. 배열 생성
#### 2.1 배열 생성자
```javascript
let arrA = new Array();
```
#### 2.2 배열 리터럴
```javascript
let arrB = [];
```
- 리터럴 방식([]) 이 가장 일반적이고 간결하게 사용됩니다.

### 3. 배열의 요소
- 배열에는 숫자, 문자열, 불린, 함수, 객체 등 모든 자료형을 넣을 수 있음
- 길이에도 제한이 없음

### 4. 배열 요소 접근
#### 4.1 특정 요소 가져오기
```javascript
arr[0]
```
#### 4.2 요소 값 변경
```javascript
arr[0] = "변경값";
```
#### 4.3 인덱스
```javascript
arr[1], arr[2]
```

## 📘 Truthy와 Falsy

### Truthy & Falsy 값
- 자바스크립트에서 참(true)이나 거짓(false)이 아닌 값도 조건문 안에서 자동으로 참 또는 거짓처럼 평가됨

### Falsy 값
```javascript
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // BigInt 0
```
- 7가지 값들은 항상 거짓(false)으로 평가

### Truthy 값
```javascript
let t1 = "hello"; // 문자열
let t2 = 123;     // 숫자
let t3 = [];      // 빈 배열
let t4 = {};      // 빈 객체
let t5 = () => {}; // 함수
```
- 위의 7가지 Falsy 값을 제외한 나머지 모든 값은 Truthy (참) 로 평가
