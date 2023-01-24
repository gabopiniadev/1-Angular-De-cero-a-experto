import { Component } from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado-heroes.component.html'
  })
  export class ListadoComponent {
  
    heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
    heroeBorrado: string = '';
  
    borrarHeroe() {
      this.heroeBorrado = this.heroes.shift() || '';
    }
  }