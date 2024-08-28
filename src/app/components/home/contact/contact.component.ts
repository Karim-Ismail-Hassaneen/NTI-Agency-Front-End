import { Component, OnInit } from '@angular/core';
import { IContact } from '../../../models/Contact/icontact';
import { ApiServicesService } from '../../../services/api-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  ContactSection:IContact[] = [] as IContact[]
  constructor(private _ApiServicesService:ApiServicesService) {}
  ngOnInit(): void {
    this._ApiServicesService.getContactSection().subscribe({
      next:(res) => {
        this.ContactSection = res;
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
