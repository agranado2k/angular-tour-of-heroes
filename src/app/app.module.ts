import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { HeroService } from './hero.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './HeroDetailComponent/hero-detail.component';
import { HerosComponent } from './HerosComponent/heros.component';
import { DashboardComponent } from './DashboardComponent/dashboard.component';

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
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HerosComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
