// 1. 고유값 ID 값으로 검색해서 요소 찾기
const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"}
];
// user 객체에 id가 2인 요소찾기
const findUser = users.find((value) => {
    return value.id === 2;
});
console.log(findUser);


// 2. 특정 조건을 가지고 검색
const product = [
    {name: "키보드", price: 50000},
    {name: "마우스", price: 30000},
    {name: "모니터", price: 100000}
];
// 가격이 5만원 이상 // find 하나 밖에 찾을 수 없다. 첫번째것
const foundProduct = product.find((value) => {
    return value.price >= 50000;
});
console.log(foundProduct);

// 3. 중첩된 객체에서 데이터 찾기
const teams = [
    {temaName: "A", leader: {name: "kim", age: 30}},
    {teamName: "B", leader: {name: "Lee", age: 25}},
    {teamName: "C", leader: {name: "Park", age: 35}}
];

// 리더 나이 30 미만
const findTeam = teams.find((value) => {
    return value.leader.age < 30;
});
console.log(findTeam);

// 4. 부분 문자열 (Keyword)로 검색
const posts = [
    {id: 101, title: "자바스크립트 기초"},
    {id: 102, title: "리액트 가이드"},
    {di: 103, title: "Node.js 심화" }
];
// 리엑트가 포합된 글찾기
const foundPosts = posts.find((value) => {
    return value.title.includes("리액트");
});
console.log(foundPosts);