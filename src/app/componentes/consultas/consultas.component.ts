import { ConsultaService } from './../../service/consulta.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Consultas } from '../../models/consultas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

//Variable de tipo formulario
public consultaForm: FormGroup; 

  constructor(
    private consultaService: ConsultaService,
    private FormBuilder: FormBuilder,
    private router: Router,
    ) {
      this.consultaForm = this.FormBuilder.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        email: ['', Validators.required],
        empresa: [''],
        puesto: [''],
        mensaje: ['', Validators.required]
      });
    }

  ngOnInit(): void {
  }

//Función para enviar datos
enviarConsulta(){
  const Consulta: Consultas = {
    nombre: this.consultaForm.get('nombre')?.value, 
    apellido: this.consultaForm.get('apellido')?.value,
    email: this.consultaForm.get('email')?.value,
    empresa: this.consultaForm.get('empresa')?.value,
    puesto: this.consultaForm.get('puesto')?.value,
    mensaje: this.consultaForm.get('mensaje')?.value,
    }
    this.consultaService.guardarConsulta(Consulta).subscribe({
      error: (e)=> console.log(e)
    })
      
      this.router.navigate(['enviado']) 
    
  }

  //Función para recibir datos

  

}
