import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IHeader } from '../../models/Header/iheader';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  Header:IHeader[] = [] as IHeader[]
  constructor(private _ApiServicesService:ApiServicesService) {}
  ngOnInit(): void {
    this._ApiServicesService.getHeader().subscribe({
      next:(res) => {
        this.Header = res;
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
