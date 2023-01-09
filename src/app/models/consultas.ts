export class Consultas {
    _id?: number;
    nombre: string;
    apellido: string;
    empresa: string;
    email: string;
    puesto: string;
    mensaje: string;

    constructor(
        nombre: string, 
        apellido: string, 
        empresa: string, 
        email: string, 
        puesto: string, 
        mensaje: string) {
            this.nombre = nombre;
            this.apellido =apellido;
            this.empresa =empresa;
            this.email = email;
            this.puesto = puesto;
            this.mensaje =mensaje;
        }
}

