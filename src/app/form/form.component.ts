
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, Validators} from '@angular/forms';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent {
 

  constructor(private http:HttpClient) {


  }
    public nombre:string = ""
    public empresa:string = ""
    public email:string = ""
    public mensaje:string = ""

    
    nombreControl= new FormControl(this.nombre,Validators.required);
    empresaControl=new FormControl(this.empresa, Validators.required);
    telefonoControl= new FormControl('');
    emailControl=new FormControl(this.email, [Validators.required, Validators.email]);
    mensajeControl= new FormControl(this.mensaje, [Validators.required, Validators.maxLength(900)]);
    
     public location = window.location.href;  





     public onSubmit(event:any){
        const data = {
          nombre: this.nombre,
          empresa: this.empresa,
          email: this.email,
          mensaje: this.mensaje
        };

        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });

        const backendURL = 'https://server-mail.vercel.app/send'
          this.http.post(backendURL, data, { headers: headers }).subscribe(
          (response) => {
            console.log('Respuesta del servidor:', response);
            setTimeout(() => {
              Notify.success('Mensaje enviado');
            }, 1000);
          },
          (error) => {
            console.error('Error en la solicitud POST:', error);
          }
        );
     }
}