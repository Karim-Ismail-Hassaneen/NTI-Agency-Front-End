import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IPortfolio } from '../../models/Portfolio/iportfolio';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  Portfolio:IPortfolio[] = [] as IPortfolio[];
  constructor(private _ApiServicesService:ApiServicesService) {}
  ngOnInit(): void {
    this._ApiServicesService.getPortfolio().subscribe({
      next:(res) => {
        this.Portfolio = res;
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
