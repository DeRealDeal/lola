import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainUiComponent } from './components/main-ui/main-ui.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: MainUiComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '*', redirectTo: 'home' },
];
