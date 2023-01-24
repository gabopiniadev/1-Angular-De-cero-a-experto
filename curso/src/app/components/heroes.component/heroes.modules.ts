import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './heroes.component';
import { ListadoComponent } from './listado-heroes.component/listado-heroes.component';

@NgModule({
    declarations: [
        HeroesComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule {}