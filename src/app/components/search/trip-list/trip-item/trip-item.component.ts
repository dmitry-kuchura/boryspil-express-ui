import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {OffersData, TravelOffer} from '../../../../api-repository/model/models';
import {environment} from '../../../../../environments/environment';
import {getItineraryById} from '../../../../store/app/actions/itineraries.actions';
import {getOfferById} from '../../../../store/app/actions/offers.actions';
import * as moment from 'moment';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/store';
import {MatExpansionPanel} from '@angular/material/expansion';
import {OfferListComponent} from './offer-list/offer-list.component';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.scss']
})
export class TripItemComponent implements OnInit {

  BASE_HREF = environment.api_url;

  selectedClass = '002';

  @ViewChild('panel', {static: false}) panel: MatExpansionPanel;

  @ViewChild('offer_list', {static: false}) offerList: OfferListComponent;

  @Input()
  offer: TravelOffer;

  @Input()
  isFist: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  panelOpen(itineraryId: string, offersData: OffersData[]) {
    this.store.dispatch(getItineraryById({itineraryId}));
    offersData.forEach(offer => {
      this.store.dispatch(getOfferById({offerId: offer.id}));
    });
  }

  public getDuration(duration: string) {
    return moment.utc(moment.duration(duration).as('milliseconds')).format('H[h] mm[m]');
  }


  selectTripClass(selectedClass: string) {
    if (this.offerList.selectedClass !== selectedClass) {
      this.selectedClass = selectedClass;
      this.offerList.selectedClass = selectedClass;
      this.offerList.filterOffersBySelectedClass();
    }

    if (this.panel.closed) {
      this.panel.open();
    }
  }

}
