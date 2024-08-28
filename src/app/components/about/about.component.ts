import { Component, OnInit } from '@angular/core';
import { IAbout } from '../../models/About/iabout';
import { ApiServicesService } from '../../services/api-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  About:IAbout[] = [] as IAbout[]
  constructor(private _ApiServicesService:ApiServicesService) {}
  ngOnInit(): void {
   this._ApiServicesService.getAbout().subscribe({
    next:(res) => {
      this.About = res;
    },
    error:(err) => {
      console.log(err);
    }
   })
  }

}
