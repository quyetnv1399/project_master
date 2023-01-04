import { NgModule } from '@angular/core';
import { FooterComponent } from '../main-layout/footer/footer.component';
import { HeaderComponent } from '../main-layout/header/header.component';
import { PageComponent } from '../main-layout/page/page.component';

import { PageRoutes } from './page.routing';


@NgModule({
  imports: [
    PageRoutes,
  ],
  declarations: [
    PageComponent,
    FooterComponent,
    HeaderComponent]
})
export class PageModule { }
