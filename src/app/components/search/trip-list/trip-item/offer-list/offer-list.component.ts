import {Component, Input, OnInit} from '@angular/core';
import {Segment} from '../../../../../api-repository/model/models';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {
  @Input()
  segment: Segment[];

  constructor() {

  }

  ngOnInit() {
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
}
