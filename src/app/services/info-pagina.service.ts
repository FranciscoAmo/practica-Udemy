import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina ={};
  cargada = false;

  constructor( private http: HttpClient){

    console.log('listo la info');

    // leer el archivo JSON
    this.http.get('assets/data/data_pagina.json')
    .subscribe( (resp: infoPagina) =>{

      this.info=resp;
      this.cargada=true;

      console.log(resp);

    });

  }
}
