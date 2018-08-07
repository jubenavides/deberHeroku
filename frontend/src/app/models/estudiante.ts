export class Estudiante {

        constructor(nombre = '', cedula = '', fecha_nacimiento = '', edad = 0,peso=0,altura=0,nivel=0,nota=0) {       
            this.nombre = nombre;
            this.cedula = cedula;
            this.fecha_nacimiento = fecha_nacimiento;
          
        }
    
        _id: string;
        nombre: string;
        cedula: string;
        fecha_nacimiento: string;
        edad: number;
        peso: number;
        altura: number;
        nivel: number;
        nota: number; 
    
    
}
