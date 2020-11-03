import { Component, OnInit } from '@angular/core';
import { CreditosService } from '../creditos.service';

@Component({
  selector: 'app-creditos-table',
  templateUrl: './creditos-table.component.html',
  styleUrls: ['./creditos-table.component.css']
})
export class CreditosTableComponent implements OnInit {

  _creditos;

  constructor(service: CreditosService) {
    this._creditos = service.getCreditos();
  }

  ngOnInit(): void {
  }

}
