import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopService {
  URI:string = 'http://servercomfama.herokuapp.com/viajescomfama/habitaciones';
  constructor(public peticion:HttpClient) {
    console.log("start listen service")
  }
  buscar():Observable<any>{
    return this.peticion.get(this.URI)
  }
}
