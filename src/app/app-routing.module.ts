import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PracticeAreaComponent } from './practice-area/practice-area.component';
import { ServicesComponent } from './pages/services/services.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about-us', component: AboutComponent },
  { path: 'practice-area', component: PracticeAreaComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
