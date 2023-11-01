
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, Validators} from '@angular/forms';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import * as Notiflix from 'notiflix';


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

     public onSubmit(event:Event){
      event.preventDefault()
      Loading.pulse();
        const data = {
          nombre: this.nombre,
          empresa: this.empresa,
          email: this.email,
          mensaje: this.mensaje
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
            console.log('Respuesta del servidor:', response);
            if (response.ok) {
              Notify.success('Mensaje enviado');
              location.reload();
            }
          },
          (error) => {
            console.error('Error en la solicitud POST:', error);
          }
        );
     }
}