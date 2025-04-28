class Customer {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    show(){
        setTimeout(()=> {
            console.log(this.name + " : " + this.email)
        }, 3000);
  
    }
}
var c = new Customer("James","bond@007.com");
c.show();