import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';
import { equipoPagina } from '../interfaces/equipo-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: infoPagina ={}; // arreglo
  cargada = false;
  equipo: equipoPagina[]=[];
  carEquipo =false;
  constructor(private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: infoPagina) =>{      
      this.cargada=true;
      this.info=resp;
      console.log(this.info);

    });
  }
  private cargarEquipo(){
    this.http.get('https://angula-html-a5e02.firebaseio.com/equipo.json').subscribe( (resp :equipoPagina[]) =>{
      this.carEquipo=true;
      this.equipo = resp;
      console.log(this.equipo);
    });
  }
}
