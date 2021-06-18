import {Component, Input, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/store';
import {MatExpansionPanel} from '@angular/material/expansion';
import {OfferListComponent} from './offer-list/offer-list.component';
import {Offer} from '../../../../api-repository/model/offer';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.scss']
})
export class TripItemComponent implements OnInit {
  @ViewChild('panel', {static: false}) panel: MatExpansionPanel;

  @ViewChild('offer_list', {static: false}) offerList: OfferListComponent;

  @Input()
  offer: Offer;

  @Input()
  isFist: boolean;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
  }

  public getDuration(departureTime: string, arrivalTime: string) {
    let startTime = moment();
    let endTime = moment();
    const startHours = departureTime.split(':');
    const endHours = arrivalTime.split(':');

    startTime = startTime.hours(parseInt(startHours[0], 10)).minutes(parseInt(startHours[1], 10)).seconds(0);
    endTime = endTime.hours(parseInt(endHours[0], 10)).minutes(parseInt(endHours[1], 10)).seconds(0);

    const duration = moment.duration(endTime.diff(startTime)).as('minutes');

    return duration.toFixed(0);
  }

  selectTripClass() {
    if (this.panel.closed) {
      this.panel.open();
    }
  }
}
