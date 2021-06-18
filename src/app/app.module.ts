import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';
import {ROOT_REDUCER} from './store/root.reducer';
import {ROOT_EFFECTS} from './store/root.effect';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchComponent} from './components/search/search.component';
import {MatComponentsModule} from './mat-components-module/mat-components.module';
import {FooterComponent} from './components/footer/footer.component';
import {RecommendationsComponent} from './components/search/recommendations/recommendations.component';
import {SearchFormComponent} from './components/search/search-form/search-form.component';
import {AutocompleteComponent} from './components/search/autocomplete/autocomplete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SatDatepickerModule, SatNativeDateModule} from 'saturn-datepicker';
import {DatepickerComponent} from './components/search/datepicker/datepicker.component';
import {DateFormatModule} from './date-format-module/date-format-module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {NgxLoadingModule} from 'ngx-loading';
import {TripListComponent} from './components/search/trip-list/trip-list.component';
import {RouteDetailsComponent} from './components/search/trip-list/route-details/route-details.component';
import {FaresComponent} from './components/search/fares/fares.component';
import {EffectsModule} from '@ngrx/effects';
import {OrdersComponent} from './components/orders/orders.component';
import {OrderItemInformationComponent} from './components/orders/order-item-information/order-item-information.component';
import {OrderFinancialTransactionsComponent} from './components/orders/order-financial-transactions/order-financial-transactions.component';
import {OfferDetailsComponent} from './components/search/trip-list/trip-item/offer-details/offer-details.component';
import {TripItemComponent} from './components/search/trip-list/trip-item/trip-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    FooterComponent,
    RecommendationsComponent,
    SearchFormComponent,
    AutocompleteComponent,
    DatepickerComponent,
    TripListComponent,
    FaresComponent,
    RouteDetailsComponent,
    OrdersComponent,
    OrderItemInformationComponent,
    OrderFinancialTransactionsComponent,
    OfferDetailsComponent,
    TripItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatComponentsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SatDatepickerModule,
    SatNativeDateModule,
    DateFormatModule,
    NgxLoadingModule.forRoot({}),
    StoreModule.forRoot(ROOT_REDUCER, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot(ROOT_EFFECTS)
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
