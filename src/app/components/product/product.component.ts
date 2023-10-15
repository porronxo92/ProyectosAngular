import { Component, Input } from '@angular/core';
//añadir Input en el import para poder utilizar la clase, y asi pasarle por parametros en el componente cuando se referencia en el app.component

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product', //identificador del componente para referenciarlo en el app.component principal
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //tambien se podria poner un ! en la variable que se inicializa para indicar que el producto ahora no se inicializara por parametros en el app
  @Input() producto!: Product;
  // {
  //   title: 'Titulo componente',
  //   price: 22,
  //   id: 12312,
  //   images:[]
  // };
}
