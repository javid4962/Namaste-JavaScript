// const p1 = new Promise((resolve, reject)=>{
//   resolve("p1 is resolved");
// });

// const p2 = new Promise((resolve, reject)=>{
//   resolve("p2 is resolved");
// });

// const p3 = new Promise((resolve, reject)=>{
//   resolve("p3 is resolved");
// });

// Promise.all([p1, p2, p3]).then((res)=>console.log(res));


const p1 = new Promise((resolve, reject) => {
  setTimeout(()=>{
  reject("p1 rejected");
  },5000)
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(()=>{
  reject("p2 rejected");
  },2000)
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(()=>{
  reject("p3 rejected");
  },3000)
});

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err => console.log(err.errors)))