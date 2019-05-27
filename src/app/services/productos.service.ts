import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosIdx } from '../interfaces/info-productos.interfaces'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  encontrado;// variable para mostrar un valor en la pagina web si no se encuentra nada

  cargando=true;
  productos: ProductosIdx[]=[];
  productosFiltrado:ProductosIdx[]=[];

  constructor( private http: HttpClient) { 

    this.cargarProductos();
  }


  private cargarProductos(){

    return new Promise((resolve,reject)=>{
      
      this.http.get('https://angular-html-1d995.firebaseio.com/productos_Idx.json')
      .subscribe( (resp: ProductosIdx[]) => {
      
        //console.log( resp);
        this.productos=resp;
        this.cargando=false;
        resolve();
      });

    });


  }

  public getProducto(id:string){

    return this.http.get(`https://angular-html-1d995.firebaseio.com/productos/${id}.json`);
                 
  }

  public buscarProductos(palabra:string){

    if(this.productos.length===0 ){
      //cargar productos antes
      this.cargarProductos().then(()=>{
        //esto carga despues de tener los productos
         //filtrar despues
         this.filtarProductos(palabra);
      })
     
    }else{

      //filtrar producto
      this.filtarProductos(palabra);
    }

  }


  private filtarProductos(palabra:string){

    this.encontrado=false;
    this.productosFiltrado=[];
    palabra=palabra.toLocaleLowerCase();

    this.productos.forEach(prod =>{

      //variable temporal para pasar el titulo a minusculas
      const tituloMinusculas=prod.titulo.toLocaleLowerCase();

      if(prod.categoria.indexOf(palabra)>=0 || tituloMinusculas.indexOf(palabra)>=0)
      {
        this.productosFiltrado.push(prod);
        this.encontrado=true;
      }
      return this.encontrado;// retorna el valor de si ha encontrado algun valor
                             //  usado en el search.component.html en el *ngIf
    });

  }

}

