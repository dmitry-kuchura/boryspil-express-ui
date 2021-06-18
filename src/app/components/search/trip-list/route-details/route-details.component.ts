import {Component, Input, OnInit} from '@angular/core';
import {Segment} from '../../../../api-repository/model/segment';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.scss']
})
export class RouteDetailsComponent implements OnInit {
  @Input()
  segments: Segment[];

  constructor() {

  }

  ngOnInit() {
  }
}
