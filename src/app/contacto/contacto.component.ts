import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  public nombre:string = ""
  public empresa:string = ""
  public email:string = ""
  public mensaje:string = ""
  resultado: string = ""

  formContacto = new FormGroup({
  nombre: new FormControl(this.nombre,[Validators.required, Validators.minLength(5)]),
  empresa: new FormControl(this.empresa, Validators.required),
  telefono: new FormControl(''),
  email: new FormControl(this.email, [Validators.required, Validators.email]),
  mensaje: new FormControl(this.mensaje, [Validators.required, Validators.maxLength(900)])
 
});
onSubmit() {
  console.log(this.formContacto)
  if (this.formContacto.valid)
  this.resultado = "Todos los datos son válidos";
  else
    this.resultado! = "Hay datos inválidos en el formulario";
  ;
}
}
