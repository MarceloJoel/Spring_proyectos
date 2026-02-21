import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarPedidosComponent } from './controller/consultar-pedidos/consultar-pedidos.component';
import { LoginComponent } from './controller/login/login.component';
import { PortadaComponent } from './controller/portada/portada.component';
import { ProcesarPedidoComponent } from './controller/procesar-pedido/procesar-pedido.component';
import { RegistrarComponent } from './controller/registrar/registrar.component';

const routes: Routes = [
  {
    path:'portada',
    component:PortadaComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'consultar',
    component:ConsultarPedidosComponent
  },
  {
    path:'procesar',
    component:ProcesarPedidoComponent
  },
  {
    path:'registrese',
    component:RegistrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
