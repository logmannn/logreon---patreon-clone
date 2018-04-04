import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { ContributorComponent }   from './contributors/contributors.component';
import { ContributorDetailComponent } from './contributor-detail/contributor-detail.component'
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
   path: 'about',
   component: AboutComponent
 },
 {
  path: 'contributor',
  component: ContributorComponent
},
{
   path: 'contributors/:id',
   component: ContributorDetailComponent
 },
 {
   path: 'admin',
   component: AdminComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
