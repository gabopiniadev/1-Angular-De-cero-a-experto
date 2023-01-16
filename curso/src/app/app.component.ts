import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'curso';
  numero: number = 0

  sumar() { 
    this.numero += 1
  }

  restar() { 
    this.numero -= 1
  }

  //
  aritmetica(valor: number) { 
    this.numero += valor
  }

}


