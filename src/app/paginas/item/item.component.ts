import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { DescripcionProducto } from 'src/app/interfaces/productos.item.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
   producto:DescripcionProducto;
   id:string;

  constructor( private route:ActivatedRoute,
              private  ProductoService: ProductosService) { }

  ngOnInit() {

    this.route.params.subscribe( parametros =>{
      
      this.ProductoService.getProducto(parametros['id'])
         .subscribe((producto: DescripcionProducto)=>{
           this.producto=producto;
           this.id=parametros['id'];
            console.log(parametros['id']);
            console.log(producto);
         });
      //console.log(parametros['id']);
    });

  }

}
