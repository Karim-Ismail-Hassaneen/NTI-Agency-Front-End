import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
// import { IServices } from '../models/Services/iservices-cards';

@Injectable({
  providedIn: 'root'
})

export class ApiServicesService {

  constructor(private httpclient: HttpClient) {

  }
  getHeader():Observable<any> {
    return this.httpclient.get<any>(`${environment.BaseUrl}/Header`);
  }
  getServices():Observable<any> {
    return this.httpclient.get<any>(`${environment.BaseUrl}/Services`);
  }
  getAbout():Observable<any> {
    return this.httpclient.get<any>(`${environment.BaseUrl}/About`);
  }
  getPortfolio():Observable<any> {
    return this.httpclient.get<any>(`${environment.BaseUrl}/Portfolio`);
  }
  getContact():Observable<any> {
    return this.httpclient.get<any>(`${environment.BaseUrl}/Contact`);
  }


  // HOME SECTION DATA ##########################################################
  getHeroSection():Observable<any> {
    return this.httpclient.get<any>(`${environment.BaseUrl}/Home/Hero`)
  }
  getServicesSection():Observable<any> {
    return this.httpclient.get<any>(`${environment.BaseUrl}/Home/Services`)
  }
  getAboutSection():Observable<any> {
    return this.httpclient.get<any>(`${environment.BaseUrl}/Home/About`)
  }
  getContactSection():Observable<any> {
    return this.httpclient.get<any>(`${environment.BaseUrl}/Home/Contact`)
}
}