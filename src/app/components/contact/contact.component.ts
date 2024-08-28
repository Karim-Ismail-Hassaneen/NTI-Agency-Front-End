import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IContact } from '../../models/Contact/icontact';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  Contact:IContact[] = [] as IContact[]
  constructor(private _ApiServicesService:ApiServicesService) {}
  ngOnInit(): void {
    this._ApiServicesService.getContact().subscribe({
      next:(res) => {
        this.Contact = res;
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
  trackByFn(index: number, item: any): number {
    return item.id; // or any unique identifier
  }
}