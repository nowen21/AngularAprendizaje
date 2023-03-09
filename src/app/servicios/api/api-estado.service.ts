import { Injectable } from '@angular/core';
import { EstadoInterface } from "../../modelos/estados/estado-interface";
import { ListadoInterface } from "../../modelos/estados/listado-interface";
import { ResponseNuevoEstadoI } from "../../modelos/estados/responsenuevoestado.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable , throwError} from "rxjs";
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiEstadoService {
  url: string = "http://localhost:8088/api/v1/estados/"
  constructor(private http: HttpClient) { }

  nuevoEstado(from: EstadoInterface):Observable<ResponseNuevoEstadoI> {
    let direccion=this.url+'store'
    return this.http.post<ResponseNuevoEstadoI>(direccion,from);
  }

  listadoEstado():Observable<ListadoInterface[]> {
    let direccion=this.url
    return this.http.get<ListadoInterface[]>(direccion);
  }
}
