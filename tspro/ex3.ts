function introduce(name:string, age?:number):string{
    if(age){
        return `Hello, ${age} year old ${name}`
    }
    return `Hello ${name}`
}

console.log(introduce("Leo",22))
console.log(introduce("Sid"))