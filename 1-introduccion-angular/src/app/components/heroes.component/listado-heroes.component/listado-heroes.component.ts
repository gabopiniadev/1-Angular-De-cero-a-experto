import { Component } from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado-heroes.component.html'
  })
  export class ListadoComponent {
  
    heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
    heroeBorrado: string = '';
    numberHeros: number = 0;
    deleteHeroes: string[] = [];
  
    borrarHeroe() {
      //this.heroeBorrado = this.heroes.shift() || '';
      this.heroeBorrado = this.heroes.shift() || '';
      this.numberHeros = this.deleteHeroes.unshift(this.heroeBorrado) || 0;
    }
  }