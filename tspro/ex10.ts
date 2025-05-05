class Employee{
    getRole(){

    }
}

class Manager extends Employee{
    getRole(): string {
        return "Manager"
    }
}

class Developer extends Employee{
    getRole(): string{
        return "Developer"
    }
}