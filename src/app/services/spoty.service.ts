import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotyService {
  URI:string='https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1/top-tracks?market=US'
  TOKEN:string='Bearer BQC6WFIj6GkQKi5aCWI6jAolEiz5PzJt4vRMiNyDPa1lbZGpVAyd0YqILIktl0PE3Ta9V-d2JMwQyZxuTDqklukatBoc27wHFZfMkc6skiX6wtLyYKmIxC6TRnYaujLXW4S-LIdJv35yZktTUSoIhy5ykYnBMQI0y013qVchcK2Occuty_htgbBeY-j1hHSZ3Iw'
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
