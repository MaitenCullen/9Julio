import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators} from '@angular/forms';
import * as Notiflix from 'notiflix';
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
      setTimeout(() => {
        Notify.success('Mensaje enviado');
      }, 1000);
     }
}

