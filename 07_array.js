const arr = ["cookie", "snack"];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {    // 조건식 : i < arr.length => i < 2
    console.log(arr[i]);
}

arr[2] = "juice";   // 새로운 값을 추가하는 것은 맞는데, 이방식은 "값의 수정을" 할 때만 이용
console.log(arr);


arr.push("cola", "water");  // push() 메소드는, 배열의 마지막에 값을 추가할 수 있음, 매개변수에 1개이상 쓸수 있음;
                            // push()를 실행한 결과값 (리턴값)은 해달 배열의 깊이(length)가 반환
console.log(arr);

arr.pop();      // pop() 메소드는 매개변수가 없음
                // 배열의 마지막에 있는 요소를 빼는 기능, 실행 결과값은 해당 요소의 값을 반환
console.log(arr);


// 만약, 마지막이 아니라 중간에 값을 추가하고 싶으면? 아니면 중간에 값을 빼고 싶으면?
// 그럴 경우엔 배열을 새로 만들어서 덮어써야 함 => 자동으로 할 수 있게 만든 메소드들이 있음
arr.unshift("abc");  // 맨 앞에 요소를 추가
console.log(arr);

arr.shift();             // 맨 앞에 요소를 삭제


// splice(시작인덱스, 삭제할 갯수, 차가할 요소)
// splice(2, 1, "Cherry") => 인넥스 2부터 1개의 요소를 삭제하고, 그 자리에 "Cherry"를 넣겠다.
// splice(1, 4, "Cherry", "Mango", "Apple") => 인텍스 1부터 4개의 요소를 삭제하고, 그 자리에 3가지를 넣겠다.
// splice(3, 2)    => 인텍스 3부터 2개의 요소를 삭제
// splice(2, 0, "Cherry")   => 인덱스 2부터, 0개의 요소를 선택하고, "Cherry"를 넣겠다.
// splice(0, 0, "Cherry")  => 인넥스 0부터, 0개의 요소를 삭제하고, "Cherry"를 넣겠다.

// splice(arr.length -1, 0, "Cherry"  => 마지막 자리에, 삭제는 안하고, "Cherry"를 넣겠다
// pop과 push 보다 splice는 속도가 늦다. 그러나 현재에는컴퓨터 속도가 좋아서 그냥 상관없다.

Array.isArray(arr)    // 집어넣은 변수(값)과 배열인지 아닌지 =>  true, false
if (Array.isArray(arr)) {
    console.log(arr.length);
}
// 실행을 할때 배열인지 반드시 판별을 해야 한다. 코드는 엄청 길기 때문이다.
var str = "Javascript";
// str.splice(3, 2, "Cherry");

const a = [1, 2, 3];

// forEach() 메소드는, 각 배열을 순회하면서 할수(기능)을 실행시키는 메소드
// 매개변수로는 함수 1개만 씀
// 함수 : (매개변수 : 그 요소가 받아짐) => {} 모든 함수는 이렇게 생겼다고 생각
a.forEach(
    (value) => {
        //  실재로 함수가 실행되는 곳
        console.log(value);
    }
);


const b = ["abc", "cookie", "snack"];
b.forEach((value) => {      // 매개변수는 현재 순회하는 "그" 요소를 받아 주어야 핢수에서 처리가 가능함
        // 실제 실행되어야 하는 함수 몸통
        console.log(value);
    })

// add라는 함수를 실행시킬 때, 첫 번째 자리에 들어오는 값을 x라고 내가 부르겠다.
// 두번째 자리에 들어오는 값을 내가 부르 겠다.
function add(x, y) {
    return x + y;
}

b.forEach((eee) => {
        console.log(eee)
})

// 요소의 합계를 구하는 예제
const prices = [1500, 3000, 500, 2000];
let sum = 0;
for (let i = 0; i < prices.length; i++) {
    // 각 용소의 합을 저장
    sum = sum + prices[i];
}
// i = 0 => 부모가 갖고 있는 sum = 0 => 0 + prices[0] = 1500 => 부모가 갖고 있는 sum을 1500으로 바꿈
// i = 1 => 부모가 갖소 있는 sum = 1500 => 1500 + prices[1] = 1500 + 3000 => 부모가 갖고 있는 sum을 4500으로 바꿈
// i = 2 => 부모가 갖고 있는 sum = 4500 => 4500 + prices[2] = 4500 + 500 => 부모가 갖고 있는 sum을 5000으로 바꿈
// i = 3 => 부모가 갖조 있는 sum = 5000 => 5000 + prices[3] = 5000 + 2000 => 부모가 갖고 있는 sum을 7000으로 바꿈
console.log(sum);

// 매개변수에도 함수가 들어간다.
sum = 0;
prices.forEach((value) => {
    sum = sum + value;
})

console.log(sum);
// array일때는 for 문을 안쓰고 forEach를 사용함

