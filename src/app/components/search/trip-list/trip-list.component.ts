import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/store';
import {SearchResponse} from '../../../api-repository/model/models';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {getSearchResult} from '../../../store/app/reducers/search.reducer';
import {getSearchById, getSearchByIdAndScrollToken} from '../../../store/app/actions/search.actions';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
})
export class TripListComponent implements OnInit {

  searchResponse$: Observable<SearchResponse>;

  constructor(private store: Store<AppState>,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.searchResponse$ = this.store.select(getSearchResult);
    this.activatedRoute.queryParams.subscribe(val => {
      this.loadDataWithUrlParams();
    });
  }


  private loadDataWithUrlParams() {
    const id = this.activatedRoute.snapshot.queryParams.searchId;
    const scrollToken = this.activatedRoute.snapshot.queryParams.scrollToken;
    if (id && scrollToken) {
      this.store.dispatch(getSearchByIdAndScrollToken({id, scrollToken}));
    }
    if (id && !scrollToken) {
      this.store.dispatch(getSearchById({id}));
    }
  }
}
