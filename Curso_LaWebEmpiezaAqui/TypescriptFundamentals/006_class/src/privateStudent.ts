class Alumno{
    private nombre: string;
    private apellido: string;
    private peso: number;

    create(nombre: string, apellido: string, peso: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.peso = peso;
        this.greeting()
    }
    private greeting(): void{
        console.log("Hi, ", this.nombre)
    }
    toString(): void{
        console.log(`{\n
            nombre: ${this.nombre},\n
            apellido: ${this.apellido},\n
            peso:  ${this.peso}\n}`)
    }
}

var alumno2: Alumno = new Alumno();
alumno2.create("Damian", "Naula", 22);
alumno2.toString()