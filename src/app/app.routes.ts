import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainUiComponent } from './components/main-ui/main-ui.component';
import { ConnectionsComponent } from './components/projects/connections/connections.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  { path: 'home', component: MainUiComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'projects',
    children: [
      { path: '', component: ProjectsComponent },
      {
        path: 'connections',
        component: ConnectionsComponent,
      },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: '*', redirectTo: 'home' },
];
