// const p1 = new Promise((resolve, reject)=>{
// // setTimeout(()=>{
//     resolve("Promise Resolved Value");
//   //},5000);
// })

// const p2 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("Promise Resolved Value 2");
//   },2000);
// })

// async function getData() {
//   console.log("before resolving promise")
//   const val = await p1;
//   console.log(val);
//   //const val2 = await p2;
//   //console.log(val2)
// }
// getData();

// for (var i = 0; i < 10; i++) {
//   // Tab to edit
// console.log("after async function call");
// }

const API_URL  = "https://api.github.com/users/javid4962";

async function getData(){
  const data = await fetch(API_URL);
  const dataJson = await data.json()
  console.log(dataJson);
}
getData();