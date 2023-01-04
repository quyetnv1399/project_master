import { WelcomeComponent } from './welcome.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
];

export const WelcomeRoutes = RouterModule.forChild(routes);
