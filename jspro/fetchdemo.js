
let url ='https://jsonplaceholder.typicode.com/users';

fetch(url).then(res => res.json()).then((data)=> {
    data.forEach((d)=> console.log(d.username + "," + d.email));
});
