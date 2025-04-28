async function add(a,b){
    return a+b;
}

add(10,20).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


console.log('=======================');
