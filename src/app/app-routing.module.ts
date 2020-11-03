import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CreditosComponent } from './creditos/creditos.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path: "principal",component: PrincipalComponent},
  {path: "creditos",component: CreditosComponent},
  {path: "certificaciones",component: CertificacionesComponent},
  {path: "contacto",component: ContactoComponent},
  {path: "",redirectTo: "/principal",pathMatch: "full"},
  {path: "**", component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
