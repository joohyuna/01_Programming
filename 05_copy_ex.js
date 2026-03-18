var num1 = 10;
var str1 = "Hello";
var bool1 = true;

console.log(num1);
console.log(str1);
console.log(bool1);

var pCopy1 = num1;
var pCopy2 = str1;
var pCopy3 = bool1;

pCopy1 = 15;
console.log(pCopy1);
console.log(pCopy2);
console.log(pCopy3);

var originalUser = {
    name: "김철수",
    age: 25,
    sex: "Male",
};

var sCopyUser = originalUser;

originalUser.name = "홍길동";
console.log(`얕은 카피는 sCopyUser.name에 ${sCopyUser.name} 내용이 그대로 나온다.`);

// 깊은 복사
var dCopyUser = {
    name: originalUser.name,
    age: originalUser.age,
    sex: originalUser.sex,
};

originalUser.name = "박철수";
console.log(`originalUser.name 변경 ${originalUser.name} 이름이 나왔음`);  // 오리지널 바뀐 이름 "박철수로 나오고"
console.log(`dCopyUser.name 깊은 복사를 해서 ${dCopyUser.name} 이름이 그대로 나옴`);  //  길은 복사를 해도 한번 얕은 복사를 한것이 남아 있어서 홍길동으로 나온다

// deep copy 의 스프레드 문법
var dCopyUser2 = {
    ...originalUser,    // ...문버 (스프레드 문법, spread) : originalUser 변수 안에 있는 프로퍼티를 나열하겠다
};

// 객체 안에 있는 객체 deep 카피
var oUser2 = {
    name: "김철수",
    age: 25,
    address: {
        city: "서울",
        zipCode: "04524",
    },
};

var dUser2 = {
    ...oUser2,
};

var dUser2 = {
    name: oUser2.name,
    age: oUser2.age,
    address: oUser2.address,
};
oUser2.address.city = "안산시";
console.log(`oUser2.address.city는 변경된 ${oUser2.address.city} 입니다`);
console.log(`dUser2.address.city는 얕은복사가 되서 ${dUser2.address.city} 입니다.`);

// oUser2에 대한 깊은 복사를 하려면 아래와 같이 작성
var dUser3 = {
  ...oUser2,
  address: {
      ...oUser2.address,
  }
};

// oUser2에 대한 깊은 복사를 자세히 써놓은 것
// var dUser3= {
//     name: oUser2.name,
//     age: oUser2.age,
//     address: oUser2.address,
//     address: {
//         ...oUser2.address,
//     }
// }
oUser2.address.city = "부천시";
console.log(`원본은 수정해서 ${oUser2.address.city} 로 변경`);
console.log(`복사본인 dUser3은 ${dUser3.address.city}는 그대로`);

