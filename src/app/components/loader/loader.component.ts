import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  anim!: anime.AnimeTimelineInstance;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.anim = anime.timeline({
      loop: false,
      direction: 'alternate',
    });

    this.anim
    .add({
      targets: '#hexagon path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuart',
      duration: 2000,
      delay: function(el, i) { return i * 250 },
    })
    .add({
      targets: '#hexagon #M',
      duration: 1000,
      opacity: 1,
      easing: 'easeInOutQuart',
      complete: () => {
        this.router.navigate(['/hero']);
      }
    });
  //   .add({
  //     targets: '#hexagon path',
  //     delay: 300,
  //     duration: 1500,
  //     easing: 'easeInOutQuart',
  //     strokeDashoffset: [anime.setDashoffset, 0],
  //   })
  //   .add({
  //     targets: '#hexagon #M',
  //     duration: 700,
  //     easing: 'easeInOutQuart',
  //     opacity: 1,
  //   })
  //   .add({
  //     targets: '#hexagon path',
  //     delay: 500,
  //     duration: 300,
  //     easing: 'easeInOutQuart',
  //     opacity: 0,
  //     scale: 0.1,
  //   })
  //   .add({
  //     targets: '#hexagon #M',
  //     duration: 200,
  //     easing: 'easeInOutQuart',
  //     opacity: 0,
  //     zIndex: -1,
  //     complete: () => {
  //            this.router.navigate(['/hero']);
  //          }
  //   });
  }
}
