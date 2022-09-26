import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotyService {
  URI:string='https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1/top-tracks?market=US'
  TOKEN:string='Bearer BQBBOBj-RHpvDevA3bz4OGlKtVBs1vElWvXgrn1s5trmEPqPGOhSFfikIhE2d8NwhQd6dsIMX9XN0TXotj58LFGG6rrG2vGneQ5279094Yvuhz40BSqx3udZVClajzZCJQKOaWmk5lPYdB8WTfXIU_EA6PIZFo1BCam3q1NvymxfXmN7N_FZdTdiE7MEuENQfK0'
  constructor(public peticion:HttpClient){
    console.log("Start Spoty API")
  }
  public traerCanciones():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.TOKEN
      })
    }
    return this.peticion.get(this.URI,httpOptions)
  }
}
