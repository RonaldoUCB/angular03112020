import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {

  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;

  constructor() { }

  ngOnInit(): void {
  }

  processForm() {
    const allInfo = `Nombre: ${this.nombre}. Email: ${this.email}. Telefono: ${this.telefono}. Mensaje: ${this.mensaje}`;
    alert(allInfo); 
  }

}
