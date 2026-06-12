import {
  Component,
  ElementRef,
  ViewChild,
  afterNextRender,
  OnDestroy,
} from '@angular/core';
import { RevealDirective } from '../../../directives/reveal.directive';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnDestroy {
  @ViewChild('canvasHost', { static: true })
  canvasHost!: ElementRef<HTMLDivElement>;

  private renderer?: THREE.WebGLRenderer;
  private rafId = 0;
  private cleanupFns: (() => void)[] = [];

  constructor() {
    // Runs in the browser only — safe with SSR.
    afterNextRender(() => this.initScene());
  }

  private initScene(): void {
    const host = this.canvasHost.nativeElement;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      host.clientWidth / host.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    host.appendChild(renderer.domElement);
    this.renderer = renderer;

    // --- Core shape: wireframe icosahedron with glowing vertices ---
    const group = new THREE.Group();
    const geo = new THREE.IcosahedronGeometry(2.3, 1);

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({
        color: 0x8b7bff,
        transparent: true,
        opacity: 0.35,
      })
    );
    group.add(wire);

    const vertices = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        color: 0x4ee0c2,
        size: 0.06,
        transparent: true,
        opacity: 0.9,
      })
    );
    group.add(vertices);

    // --- Ambient particle field ---
    const starCount = 350;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 22;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({
        color: 0x9494ab,
        size: 0.025,
        transparent: true,
        opacity: 0.6,
      })
    );
    scene.add(stars);
    scene.add(group);

    // --- Mouse parallax ---
    let targetX = 0;
    let targetY = 0;
    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.6;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener('mousemove', onMove);
    this.cleanupFns.push(() => window.removeEventListener('mousemove', onMove));

    const onResize = () => {
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight);
    };
    window.addEventListener('resize', onResize);
    this.cleanupFns.push(() => window.removeEventListener('resize', onResize));

    const clock = new THREE.Clock();
    const animate = () => {
      this.rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      if (!prefersReduced) {
        group.rotation.y = t * 0.12 + targetX;
        group.rotation.x = t * 0.06 + targetY;
        stars.rotation.y = t * 0.015;
        group.position.y = Math.sin(t * 0.6) * 0.15;
      }
      renderer.render(scene, camera);
    };
    animate();
  }

  ngOnDestroy(): void {
    if (typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.rafId);
    }
    this.cleanupFns.forEach((fn) => fn());
    this.renderer?.dispose();
  }
}
