import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FactionsComponent }   from '../factions/factions.component';
import { FeaturesComponent }   from '../features/features.component';
import { TransformersComponent }   from '../transformers/transformers.component';
//import { HeroesComponent }      from './heroes/heroes.component';
//import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: FactionsComponent },
  { path: 'detail/:id', component: FactionsComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'transformers', component: TransformersComponent }
 // { path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
