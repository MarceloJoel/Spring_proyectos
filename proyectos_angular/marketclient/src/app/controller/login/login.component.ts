import { MenuComponent } from './../menu/menu.component';
import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/Cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false     // Modificado aqui
})
export class LoginComponent implements OnInit {
  usuario:string;
  pass:string;
  cliente:Cliente;
  constructor(private loginService:LoginService, private menuComponent:MenuComponent) { }

  login(){
    this.loginService.login(this.usuario,this.pass).subscribe(data=>{
      this.cliente=data;
      if(this.cliente!=null){
        this.menuComponent.enabled=true;
        this.menuComponent.cliente=this.cliente;
        alert("Usuario autenticado");
      }else{
        alert("Usuario no autenticado");
      }
    });
  }

  ngOnInit(): void {
  }

}
