import { Component } from '@angular/core';
import { ServicesComponent } from "./services/services.component";
import { HeroComponent } from "./hero/hero.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesComponent, HeroComponent, ContactComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
