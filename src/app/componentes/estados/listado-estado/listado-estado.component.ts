import { Component, OnInit } from '@angular/core';
import { ApiEstadoService } from "../../../servicios/api/api-estado.service";
import { Router } from "@angular/router";
import { ListadoInterface } from "../../../modelos/estados/listado-interface";
@Component({
  selector: 'app-listado-estado',
  templateUrl: './listado-estado.component.html',
  styleUrls: ['./listado-estado.component.css']
})
export class ListadoEstadoComponent implements OnInit {
  // Must be declared as "any", not as "DataTables.Settings"
  estados: ListadoInterface[] = [];

  constructor(private api: ApiEstadoService) {
    // this.api.listadoEstado().subscribe(data=>{

    // });
  }

  ngOnInit(): void {
    this.api.listadoEstado().subscribe(data => {
      this.estados=data;
      console.log(data);

    });
  }
}
