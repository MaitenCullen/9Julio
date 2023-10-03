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
