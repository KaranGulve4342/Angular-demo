// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';
// import { HeroComponent } from './components/hero/hero.component';
// import { HomeComponent } from "./components/home/home.component";
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, HeaderComponent, HeroComponent, HomeComponent, FormsModule, CommonModule], 
//   template: `
//     <app-header/>
//     <app-hero />
//     <app-home />
//     <router-outlet />
//   `,
//   styles: [],
// })
// export class AppComponent {
//   title = 'first-ng-app';
// }


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, HomeComponent],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-home></app-home>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'first-ng-app';
}
