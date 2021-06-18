import {Component, Input, OnInit} from '@angular/core';
import {Segment} from '../../../../../api-repository/model/segment';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {
  @Input()
  segments: Segment[];

  constructor() {

  }

  ngOnInit() {
  }
}
