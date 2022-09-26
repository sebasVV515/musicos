import { Component } from '@angular/core';
import { SpotyService } from '../services/spoty.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent{
  public canciones:any[]=[]
  constructor(public peticion:SpotyService) {
    this.peticion.traerCanciones().subscribe(canciones=>{
      this.canciones=canciones.tracks
      console.log(canciones.tracks)})
  }
}
