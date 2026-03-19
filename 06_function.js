// 함수 선언문을 통해 만든 함수
// 매개 변수가 없는 함수
function sayHello(){
    console.log("안녕하세요!"); // 콘솔이라는 객체안에 로그 라는 매소드 불러와서 쓴것임
}
// 함수뒤에 추론 반환값에 대한 추론 void 반환값이 없을때 나온다.값이 없다
// function 의 이름 소문자로 시작
// 사용

// 그렇게 만든 함수 실행문 "호출" (실행)
sayHello();  // 우리가 함수를 실행한것임 반드시 소괄호를 반드시 붙인다.

function welcomeUser(name) {
    console.log(`안녕하세요, ${name}님!`)
}
welcomeUser("홍길동");


function sayHelloToUser(name) {
    console.log(`안녕하세요, ${name}님`);
}

// function 안에서만 사용된 매개변수 name는 function 안에서 사용 그래서 색상이 다르다  우선된다.
// 밖과 안은 별개의 공간으로 변수 name과 function 안의 name는 다른 값이 다. 

// 변수는 메모리 영역에서 넣어서 나중에 값을 사용하기 위해서 존재하는것
// 매개변수라는거건, 함수 밖에서 값을 받아오기 위해 존재하며 그 녀석은 함수 내부 코드블록 안에서만 통용됨
// 매개변수는 이자리에는 이름이 들어와야되라고 사용한것임
// 매개변수는 자리 이름이다. 그래서 겹칠수 있다
var name = "홍길동";
sayHelloToUser(name);
var name2 = "율곡이이";
sayHelloToUser(name2);


function add(a, b) {
    return a + b;
    // return 실행했을 때 값을 돌려주는것
}
var result = add(1, 2);   // return 3이 되니간, result에 3가 들어감

// 표현식으로 함수 정의, var sayHi가 중식밍 되어, 변수 호이스팀만 일어남
var sayHi = function () {
    console.log("안녕하세요!");
}
sayHi();

// 화살표 함수로 사용, 얘도 sayHi2 는 변수가 중심이 되어, 변수 호이스팅만 일어남
var sayHi2 = () => {
    console.log("안녕하세요!");
}

var getGrade = (score) => {
    if (score >= 90) {
        return "A학점";
    } else {
        return "B학점";
    }
}
var result = getGrade(50);



function workoutCoach(count) {
    console.log(`층 ${count}번 반복합니다.`);

    for(var i =1; i <= count; i++) {
        console.log(`${i} 번째입니다.`);
    }

    console.log("종료되었습니다.");
}
workoutCoach(2);
workoutCoach(1);
workoutCoach();  // 에러가 나오는것

