import { PageComponent } from '../main-layout/page/page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PageComponent, children: [
    { path: '',  loadChildren: () => import('../page/component/welcome/welcome.module').then(m => m.WelcomeModule)},
    { path: 'page', loadChildren: () => import('../page/component/test/test.module').then(m => m.TestModule)},

  ]},
];

export const PageRoutes = RouterModule.forChild(routes);
