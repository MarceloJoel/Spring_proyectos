import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProcesarPedidoService } from './service/procesar-pedido.service';
import { LoginService } from './service/login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ConsultarPedidosComponent } from './controller/consultar-pedidos/consultar-pedidos.component';
import { ConsultarPedidosService } from './service/consultar-pedidos.service';
import { RegistrarComponent } from './controller/registrar/registrar.component';
import { PortadaComponent } from './controller/portada/portada.component';
import { LoginComponent } from './controller/login/login.component';
import { MenuComponent } from './controller/menu/menu.component';
import { ProcesarPedidoComponent } from './controller/procesar-pedido/procesar-pedido.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    ConsultarPedidosComponent,
    PortadaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ProcesarPedidoComponent,
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
