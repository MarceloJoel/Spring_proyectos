import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class ConsultarPedidosService {
  pedidos:Pedido[];
  constructor(private http:HttpClient) { }

  pedidosUsuario(usuario:string):Observable<any>{
    let url="http://localhost:8002/pedidosUsuario";
    let params=new HttpParams();
    params=params.append("usuario",""+usuario);
    return this.http.get(url,{params:params});
  }
}
