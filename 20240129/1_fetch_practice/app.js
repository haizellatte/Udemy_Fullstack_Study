//todo : fetch 방법 2가지
//* 방법1
const endPoint = "https://jsonplaceholder.typicode.com/todos/1";
fetch(endPoint)
  .then((res) => res.json())
  .then((data) => console.log("첫번째 방법", data));
//* 방법2
async function getTodo() {
  const endPoint = "https://jsonplaceholder.typicode.com/todos/1";
  const res = await fetch(endPoint);
  const data = await res.json();
  console.log("두번째 방법", data);
}

getTodo();
