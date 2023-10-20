import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent {
    public nombre:string = ""
    public empresa:string = ""
    public email:string = ""
    public mensaje:string = ""
    resultado: string = ""

    form = new FormGroup({
    nombre: new FormControl(this.nombre,[Validators.required, Validators.minLength(5)]),
    empresa: new FormControl(this.empresa, Validators.required),
    telefono: new FormControl(''),
    email: new FormControl(this.email, [Validators.required, Validators.email]),
    mensaje: new FormControl(this.mensaje, [Validators.required, Validators.maxLength(900)])
   
  });
  onSubmit() {
    console.log(this.form)
    if (this.form.valid)
    this.resultado = "Todos los datos son válidos";
    else
      this.resultado! = "Hay datos inválidos en el formulario";
    ;
  }

}
