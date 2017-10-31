import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  heroes;
  title = 'Tour of Heros';
  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  constructor(private heroService: HeroService) { }
}