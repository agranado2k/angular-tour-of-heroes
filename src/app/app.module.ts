import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HeroService } from './hero.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './HeroDetailComponent/hero-detail.component';
import { HerosComponent } from './HerosComponent/heros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
