import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

import { ApiEstadoService } from "../../../servicios/api/api-estado.service";
import { EstadoInterface } from "../../..//modelos/estados/estado-interface";
import { ResponseNuevoEstadoI } from "../../..//modelos/estados/responsenuevoestado.interface";
@Component({
  selector: 'app-nuevo-estado',
  templateUrl: './nuevo-estado.component.html',
  styleUrls: ['./nuevo-estado.component.css']
})
export class NuevoEstadoComponent implements OnInit {
  heroForm!: FormGroup;

  get estado() { return this.heroForm.get('estado')!; }
  // heroForm = new FormGroup({
  //   estado: new FormControl('', Validators.required)
  // })

  constructor(private api: ApiEstadoService, private fb: FormBuilder) {
    this.crearFormulario();
  }
  ngOnInit(): void {

  }
  crearFormulario() {
    this.heroForm = this.fb.group({
      estado: ['', [Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])]]
    })
  }

  limpiarFormulario() {
    this.heroForm.reset();
  }
  nuevoEstado() {
    if (this.heroForm.invalid) {
      return Object.values(this.heroForm.controls).forEach(control => {
        console.log(control.errors)
        control.markAllAsTouched();
      });
    }
    console.log(this.heroForm)

    // this.api.nuevoEstado(from).subscribe(
    //   (val) => {
    //     console.log("POST call successful value returned in body",
    //       val);
    //   },
    //   response => {
    //     console.log("POST call in error", response.error);
    //   },
    //   () => {
    //     console.log("The POST observable is now completed.");
    //   }





    //   //   data=>{
    //   //   let dataResponse:ResponseNuevoEstadoI=data;
    //   //   console.log(dataResponse)
    //   // },
    //   // error=>{
    //   //   console.log(error)
    //   // }
    // )

  }

  get estadoValido() {
    return this.heroForm.get('estado')?.invalid && this.heroForm.get('estado')?.touched;
  }
}
