import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServiceComponent } from './components/service/service.component';
import { authGuard } from './Guard/auth.guard';


export const routes: Routes = [
    {path: '', pathMatch: 'full' ,redirectTo: 'Home'},
    {path: 'Home', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Service', component: ServiceComponent, canActivate:[authGuard]},
    {path: 'Portfolio', component: PortfolioComponent},
    {path: 'Contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent},
];
