function add(a, b) {
    let p = new Promise(function (resove, reject) {
        if (a < 0 || b < 0)
            reject('Invalid Nos.')
        else
            resove(a + b);
    });
    return p;
}
add(10, -20).then(function (res) {
    console.log(res);
}).catch(function(err){
    console.log(err);
});

console.log("This is Async Demo...");
console.log("------BYE------------");
