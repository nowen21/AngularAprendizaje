import { Component } from '@angular/core';

// como se arma un componene
@Component({
  selector: 'app-root', // nombre del componente
  templateUrl: './app.component.html', // ruta del archivo html
  styleUrls: ['./app.component.css'] // ruta de los css
})

// definir las propiedades que se van a mostrarn en el componente
export class AppComponent {
  title = 'credibanco';
}
