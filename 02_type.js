// number 타입
var integer = 10;
var double = 10.12;
var negative = -20;

var binary = 0b1010;  // 2진수
var octal = 0o127;    // 8진수 no
var hex = 0xff;   // 8진수

console.log("양수 :" + integer);
console.log("음수 :" + negative);
console.log("소수 :" + double);
console.log("2진수 :" + binary);
console.log("8진수 :" + octal);
console.log("16진수 :" + hex);

console.log(1/ 0);
console.log(-1 / 0);
console.log(Number("abc"));

// string
var string;
string = '작은 따옴표를 감싼 문자열에서는 "큰 따옴표"는 특수 기호로 사용 가능 합니다.';
console.log(string);
string = "큰 따옴표를 감싼 문자열에서는 '작은 따옴표'는 특수 기호롤 사용 가능합니다.";
console.log(string);
string = `작은 따옴표 사이에 또다시 작은 따옴표는 \' 이렇게 \` \\ 사용 가능합니다.`;
console.log(string);;

// 템플릿 리터럴
var name = "주현아";
var age = 56;
var height = 148;
var weight = 52;

console.log(`이름 : ${name}, 나이 : ${age}, 키 : ${height}, 몸무게 : ${weight}`);
console.log("이름 : " + name + ", 나이 : " + age + ", 키 : " + height + ", 몸무게 : ", + weight);

// boolean 타입
var isTrue = true;
var isFalse = false;
console.log(isTrue);
console.log(isFalse);

var num1 = 1;
console.log(num1 == isTrue); //컴퓨터는 1과 true를 컴퓨터는 같다고 이야기 함 그래서 리터럴이 중요

// undefined 타입
var isUndefined;
console.log(isUndefined);

var asUndefined;
console.log(isUndefined);

var asUndefined = 1;
asUndefined = undefined;  // 값이 없는 값을 저장할 수 있지만 이렇게 하면 안된다.
console.log(asUndefined);

// null타입
asUndefined = null // 값이 없게 저장하는 것이다. 값이 없는 것이 아니다.
console.log(asUndefined);
