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
