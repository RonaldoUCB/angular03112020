import { Component, Input, OnInit } from '@angular/core';
import { ModulosService } from '../modulos.service';

@Component({
  selector: 'app-modulo-card',
  templateUrl: './modulo-card.component.html',
  styleUrls: ['./modulo-card.component.css']
})
export class ModuloCardComponent implements OnInit {

  @Input() modulo;

  _modulo;

  constructor(private service: ModulosService) { }

  ngOnInit(): void {
    this._modulo = this.service.getModulo(this.modulo);
  }

}
