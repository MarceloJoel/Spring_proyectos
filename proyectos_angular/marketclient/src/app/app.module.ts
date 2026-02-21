import { ProcesarPedidoService } from './service/procesar-pedido.service';
import { LoginService } from './service/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './controller/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProcesarPedidoComponent } from './controller/procesar-pedido/procesar-pedido.component';
import { ConsultarPedidosComponent } from './controller/consultar-pedidos/consultar-pedidos.component';
import { ConsultarPedidosService } from './service/consultar-pedidos.service';

import { RegistrarComponent } from './controller/registrar/registrar.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProcesarPedidoComponent,
    ConsultarPedidosComponent,  
    RegistrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
