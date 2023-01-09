import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { HomeComponent } from './componentes/home/home.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';
import { EnviadoComponent } from './componentes/enviado/enviado.component';
import { RecibidosComponent } from './componentes/recibidos/recibidos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'consultas', component:ConsultasComponent},
  { path: 'estudios', component: EstudiosComponent},
  { path: 'trabajos', component: TrabajosComponent},
  { path: 'enviado', component: EnviadoComponent},
  { path: 'recibidos', component: RecibidosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
