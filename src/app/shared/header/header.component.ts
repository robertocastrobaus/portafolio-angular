import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _infoPagina: InfoPaginaService,
    public router: Router) { }

  ngOnInit() {
  }

  buscarProducto(termni: string) {
    if (termni.length < 1) {
      return;
    }

    this.router.navigate(['/buscar', termni]);
  }

}
