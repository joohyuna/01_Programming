var a = 10;
var b = 3;
console.log("----- 산술 연산자 -----");


console.log("a = ", a);
console.log("b = ", b);

console.log("a + b = ", a + b);  // 덧셉
console.log("a - b = ", a - b);  // 뺄셈
console.log("a * b = ", a * b);  // 곱셉
console.log("a / b = ", a / b);  // 나눗셉
console.log("a % b = ", a % b );  // 나머지
console.log("a ** b = ", a ** b);  // 거듭제곱 승 계산법

console.log(`a % b = ${a % b}`);

console.log("----- 비교 연산자 -----");

var x = 5;
console.log("x =", x);  // 5

console.log("x++ =", x++);  // 출력 후 1 증가 // 5
console.log("x = ", x);  // 6

console.log("++x =", ++x);  // 1증가 후 출력 // 7
console.log("x =", x); // 7

console.log("x-- =", x--);  // 출력후 1 감소  // 7
console.log("x =", x);  // 6

console.log("--x =", --x);  // 1 감소 후 출력 // 5
console.log("x =", x);  // 5

console.log("----- 연결 연산자 -----");
// 형변환은 2가지가 있다
// 암묵적 형변환 문자와 숫자가 있으면 문자로 변환

var num1;  //  이 파일 한개가 프로그램 이다. 같은 변수 명을 2번 사용 할 수 없다.
num1 = 10;  // "=" 은 할당 연산자

num1 += 5;   // x = x + 5;  이걸 줄여서 썼을 뿐
num1 -= 5;   // x = x - 5;

var num2 = 1;
var bool1 = true;

console.log(num2 == bool1);  // 1 == true // == 는 값만 비교 // true
console.log(num2 === bool1);   // 1 === true  // === 는 값돠 타입이 같은지 비교 // false

console.log("----- 삼함 연산자 -----");
// 삼항 연산자
// 사용법 : 조건식 ? 참일 때 실행되는 코드 : 거짓일때 실행되는 코드
//          조건식 -> 비교 연산자를 사용한 '식(표현식)'이 써져야 함 -> 결과는 true, false로 나오는 식

var result = num2 === bool1 ? "같다" : "다르다";
console.log(result);

var year = 1985;
var result2 = year <= 1987 ? "1980 이전" : "1980 이후";
console.log(result2);

var result3 = true ? true : false; // 이렇게 해도 가능은 하지만 쓰지 않는다
console.log(result3);

var result4 = 10 ? true : false;  // 10은 값이 있다고 생각해서 true  // 조건식
console.log(result4);

var result5 = 0 ? true : false;  // 0은 값이 없다고 생각해서 false // 조건식에서
console.log(result5);

// 논리합 (||) => 둘중에 하나라도 true면 true
// 이사람이 로그인이 되어야함 만 하고
var loginUser = "admin";
var gender = "male";

var result6 = loginUser === "admin" || gender === "female";
console.log(result6);

// 논리곱 ( && ) => 둘다 true 여야 true
var result7 = loginUser === "admin" && gender === "female";
console.log(result7);

//부정 연산자 (!)
var result8 = !true;  //false
var result9 = !false;  //true
var result10 = !(loginUser === "admin"); // false
var result11 = !loginUser;  // false
var result12 = !!loginUser; // true => 값이 있는지 없는지 판별

// typeof 연산자 => 데이터 타입을 문자열로 변환
console.log(typeof result2);

if (typeof x === "number") {
    x++;
}

var eee = typeof x === "number" ? x++ : x;

var type = typeof x;  // "number"