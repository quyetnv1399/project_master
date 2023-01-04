import { TestComponent } from './test.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TestComponent },
];

export const TestRoutes = RouterModule.forChild(routes);
