import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from '../heroes/heroes.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  exports:      [HeroesComponent],
  declarations: [HeroesComponent],
  bootstrap:    [ AppComponent ],

})


export class AppModule { }
export class HeroesModule { }


