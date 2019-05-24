import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina ={};
  cargada = false;
  equipo: any[]=[];

  constructor( private http: HttpClient){
    console.log('lista la info')
    this.cargarInfo();
    this.cargarEquipo();
  }

    

  
  private cargarInfo(){

   

    // leer el archivo JSON
    this.http.get('assets/data/data_pagina.json')
    .subscribe( (resp: infoPagina) =>{

      this.info=resp;
      this.cargada=true;

      
      this.cargarInfo();
    });

  }

  private cargarEquipo(){

    this.http.get('https://angular-html-1d995.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) =>{

      this.equipo=resp;

     // console.log(resp); // ya no lo usaremos al vincular los productos
    });
  }
}
