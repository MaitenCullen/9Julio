import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { EmailServiceService } from '../email-service.service';
import * as Notiflix from 'notiflix';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent {
  public location: string;
 title = 'envioCorreos'

 datos:FormGroup;
  constructor(private  httpClient:HttpClient) {

    this.datos= new FormGroup({
      nombre: new FormControl ('', Validators.required),
      empresa: new FormControl ('', Validators.required),
      emailCliente: new FormControl ('', [Validators.required, Validators.email]),
      telefono: new FormControl ('', Validators.required),
      mensaje: new FormControl ('', Validators.required)

    })
    this.location = 'gracias.component.html';

  }
    // public nombre:string = ""
    // public empresa:string = ""
    // public email:string = ""
    // public mensaje:string = ""

    
    // nombreControl= new FormControl(this.nombre,Validators.required);
    // empresaControl=new FormControl(this.empresa, Validators.required);
    // telefonoControl= new FormControl('');
    // emailControl=new FormControl(this.email, [Validators.required, Validators.email]);
    // mensajeControl= new FormControl(this.mensaje, [Validators.required, Validators.maxLength(900)]);
    
    // public location = window.location.href;  

    sendEmail():void{
      Notiflix.Loading.standard('Cargando...')
      let params = {
        email:this.datos.value.emailCliente,
        empresa:this.datos.value.empresa,
        telefono:this.datos.value.telefono,
        mensaje:this.datos.value.mensaje,
      }

      console.log(params)
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      const options = {
        headers: headers,
        withCredentials: false,
      };
      this.httpClient.post('http://localhost:3000/send',params, options).subscribe(resp=> {
        console.log(resp)
        Notiflix.Loading.remove();
        Notiflix.Notify.success("Mensaje Enviado");
      })
    }

    // public onSubmit(event:any){
    //   event.preventDefault()
    //   console.log("botonapretado")
    // }
}
