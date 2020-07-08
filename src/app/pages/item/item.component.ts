import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/productoDescripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public producto : ProductoDescripcion;
  id :string;
  constructor(private route: ActivatedRoute,
              public producService: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(parametro=>{
      console.log(parametro['id']);
      this.producService.getProducto(parametro['id']).subscribe((producto:ProductoDescripcion) =>{
        console.log(producto);
        this.id = parametro['id'];
        this.producto = producto;
      })
    })
  }

}
