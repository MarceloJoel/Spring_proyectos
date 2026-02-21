import { MenuComponent } from './../menu/menu.component';
import { Cliente } from './../../model/Cliente';
import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:string;
  pass:string;
  cliente:Cliente;
  constructor(private loginService:LoginService, private menuComponent:MenuComponent) { }

  login(){
    this.loginService.login(this.usuario,this.pass).subscribe(c=>{
      this.cliente=c;
      if(this.cliente!=null){
        this.menuComponent.enabled=true;
        this.menuComponent.cliente=this.cliente;
        alert("login success");
      }else{
        alert("login failure");
      }
    });
  }

  ngOnInit(): void {
  }

}
