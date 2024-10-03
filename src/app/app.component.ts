import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { SideComponent } from './components/hero/side/side.component';
import { LeftSideComponent } from './components/hero/left-side/left-side.component';
import { HeaderComponent } from "./components/hero/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, HeroComponent, AboutComponent, SideComponent, LeftSideComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mohamed Atef';
}
