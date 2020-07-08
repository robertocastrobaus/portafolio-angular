import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  producto: Producto[] = [];
  productoFiltrado: Producto[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise((resolve, reject) => {
      this.http.get('https://angula-html-a5e02.firebaseio.com/productos_idx.json').subscribe((resp: Producto[]) => {
        //console.log(resp);
        this.producto = resp;
        this.cargando = false;
        resolve();
      })

    });


  }

  public getProducto(id: string) {
    return this.http.get(`https://angula-html-a5e02.firebaseio.com/productos/${id}.json`);
  }

  public buscarProducto(termino: string) {
    
    if (this.producto.length==0){
      this.cargarProductos().then(()=>{
        this.filtrarProducto(termino);
      })

    }else{
      this.filtrarProducto(termino);
    }
    
  }

  private filtrarProducto(termino : string){
    this.productoFiltrado=[];
    termino = termino.toLocaleLowerCase();
    this.producto.forEach(producto =>{
      const tituloLower = producto.titulo.toLocaleLowerCase();
      if(producto.categoria.indexOf(termino)>=0||tituloLower.indexOf(termino)>=0){
        this.productoFiltrado.push(producto);
      }
    })
  }

}
