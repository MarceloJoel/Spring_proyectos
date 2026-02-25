import { LoginComponent } from './../login/login.component';
import { CestaItem } from './../../model/CestaItem';
import { Component, OnInit } from '@angular/core';
import { Categoria } from './../../model/Categoria';

import { Producto } from './../../model/Producto';
import { ProcesarPedidoService } from './../../service/procesar-pedido.service';
import { MenuComponent } from '../menu/menu.component';

import { CommonModule } from '@angular/common'; // Para *ngFor y *ngIf
import { FormsModule } from '@angular/forms';   // Para [(ngModel)]

@Component({
  selector: 'app-procesar-pedido',
  standalone: true,   //Modificado
  imports: [CommonModule, FormsModule],   //Modificado
  templateUrl: './procesar-pedido.component.html',
  styleUrls: ['./procesar-pedido.component.css']
})
export class ProcesarPedidoComponent implements OnInit {
  categorias:Categoria[];
  productos:Producto[];
  cesta:CestaItem[]=[];
  idCategoriaSel:number;
  constructor(private procesarPedidoService:ProcesarPedidoService,
    private menuComponent:MenuComponent) { }

  ngOnInit(): void {
    this.procesarPedidoService.listCategorias().subscribe(c=>this.categorias=c);
    // this.cesta=[];
  }

  cargarProductos(){
    this.procesarPedidoService.productosCategoria(this.idCategoriaSel).subscribe(p=>{
        this.productos=p;
        this.actualizaStocks();
      });
  }
  //cada vez que se muestra la tabla de productos de una categoría
  //se deben actualizar los stocks a partir de la información que hay en la cesta
  actualizaStocks(){
    this.productos.forEach(p=>{
      this.cesta.forEach(it=>{
        if(it.producto.idProducto==p.idProducto){
          p.stock=p.stock-it.unidades;
        }
      })

    });
  }
  //añade el producto a la cesta, siempre y cuando exista stock suficiente
  agregarCesta(producto:Producto){
      if(producto.unidades<=producto.stock){
        let cestaItem=new CestaItem();
        cestaItem.producto=producto;
        cestaItem.unidades=producto.unidades;
        producto.stock=producto.stock-producto.unidades;
        this.cesta.push(cestaItem);
      }else{
        alert("No hay suficiente stock");
      }
  }
 /* productoEnCesta(producto:Producto){
    return this.cesta.find(c=>c.producto.nombre==producto.nombre)!==undefined;
  }
  actualizarCesta(producto:Producto){
    let cestaItem=this.cesta.find(c=>c.producto.nombre==producto.nombre);
    cestaItem.producto.unidades=Number(cestaItem.producto.unidades)+Number(producto.unidades);
  }*/
  //elimina de la cesta el producto a partir de su posición en la misma
  quitarCesta(pos:number){
    let cestaItem=this.cesta[pos];
    //elimina el producto de la cesta
    this.cesta.splice(pos,1);
    //localiza el producto para después modificar su stock
    //y dejarlo como estaba antes de añadir
    let producto=this.productos.find(p=>p.idProducto==cestaItem.producto.idProducto);
    producto.stock=Number(producto.stock)+Number(cestaItem.unidades);


  }
  //envía al servicio los datos del pedido para que sea procesado
  //y para acceder al usuario, necesita el componente de login
  procesarPedido(){
    //this.procesarPedidoService.enviarPedido(this.cesta,this.loginComponent.usuario).subscribe(p=>alert("pedido realizado"));
    this.procesarPedidoService.enviarPedido(this.cesta,this.menuComponent.cliente.usuario).subscribe({
      next: r=>alert("pedido realizado"),
      error: e=>alert("El pedido no se ha procesado")
      });
  }
}
