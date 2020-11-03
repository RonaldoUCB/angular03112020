import { Component, OnInit } from '@angular/core';
import { TiemposService } from '../tiempo.service';

@Component({
  selector: 'app-tiempo-table',
  templateUrl: './tiempo-table.component.html',
  styleUrls: ['./tiempo-table.component.css']
})
export class TiempoTableComponent implements OnInit {

  _tiempos;

  constructor(service: TiemposService) {
    this._tiempos = service.getTiempos();
  }

  ngOnInit(): void {
  }

}
