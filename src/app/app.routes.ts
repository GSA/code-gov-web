import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent }
];
