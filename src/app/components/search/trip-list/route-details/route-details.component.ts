import {Component, Input, OnInit} from '@angular/core';
import {ItinerariesResponse} from '../../../../api-repository/model/models';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../../../../store/store';
import {selectItineraries} from '../../../../store/app/reducers/itineraries.reducers';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.scss']
})
export class RouteDetailsComponent implements OnInit {

  @Input()
  itineraryId: string;

  itinerariesResponse$ = new Observable<ItinerariesResponse>();

  constructor(private store: Store<AppState>) {
    // filter values in store
    this.itinerariesResponse$ = this.store.pipe(select(selectItineraries),
      map(data => data[this.itineraryId])
    );

  }

  ngOnInit() {
  }
}
