// "use strict";
// function hello(){
//   console.log(this)
// }
// hello()


// const obj = {
//   a : 10,
//   x : function(){
//     console.log(this);
//   }
// }
// obj.x();

// const student = {
//   name: "Akshay",
//   printName: function() {
//     console.log(this.name);
//   }
// }
// student.printName();
// const student2 = {
//   name: "Deepika",
// }
// student.printName.call(student2);

// const obj = {
//   a: 10,
//   x: () => {
//     console.log(this)
//   }
// }
// obj.x();

const obj = {
  a: 10,
  x: function(){
    const y = () => {
      console.log(this)
    }
    y();
  }
}
obj.x();

// console.log(this)
// try{
// const obj ={
//   a:10,
//   x:function(){
//     // console.log(a)
//     console.log(this)
//   }
// }
// obj.x();
// }
// catch (err) {
//   console.log('Error : '+err.message);
// }
