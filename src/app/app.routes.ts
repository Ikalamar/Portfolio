import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DeveloperComponent } from './developer/developer';
import { DesignerComponent } from './designer/designer';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'developer',
    component: DeveloperComponent,
  },
  {
    path: 'designer',
    component: DesignerComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
