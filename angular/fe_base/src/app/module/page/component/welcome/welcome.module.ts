import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutes } from './welcome.routing';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutes
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
