import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import('./module/page/page.module').then(m => m.PageModule) },
];

export const AppRoutes = RouterModule.forRoot(routes);
