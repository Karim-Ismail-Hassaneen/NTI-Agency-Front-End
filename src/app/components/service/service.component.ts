import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../services/api-services.service';
import { IServices } from '../../models/Services/iservices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit {
  services:IServices[] = [] as IServices[];
  constructor(private _ApiServicesService:ApiServicesService) {}
  ngOnInit(): void {
    this._ApiServicesService.getServices().subscribe({
      next:(res) => {
        this.services = res;
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
