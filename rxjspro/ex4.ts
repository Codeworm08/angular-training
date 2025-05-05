import { Observable } from "rxjs";

let url = "https://jsonplaceholder.typicode.com/users";
const data = new Observable(observer => {
    fetch(url)
    .then(res => res.json())
    .then(data=>{
        observer.next(data)
        observer.complete()
    })
    .catch(err=> observer.error(err))
})

data.subscribe(d => d.forEach(element => {
    console.log(element.username)
}))