let op = process.argv[2].split('=')[1];
let n1 = process.argv[3].split('=')[1];
let n2 = process.argv[4].split('=')[1];

if(op=='add')
    console.log(parseInt(n1)+parseInt(n2));
else if (op=='mul')
    console.log(parseInt(n1)*parseInt(n2));
