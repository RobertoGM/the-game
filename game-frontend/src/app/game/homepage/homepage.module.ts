import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { MoveFiguresComponent } from './components/move-figures/move-figures.component';

@NgModule({
  declarations: [HomepageComponent, MoveFiguresComponent],
  imports: [CommonModule, HomepageRoutingModule],
})
export class HomePageModule {}
