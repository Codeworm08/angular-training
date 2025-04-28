function add(a,b){
    let p = new Promise(function(resove,reject){
        resove(a+b);
  });
    return p;
}
add(10,20).then(function(res){
    console.log(res);
});

console.log("This is Async Demo...");
console.log("------BYE------------");
