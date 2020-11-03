import { Component, Input, OnInit } from '@angular/core';
import { CertificacionService } from '../certificacion.service';

@Component({
  selector: 'app-certificacion-card',
  templateUrl: './certificacion-card.component.html',
  styleUrls: ['./certificacion-card.component.css']
})
export class CertificacionCardComponent implements OnInit {

  @Input() certificado;

  _certificado;

  constructor(private service: CertificacionService) {
  }

  ngOnInit(): void {
    this._certificado = this.service.getCertificion(this.certificado);
  }

}
