import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosIdx } from '../interfaces/info-productos.interfaces'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  cargando=true;
  productos: ProductosIdx[]=[];
  constructor( private http: HttpClient) { 

    this.cargarProductos();
  }
  private cargarProductos(){

    this.http.get('https://angular-html-1d995.firebaseio.com/productos_Idx.json')
    .subscribe( (resp: ProductosIdx[]) => {
    
      console.log( resp);
      this.productos=resp;
      this.cargando=false;
    });

  }
}

