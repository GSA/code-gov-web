import { Routes, RouterModule } from '@angular/router';
import { RepoComponent, ReposComponent } from '../../utils/app-components';


export const REPO_ROUTES: Routes = [
  {
    path: 'repos',
    component: ReposComponent,
    children: [
      { path: ':id', component: RepoComponent }
    ]
  }
];
