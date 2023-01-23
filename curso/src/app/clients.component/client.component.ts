import { Component } from "@angular/core";

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css']
})
export class ClientComponent {

    title: string = 'curso';
  numero: number = 0

  base: number = 5

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