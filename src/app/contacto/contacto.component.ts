import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  constructor(private router: Router ) { }

  public nombre:string = ""
  public provincia:string = ""
  public email:string = ""
  public mensaje:string = ""
  public check:string|null = ""
  resultado: string = ""

  nombreControl= new FormControl(this.nombre,Validators.required);
  provinciaControl=new FormControl(this.provincia, Validators.required);
  telefonoControl= new FormControl('');
  emailControl=new FormControl(this.email, [Validators.required, Validators.email]);
  mensajeControl= new FormControl(this.mensaje, [Validators.required, Validators.maxLength(900)]);
  checkControl= new FormControl(this.check, Validators.required);

  public onchecked(event:any){
    if (event.target.checked){
      this.check="checked"
    } else {
      this.check = null
    }
  }

  public location = window.location.href


  public onSubmit(event:any){
    setTimeout(() => {
      Notify.success('Mensaje enviado');
    }, 1000);
   }

}
