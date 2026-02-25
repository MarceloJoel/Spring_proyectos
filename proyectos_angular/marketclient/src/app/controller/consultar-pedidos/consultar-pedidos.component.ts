import { Pedido } from './../../model/Pedido';
import { MenuComponent } from './../menu/menu.component';
import { Component, OnInit } from '@angular/core';
import { ConsultarPedidosService } from './../../service/consultar-pedidos.service';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrls: ['./consultar-pedidos.component.css'],
  standalone: false     // Modificado aqui
})
export class ConsultarPedidosComponent implements OnInit {
  usuario:string;
  pedidos:Pedido[];
  constructor(private consultarPedidosService:ConsultarPedidosService,
    private menuComponent:MenuComponent) { }

  ngOnInit(): void {
    this.usuario=this.menuComponent.cliente.usuario;
    this.consultarPedidosService.pedidosUsuario(this.usuario)
      .subscribe(p=>{this.pedidos=p;});
  }

}
