class Student{
    firstName: string;
    lastName: string;
    age: number;

    create(nombre, apellido, edad){
        this.firstName = nombre;
        this.lastName = apellido;
        this.age = edad
    }
    greeting(): void{
        console.log("Hi, ", this.firstName)
    }
    toString(): void{
        console.log(`{\n
            firstName: ${this.firstName},\n
            lastName: ${this.lastName},\n
            age:  ${this.age}\n}`)
    }
}

var alumno1: Student = new Student();
alumno1.firstName = "Diego";
alumno1.lastName = "Paz"
alumno1.age = 24
alumno1.greeting()
alumno1.toString()

var alumno2: Student = new Student();
alumno2.create("Ana", "Rosero", 32);
alumno2.toString()