let argv = require('yargs').argv;
let op = argv.op;
let n1 = argv.n1;
let n2 = argv.n2;
if(op=='add')
    console.log(parseInt(n1)+parseInt(n2));
else if (op=='mul')
    console.log(parseInt(n1)*parseInt(n2));
