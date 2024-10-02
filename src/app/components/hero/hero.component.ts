import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { SideComponent } from "./side/side.component";
import { LeftSideComponent } from "./left-side/left-side.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, SideComponent, LeftSideComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('Hero component')
  }
}
