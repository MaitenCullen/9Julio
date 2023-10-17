import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import {  NgbdCarouselPause } from './carousel/carousel.component';
import { ServiciosMedicosComponent } from './serviciosMedicos/servicios-medicos/servicios-medicos.component';
import { HomeComponent } from './home/home/home.component';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MedicinaLaboralComponent } from './medicina-laboral/medicina-laboral.component';
import { FormComponent } from './form/form.component';
import { ServiciosBaseComponent } from './servicios-base/servicios-base.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ServiciosEcografiaComponent } from './servicios-ecografia/servicios-ecografia.component';
import { RadiologiaComponent } from './radiologia/radiologia.component';
import { CardiologiaComponent } from './cardiologia/cardiologia.component';
import { OftalmologiaComponent } from './oftalmologia/oftalmologia.component';
import { AudiologiaComponent } from './audiologia/audiologia.component';
import { CoberturasComponent } from './coberturas/coberturas.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ServiciosMedicosComponent,
    HomeComponent,
    NosotrosComponent,
    MedicinaLaboralComponent,
    FormComponent,
    ServiciosBaseComponent,
    PreguntasComponent,
    ServiciosEcografiaComponent,
    RadiologiaComponent,
    CardiologiaComponent,
    OftalmologiaComponent,
    AudiologiaComponent,
    CoberturasComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbdCarouselPause,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
