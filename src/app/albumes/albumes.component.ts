import { Component } from '@angular/core';
import { TopService } from '../services/top.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent{
  public respuesta:any[]=[]
  constructor(public peticion:TopService) {
    this.peticion.buscar()
    .subscribe(respuesta=>{
      this.respuesta=respuesta.datos
      console.log(this.respuesta)
    })
  }
}
