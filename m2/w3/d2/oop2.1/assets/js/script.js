class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }
    confronto(altro){
        if (this.age > altro.age){
            console.log(`${this.name} è più vecchio di ${altro.name}`)
        }
        if (this.age == altro.age){
                console.log(`${this.name} ha la stessa età di ${altro.name}`)
        }
        if ((this.age < altro.age)){
            console.log(`${this.name} è più giovane di ${altro.name}`)
        }
    }
}

let p1 = new Person("Luca", 20);
let p2 = new Person("Marco", 19);
let p3 = new Person("Antonio", 20);

p1.confronto(p2);
p2.confronto(p3);
p3.confronto(p1);
p1.confronto(p3);
p3.confronto(p2);
p2.confronto(p1);
