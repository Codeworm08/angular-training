function sq(n) {
    let p = new Promise((resolve, reject) => {
        resolve(n * n);
    });
    return p;
}

sq(5).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

