var score = 95;


// if 문
// 컵퓨터 입장에서는 2번 일을 하는것이다.
if (score >= 90) console.log("합격입니다!");

if (score < 90) console.log("불합격 입니다.");


//if-else 문
// 컴퓨터 입장에서는 판별을 한번만 해서 훨씬 속도가 좋다.
if  (score >= 90) {
    console.log("합격입니다!.");
} else {
    console.log("불합격 입니다.!");
}

var age = 15;

// 19 이상 이거나 같으면 성인
if (age >= 19) {
    console.log("성인입니다.");
}
// 13 부터 18까지 청소년
if (age >= 13 && age < 19) {
    console.log("청소년입니다.");
}
// 13이하 어린이 입니다.
if (age < 13) {
    console.log("어린이입니다.");
}

// 다중 if
if (age >= 19) {
    console.log("성인입니다.");
}else if (age >= 13 && age < 19) {
    console.log("청소년입니다.");
} else {
    console.log("어린이 입니다.");
}

var dustLevel = 120;

if (dustLevel > 150) {
    console.log("경고");
} else if (dustLevel > 80) {
    console.log("주의");
}

if (dustLevel > 80) {    // 80초과하면 안에 있는 것을 실행 중첩  분기를 태우는 if 는  지양한다.
    if (dustLevel > 150) {   // 150초과 판별 이상 경고
        console.log("경고");
    } else {
        console.log("주의");  // 아니면 주의
    }
 }

switch (true) { //true 무조건 실행 코드 블록 전체를 실행한다. // 거의 대부분 if문을 쓴지만 2가지 동시 만족 시킬때는 break를 빼고 동시 실행좋다.
    case dustLevel > 150:
        console.log("경고");
        console.log("마스크를 꼭 착용해주세요");
        break; // 이것을 써야만 계속 실행하지 않고 나간다.
    case dustLevel > 80:
        console.log("주의")
}
// if와 swithch 형제관계

var fruit = "banana";

switch (fruit) {
    case "apple":  // case 는 조걱이 아니라 그냥 시작접이다.
        console.log("사과입니다.");
        // break;
    case "banana":
        console.log("바나나입니다.");
    case "melon" :
        console.log("멜론입니다.");
}

// 횟수를 줄여야 한다.
//  다중 if 문
var x = 10;
if (x > 0) {
    console.log("양수입니다.");
} else if (x < 0) {
    console.log("음수입니다.");
} else {
    console.log("0입니다.");
}

var day = "수요일";

switch (day) {
    case "월요일":
    case "화요일":
    case "수요일":
    case "목요일":
    case "금요일":
        console.log("평일입니다. 학원에 나오세요");
        break;
    case "토요일":
    case "일요일":
        console.log("주말입니다. 휴식하세요");
        // break는 생략을 해도 괜찮다.
}

// if문으로 만들면 // 반드시 식이여야 한다.
if (day === "월요일" || day ==="화요일" || day ==="수요일" || day ==="목요일" || day ==="금요일") {
    console.log ("평일입니다. 학원에 나오세요");
} else {
    console.log("주말입니다. 휴식하세요");
}

var color = 4;
switch (color) {
    case 1:
        console.log("빨간색");
        break;
    case 2:
        console.log("주황색");
        break;
    case 3:
        console.log("노란색");
        break;
    default: // else 와 같은 것이다. 나머지는
        console.log("모르겠어요");
        break;
    case 5:
        console.log("파란색");
}


// for 문
for (var i= 0; i <= 3; i++) { // 4번 돌고 5번째 탈락
    console.log(i + "출력");
    if (i == 2) { // 내가 2번 까지만 출력하고 싶을때
        break; // for 문 에서 break 쓰면 종료한다고 사용
    }
}

// 4번 돌고 5번째 탈락
for (var i= 0; i <= 3; i++) {
    console.log(`이 사이클은 ${i} 사이클`)
    if (i == 2) {
        continue; // 해당 사이트에서만 종료
        // break는 그것을 만나면 더이상 안한다.
    }
    console.log(i + "출력");
}

