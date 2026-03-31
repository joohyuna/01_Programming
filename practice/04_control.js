// 01. 문제
// 1. 부터 20까지 숫자를 출력하되, 3의 배수일 때에만 숫자 대신 "짝" 이라는 글자를 출력하기
console.log("--- 01. 연슴문제 ---");
for (var i = 1; i <=20; i++) {
    if (i%3 === 0) {
        console.log("짝");
    } else {
        console.log(i);
    }
}



// 02 문제
//1 부터 100까지 숫자를 반복 실행하다. 합계가 500이 넘는 순간, 몇인지 출력하고 반복문 종료
console.log('-- 02. 연습문제 --');
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum = sum + i;
    if (sum >= 500) {
        console.log(sum);
        break;
    }
}

// 03 문제
// 10부터 1까지 거꾸로 숫자를 출력하는데 짝수일 때만 숫자를 출력하기
console.log("-- 03. 연습문제 --");
for (var i = 10; i >= 1; i-- ) {
    if (i%2 === 0) {
        console.log(i);
    }
}

// 04 문제
// 특정 숫자 제외하고 출력
// 1부터 10까지 숫자를 출력하는데 7빼고 출력
console.log("-- 04. 연습문제 --");
for (var i = 1; i <= 10; i++) {
    if (i === 7) {
        continue;
    }
    console.log(i);
}

// 05 문제
// strong으로 된 글자에서 특정 단어 "o를 만났을 때 숫자를 합산해서 출력
// var text = Javascript is powerful and fun!
console.log("-- 05. 연습문제 --");
var text = "Javascript is powerful and fun!";
var result = 0;
for (var i = 0; i < text.length; i++) {
    if (text[i] === "o") {
        result = result + 1;
    }
}
console.log(text.length);

// 2026년 03월 17일 문제
// 문제 1. 1부터 20사이 숫자중 홀수만 출력하세요
console.log("-- 연습문제 01. 03월 17일 --");
