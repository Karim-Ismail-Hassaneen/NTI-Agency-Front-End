import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../services/api-services.service';
import { IHero } from '../../../models/Home/Hero/ihero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  HeroSectionData:IHero[] = [] as IHero[]
  constructor(private _ApiServicesService:ApiServicesService) {}
  ngOnInit(): void {
    this._ApiServicesService.getHeroSection().subscribe({
      next:(res) => {
        this.HeroSectionData = res;
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