for (var i = 1;  ;i++) {  // 조건식을 생략할 수 있음 이렇게 되면 무한 루프
    console.log(i);
    if (i > 100) {
        break;
    }
}

// var num = 5;
// for (;;) {  // 아예 다 생략 가능하지만, 자릿수는 지켜줘야 함
    // if (num == 5 ) {
    // break;
// }

for (var i = 2; i <= 9; i++) {
    // i 가 2일때 부터, 9일때 까지 반복작업 =>  10d인 사이클에서 탈락
    for (var j = 2; j <= 9; j++) {
        // j가 2일 때부터, 9일 때까지 반족작어 => 10인 사이클에서 탈락
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

// 단축키 fori
// for (var i = 0; i < ; i++) {}


// 01. 문제
// 1부터 20까지의 숫자를 출력하되, 3의 배수일 때에만 숫자 대신 "짝"이라는 글자를 출력하기
console.log("----- 01. 문제 -----");
for (var i = 1; i <= 20; i++) {
    // 짝수 일때
    if(i % 3 === 0) {
       console.log("짝");
   } else {
        console.log(i);
    }
}


// 02. 문제
// 1부터 100까지 숫자를 반복 실행하다, 합계가 500이 넘는 순간, 그 숫자가 옃인지 출력하고 반복문 종료
var sum = 0;
console.log("--- 02. 문제 ---");
for(var i = 1; i <= 100; i++) {
    sum = sum + i;
    if (sum >= 500) {
        console.log(sum);
        break;
    }
}

// 03. 거꾸로
// 10부터 1까지 거꾸로 숫자를 출력하는데 짝수일 때만 숫자를 출력하기
console.log("--- 03. 문제 ---");
for (var i = 10; i >= 1; i--) {
    // 짝수 일때
    if(i % 2 === 0) {
        console.log(i);
    }
}

// 04. 특정 숫자 제외하고 출력
// 1부터 10까지 숫자를 출력하는데 7빼고 출력
console.log("--- 04. 문제 ---");
for (var i= 1; i <= 10; i++) {
    // console.log(`이 사이클은 ${i} 사이클`)
    if (i == 7) {
        continue; // 해당 사이트에서만 종료
        // break는 그것을 만나면 더이상 안한다.
    }
    console.log(i);
}

// 05.
// 05. string으로 된 글자에서 특정 단어를 제외하고 출력
// var text = JavaScript is powerful and fun!"; 이라는 text에서 "o"흫 제외하고 출력
console.log("--- 05. 문제 ---");
var text = "Javascript is powerful and fun!";
var result = 0; // "o"픞 만났을 때 갯수 카운팅을 할 변수

// text 라고 하는 변수는 string 타입이고, 그변수에서 .length를 사용하면 전체 자릿수가 나옴
for (var i = 0; i < text.length; i++) { // 0부터 쓰면 = 은 보통 빠진다
    if (text[i]  === "o") {
        result = result + 1;
    }
}
console.log(text.length); // 갯수 31
console.log(result);



// 2026년 03월 17일 문제
// 문제 1. 1부터 20 사이 숫자중 홀수만 출력하세요
for (var i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// 문제 2. 구구단 중 3단을 출력하세요
for(var i = 3; i <=3; i++) {
    for(var j = 2; j <=9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 문제 3. 1부터 100까지 중 짝수의 합을 구하세요
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
        sum = sum + i;
    }
}
console.log(sum);



// 문제 4. var str = "Javascript"를 역순으로 출력하세요
var str = "JavaScript";
var result = " ";
for(var i = str.length -1; i >=0; i--) { // 0부터 쓰면 = 은 보통 빠진다
  result = result + str[i];
}
console.log(result); // 갯수 31

// 문제 5. 1부터 100까지의 숫자중 4의 배수가 몇개인지 구하세요
var count = 0;
for(var i = 1; i <= 100; i++) {
    if(i % 4 === 0) {
        count++; // count = count +1;
    }
}
console.log(count);

