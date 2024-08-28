import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../services/api-services.service';
import { IServices } from '../../../models/Services/iservices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit  {
  ServicesSection:IServices[] = [] as IServices[]
Item: any;
  constructor(private _ApiServicesService:ApiServicesService) {}
  ngOnInit(): void {
    this._ApiServicesService.getServicesSection().subscribe({
      next:(res) => {
        this.ServicesSection = res;
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
