import { Component, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';
  http = inject(HttpClient);
  productos: Product[] = [];

  changeTitulo(){
    this.title = "proyectoRuben";
  }

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products/')
    .subscribe((data) => {
      this.productos = data;
      //la data que recibimos de la API hay que asignarla al array de productos que 
    });

  }

}
