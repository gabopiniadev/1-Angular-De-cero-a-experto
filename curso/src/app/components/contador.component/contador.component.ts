import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})

export class ContadorComponent{
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