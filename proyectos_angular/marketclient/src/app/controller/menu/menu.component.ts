import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Cliente } from './../../model/Cliente';
import { CommonModule } from '@angular/common'; // Para *ngFor y *ngIf
import { FormsModule } from '@angular/forms';   // Para [(ngModel)]

@Component({
  selector: 'app-menu',
  standalone: false,   //Modificado
  // imports: [CommonModule, FormsModule, RouterModule],  //Modificado
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
  // imports: [RouterOutlet]
})

export class MenuComponent implements OnInit {
  enabled: boolean = false;
  cliente: Cliente;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(["/portada"])
  }
}
