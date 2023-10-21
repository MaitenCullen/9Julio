import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnDestroy{
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
 public ngOnDestroy(): void {
    this.router.navigate(['contacto'])
  }
  public onSubmit(event:Event){
    event.stopPropagation()
  }

}
