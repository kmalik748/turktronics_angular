import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PorfolioComponent} from './porfolio.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: PorfolioComponent}
  ])]
})
export class PortfolioModule {

}
