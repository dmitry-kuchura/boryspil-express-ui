import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {RecommendationsComponent} from './components/search/recommendations/recommendations.component';
import {FaresComponent} from './components/search/fares/fares.component';
import {OrdersComponent} from './components/orders/orders.component';


const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
    children: [
      {
        path: '',
        component: RecommendationsComponent
      },
      {
        path: 'fares',
        component: FaresComponent
      }
    ]
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: '**',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
