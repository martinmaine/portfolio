import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';

//Inicio Servicio
import { CargarScriptsService } from './cargar-scripts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EnviadoComponent } from './componentes/enviado/enviado.component';
import { RecibidosComponent } from './componentes/recibidos/recibidos.component';
//Fin Servicio



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ConsultasComponent,
    TrabajosComponent,
    EstudiosComponent,
    EnviadoComponent,
    RecibidosComponent,

  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  ReactiveFormsModule,
  ScrollingModule
],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
