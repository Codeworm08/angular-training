//constructor function (class)

function Customer(name,email){
    this.name=name;
    this.email=email;
    this.show = function(){
        console.log(this.name + " : " + this.email)
    }
}

var c = new Customer("James","bond@007.com");
c.show();