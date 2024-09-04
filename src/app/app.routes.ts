import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainUiComponent } from './components/main-ui/main-ui.component';

export const routes: Routes = [
  { path: 'home', component: MainUiComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home' },
];
