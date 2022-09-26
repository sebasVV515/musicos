import { Component, OnInit } from '@angular/core';
import { Integrantes } from '../interfaces/integrantes';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent{

  constructor() { }

  integrantes:Integrantes[]=[
    {
      nombre:"Serj Tankian",
      foto:"../../assets/Serj_Tankian_in_Artsakh.jpg",
      nacimiento:"21 de agosto de 1967 (edad 55 años)",
      estatura:"1.79 m",
      rol:"Guitarra"
    },
    {
      nombre:"Daron Malakian",
      foto:"../../assets/Daron_Malakian.jpg",
      nacimiento:"18 de julio de 1975 (edad 47 años)",
      estatura:"1.71 m",
      rol:"Guitarra"
    },
    {
      nombre:"Shavo Odadjian",
      foto:"../../assets/ShavoBass.jpg",
      nacimiento:"22 de abril de 1974 (edad 48 años)",
      estatura:"1.85 m",
      rol:"Bajo Electrico"
    },
    {
      nombre:"John Dolmayan",
      foto:"../../assets/John_dolmayan.jpg",
      nacimiento:"15 de julio de 1973 (edad 49 años)",
      estatura:"1.76 m",
      rol:"Bateria"
    },
    {
      nombre:"Ontronik Khachaturian",
      foto:"https://c8.alamy.com/compes/e82mjr/9-salva-vidas-anuales-de-musica-puesta-en-marcha-parte-celebrada-en-park-showroom-presentando-andy-ontronik-khachaturian-donde-los-angeles-california-estados-unidos-cuando-23-mar-2014-e82mjr.jpg",
      nacimiento:"4 de mayo de 1975 (edad 47 años)",
      estatura:"No disponible",
      rol:"Bateria"
    }
  ]

}
