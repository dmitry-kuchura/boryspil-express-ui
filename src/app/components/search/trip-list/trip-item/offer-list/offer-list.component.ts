import {Component, Input, OnInit} from '@angular/core';
import {CartResponse, OffersData} from '../../../../../api-repository/model/models';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  cartResponse$: Observable<CartResponse>;

  @Input()
  offers: OffersData[];

  filteredOffers: OffersData[];

  selectedOffer: OffersData;

  @Input()
  selectedClass: string;

  constructor() {

  }

  ngOnInit() {
    this.filterOffersBySelectedClass();
  }

  public filterOffersBySelectedClass() {
    this.filteredOffers = this.offers.filter(offer => offer.globalTravelClass.code === this.selectedClass);
    this.selectedOffer = this.filteredOffers[0];
  }

  getFlexibilityLevel(id: string): string {
    switch (id) {
      case '002' :
        return 'Full flexible';
      case '003' :
        return 'Semi flexible';
      case '004' :
        return 'Non flexible';
    }
  }

  addToBasket(id: any) {
    console.log(id);
  }
}
