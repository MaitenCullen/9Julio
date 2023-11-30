import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HomeComponent } from './home/home/home.component';
import { MedicinaLaboralComponent } from './medicina-laboral/medicina-laboral.component';
import { ServiciosMedicosComponent } from './serviciosMedicos/servicios-medicos/servicios-medicos.component';
import { ServiciosBaseComponent } from './servicios-base/servicios-base.component';
import { CardiologiaComponent } from './cardiologia/cardiologia.component';
import { AudiologiaComponent } from './audiologia/audiologia.component';
import { ServiciosEcografiaComponent } from './servicios-ecografia/servicios-ecografia.component';
import { RadiologiaComponent } from './radiologia/radiologia.component';
import { OftalmologiaComponent } from './oftalmologia/oftalmologia.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { CoberturasComponent } from './coberturas/coberturas.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'serviciosMedicos', component: ServiciosMedicosComponent },
  { path: 'medicinaLaboral', component: MedicinaLaboralComponent },
  { path: 'tomografia', component: ServiciosBaseComponent },
  { path: 'ecografia', component: ServiciosEcografiaComponent},
  { path: 'radiografia', component: RadiologiaComponent},
  { path: 'cardiologia', component: CardiologiaComponent},
  { path: 'oftalmologia', component: OftalmologiaComponent},
  { path: 'audiologia', component: AudiologiaComponent},
  { path: 'preguntasFrecuentes', component: PreguntasComponent },
  { path: 'coberturas', component: CoberturasComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
