import { Component } from '@angular/core';
import { SideComponent } from '../../side/side.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SideComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
