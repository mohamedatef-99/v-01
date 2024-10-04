import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/hero/about/about.component";
import { SideComponent } from './components/side/side.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, HeroComponent, SideComponent, LeftSideComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mohamed Atef';
}
