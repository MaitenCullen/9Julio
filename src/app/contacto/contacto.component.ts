import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Router } from '@angular/router';
import { Loading } from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
   
  public location: string;
  constructor(private http: HttpClient, private router: Router) {
    this.location = this.router.url;
  }

  public nombre:string = ""
  public provincia:string = ""
  public email:string = ""
  public mensaje:string = ""
  public telefono:string = ""
  public check:string|null = ""
  resultado: string = ""
  public opcion:string = ""


  nombreControl= new FormControl(this.nombre,Validators.required);
  provinciaControl=new FormControl(this.provincia, Validators.required);
  telefonoControl= new FormControl(this.telefono);
  emailControl=new FormControl(this.email, [Validators.required, Validators.email]);
  mensajeControl= new FormControl(this.mensaje,[Validators.required, Validators.maxLength(900)]);
  checkControl= new FormControl(this.check, Validators.required);
  opcionControl= new FormControl('');

  onOptionSelect(event: any) {
    this.opcionControl.setValue(event.target.value);
  }

  public onchecked(event:any){
    if (event.target.checked){
      this.check="checked"
    } else {
      this.check = null
    }
  }

  public onSubmit(event:Event){
    event.preventDefault()
    Loading.pulse();
    const data = {
      nombre: this.nombre,
      empresa: this.provincia,
      email: this.email,
      telefono:this.telefono,
      mensaje: `${this.mensaje} \n Motivo de la consulta: ${this.opcionControl.value} `
    };
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = 'https://server-mail.vercel.app/send'

    const requestOptions = {
      headers: headers,
      method: 'POST', 
      type: 'POST',
      dataType: 'JSON',
      body: JSON.stringify(data) 
    };

     this.http.post(url, data, requestOptions).subscribe(
          (response:any) => {
            Loading.remove();
            if (response.ok) {
              Notiflix.Report.success(
                'Mensaje enviado',
                'Gracias por el mensaje, nos comunicaremos a la brevedad',
                'Ok',
                );
              setTimeout(()=>{
                location.reload();
              }, 3000);
            }
          },
          (error) => {
            console.error('Error en la solicitud POST:', error);
          }
        );
   }

}


