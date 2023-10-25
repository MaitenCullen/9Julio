import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent{
  // constructor(private router: Router ) { }

  // public nombre:string = ""
  // public provincia:string = ""
  // public email:string = ""
  // public mensaje:string = ""
  // public check:string|null = ""
  // resultado: string = ""

  // nombreControl= new FormControl(this.nombre,Validators.required);
  // provinciaControl=new FormControl(this.provincia, Validators.required);
  // telefonoControl= new FormControl('');
  // emailControl=new FormControl(this.email, [Validators.required, Validators.email]);
  // mensajeControl= new FormControl(this.mensaje, [Validators.required, Validators.maxLength(900)]);
  // checkControl= new FormControl(this.check, Validators.required);

  // public onchecked(event:any){
  //   if (event.target.checked){
  //     this.check="checked"
  //   } else {
  //     this.check = null
  //   }
  // }
  public location: string;
 title = 'envioCorreos'

 datos:FormGroup;
  constructor(private  httpClient:HttpClient) {

    this.datos= new FormGroup({
      nombre: new FormControl ('', Validators.required),
      provincia: new FormControl ('', Validators.required),
      emailCliente: new FormControl ('', [Validators.required, Validators.email]),
      telefono: new FormControl ('', Validators.required),
      mensaje: new FormControl ('', Validators.required),
      select: new FormControl ('', Validators.required)

    })
    this.location = 'gracias.component.html';

  }
  sendEmail():void{
    Notiflix.Loading.standard('Cargando...')
    let params = {
      email:this.datos.value.emailCliente,
      empresa:this.datos.value.empresa,
      telefono:this.datos.value.telefono,
      mensaje:this.datos.value.mensaje,
      select:this.datos.value.select,
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headers,
      withCredentials: false,
    };
    this.httpClient.post('http://diagnostico9dejulio.com.ar/send',params, options).subscribe(resp=> {
      Notiflix.Loading.remove();
      Notiflix.Notify.success("Mensaje Enviado");
    })
  }


}
