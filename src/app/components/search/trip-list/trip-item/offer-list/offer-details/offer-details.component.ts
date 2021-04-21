import {Component, Input, OnInit} from '@angular/core';
import {OffersResponse} from '../../../../../../api-repository/model/models';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectOffers} from '../../../../../../store/app/reducers/offers.reducers';
import {map} from 'rxjs/operators';
import {AppState} from '../../../../../../store/store';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {


  @Input()
  offerId: string;

  offerResponse$ = new Observable<OffersResponse>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // filter values in store
    this.offerResponse$ = this.store.pipe(select(selectOffers),
      map(data => data[this.offerId])
    );
  }

}
