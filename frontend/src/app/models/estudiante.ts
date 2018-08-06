export class Estudiante {

        constructor(nombre = '', cedula = '', fecha_nacimiento = '', edad = 0,peso=0,altura=0,nivel=0) {
            
            this.nombre = nombre;
            this.cedula = cedula;
            this.fecha_nacimiento = fecha_nacimiento;
            this.edad = edad;
            this.peso=peso;
            this.altura=altura;
            this.nivel=nivel;
        }
    
        _id: string;
        nombre: string;
        cedula: string;
        fecha_nacimiento: string;
        edad: number;
        peso: number;
        altura: number;
        nivel: number;
    
    
}
