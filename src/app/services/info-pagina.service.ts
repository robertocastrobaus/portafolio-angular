import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: infoPagina ={}; // arreglo
  cargada = false;
  constructor(private http: HttpClient) { 
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: infoPagina) =>{      
      this.cargada=true;
      this.info=resp;
      console.log(this.info);

    });
  }
}
