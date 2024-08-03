try{
const obj ={
  a:10,
  x:function(){
    // console.log(a)
    console.log(this)
  }
}
obj.x();
}
catch (err) {
  console.log('Error : '+err.message);
}
