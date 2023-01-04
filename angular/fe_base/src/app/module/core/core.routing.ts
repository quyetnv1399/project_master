import { CoreComponent } from './core.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: CoreComponent },
];

export const CoreRoutes = RouterModule.forChild(routes);
