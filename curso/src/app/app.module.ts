import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContadorComponent } from './components/contador.component/contador.component';
import { HeroesComponent } from './components/heroes.component/heroes.component';
import { ListadoComponent } from './components/heroes.component/listado-heroes.component/listado-heroes.component';
import { HeroesModule } from './components/heroes.component/heroes.modules';
import { ContadorModule } from './components/contador.component/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
