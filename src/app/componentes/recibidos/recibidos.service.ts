import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class RecibidosService {

    public consultas: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarConsultas();
   }

  private cargarConsultas() {
    this.http.get('mongodb+srv://porfolio:porfolio@cluster0.n4lulyh.mongodb.net/contactos?retryWrites=true&w=majority')
    .subscribe((res:any) => {
      this.consultas = res;
      console.log(res);
  })
  }
}
