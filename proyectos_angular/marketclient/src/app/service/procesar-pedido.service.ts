import { Observable } from 'rxjs/internal/Observable';
import { Categoria } from './../model/Categoria';
import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Producto } from '../model/Producto';
import { CestaItem } from '../model/CestaItem';
@Injectable({
  providedIn: 'root'
})
export class ProcesarPedidoService {
  
  constructor(private http:HttpClient) { }

  listCategorias():Observable<any>{
    let url="http://localhost:8001/categorias";
    return this.http.get(url);
  }
  productosCategoria(idCategoria:number):Observable<any>{
    let url="http://localhost:8001/productosCategoria";
    let params=new HttpParams();
    params=params.append("idCategoria",""+idCategoria);
    return this.http.get(url,{params:params});
  }
  enviarPedido(cesta: CestaItem[], usuario:string){
    let url="http://localhost:8002/altaPedido";
    let params=new HttpParams();
    params=params.append("usuario",usuario);
    return this.http.post(url,cesta,{params:params});
  }
}
