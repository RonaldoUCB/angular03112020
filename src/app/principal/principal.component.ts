import { Component, OnInit } from '@angular/core';
import { ModulosService } from '../modulos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  _modulos;

  constructor(service: ModulosService) {
    this._modulos = service.getModulos();
  }

  ngOnInit(): void {
  }

}
