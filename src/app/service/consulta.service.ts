import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultas } from '../models/consultas';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  //URL: string = 'http://localhost:3000';

  URL: string= 'https://app-portfolio-ng.herokuapp.com/api/'

//URL= environment.URL; 
 

  constructor(private http: HttpClient) { }

//POST

guardarConsulta(consulta: Consultas):  Observable<any>
  {
    return this.http.post(this.URL, consulta)
  }

//GET

/* traerConsulta(consulta: Consultas):  Observable<any>
  {
    return this.http.get(this.URL)
  }
 */
//traerConsultas(http.get)
/* traerConsultas(consulta: Consultas): Observable<any>
{
  return this.http.get('mongodb+srv://porfolio:porfolio@cluster0.n4lulyh.mongodb.net/contactos?retryWrites=true&w=majority', consulta);
}
 */
}
