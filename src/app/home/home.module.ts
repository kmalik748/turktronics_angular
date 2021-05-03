import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])],
  exports: [
    SliderComponent
  ],
  declarations: [SliderComponent]
})
export class HomeModule {

}
