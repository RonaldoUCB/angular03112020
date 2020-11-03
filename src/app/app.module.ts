import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CreditosComponent } from './creditos/creditos.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { ContactoFormComponent } from './contacto-form/contacto-form.component';
import { FormsModule } from '@angular/forms';
import { CertificacionCardComponent } from './certificacion-card/certificacion-card.component';
import { CertificacionService } from './certificacion.service';
import { TiempoTableComponent } from './tiempo-table/tiempo-table.component';
import { CreditosTableComponent } from './creditos-table/creditos-table.component';
import { CreditosService } from './creditos.service';
import { TiemposService } from './tiempo.service';
import { ModuloCardComponent } from './modulo-card/modulo-card.component';
import { ModulosService } from './modulos.service';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CreditosComponent,
    CertificacionesComponent,
    ContactoComponent,
    PaginaNoEncontradaComponent,
    ContactoFormComponent,
    CertificacionCardComponent,
    TiempoTableComponent,
    CreditosTableComponent,
    ModuloCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    CertificacionService,
    CreditosService,
    TiemposService,
    ModulosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
