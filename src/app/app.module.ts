import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HeroService } from './hero.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './HeroDetailComponent/hero-detail.component';
import { HerosComponent } from './HerosComponent/heros.component';
import { DashboardComponent } from './DashboardComponent/dashboard.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HerosComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
