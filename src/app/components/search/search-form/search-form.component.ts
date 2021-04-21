import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AutocompleteComponent} from '../autocomplete/autocomplete.component';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import {DatepickerComponent} from '../datepicker/datepicker.component';
import {SatDatepickerRangeValue} from 'saturn-datepicker';
import {Moment} from 'moment';
import {PassengersSelectComponent, SearchPassengersData} from '../passengers-select/passengers-select.component';
import {SearchRequest, TrafficHub} from '../../../api-repository/model/models';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/store';
import {ActivatedRoute, Router} from '@angular/router';
import {search} from '../../../store/app/actions/search.actions';
import {deleteAllItineraries} from '../../../store/app/actions/itineraries.actions';
import {deleteAllOffers} from '../../../store/app/actions/offers.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchFormComponent implements OnInit, AfterViewInit {

  constructor(private store: Store<AppState>,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  fromTrafficHub: TrafficHub;
  toTrafficHub: TrafficHub;
  travelDate: Date;
  roundTripDate: SatDatepickerRangeValue<Moment>;
  roundTrip = false;
  searchPassengerData: SearchPassengersData;

  @ViewChild('autocompleteFrom', {static: false})
  private autocompleteFrom: AutocompleteComponent;

  @ViewChild('autocompleteTo', {static: false})
  private autocompleteTo: AutocompleteComponent;

  @ViewChild('datePicker', {static: false})
  private datePicker: DatepickerComponent;

  @ViewChild('roundtripDatePicker', {static: false})
  private roundtripDatePicker: DatepickerComponent;

  @ViewChild('toggleGroup', {static: false})
  private toggleGroup: MatButtonToggleGroup;

  @ViewChild('passengersSelect', {static: false})
  private passengersSelect: PassengersSelectComponent;

  ngOnInit() {
    this.travelDate = new Date();
  }

  ngAfterViewInit(): void {
    this.setTrafficHubsFromLocalStorage();
  }

  private swapTrafficHubs() {
    if (this.fromTrafficHub && this.toTrafficHub) {
      const tfFrom = this.fromTrafficHub;
      const tfTo = this.toTrafficHub;
      this.autocompleteFrom.setTrafficHub(tfTo);
      this.autocompleteTo.setTrafficHub(tfFrom);
    }
  }

  onFromSelected(selected: TrafficHub) {
    this.fromTrafficHub = selected;
  }

  onToSelected(selected: TrafficHub) {
    this.toTrafficHub = selected;
  }

  saveData(date) {
    this.travelDate = date;
  }

  submit() {
    if (this.fromTrafficHub && this.toTrafficHub) {
      const sr = this.createSearchRequest();
      this.store.dispatch(deleteAllItineraries());
      this.store.dispatch(deleteAllOffers());
      this.saveTrafficHubsToLoacalstorage();
      this.store.dispatch(search({searchRequest: sr}));
      this.router.navigate(['fares'], {relativeTo: this.activatedRoute});
    } else {
      // TODO Show errors
    }

  }

  private createSearchRequest(): SearchRequest {
    return {
      searchCriteria: {
        language: 'EN',
        origin: this.fromTrafficHub.code,
        destination: this.toTrafficHub.code,
        dateTime: {
          departure: this.travelDate.toISOString().split('.')[0]
        },
      },
    };
  }

  private setTrafficHubsFromLocalStorage() {
    const trafficHubFrom = localStorage.getItem('traffic_hub_from');
    const trafficHubTo = localStorage.getItem('traffic_hub_to');
    if (trafficHubFrom) {
      setTimeout(() => this.autocompleteFrom.setTrafficHub(JSON.parse(trafficHubFrom)));
    }
    if (trafficHubTo) {
      setTimeout(() => this.autocompleteTo.setTrafficHub(JSON.parse(trafficHubTo)));
    }
  }

  private saveTrafficHubsToLoacalstorage() {
    localStorage.setItem('traffic_hub_from', JSON.stringify(this.fromTrafficHub));
    localStorage.setItem('traffic_hub_to', JSON.stringify(this.toTrafficHub));
  }
}
