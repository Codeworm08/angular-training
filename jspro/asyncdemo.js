function add(a,b,cb){
    let r = a+b;
    cb(r);
}

function sq(n,cb){
     cb(n* n);
}

add(10,20,function(res){
    console.log(res);
});

sq(5,function(res){
    console.log(res);
})

