import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ApiService} from '../../../api-repository/api.service';
import * as SearchActions from '../actions/search.actions';
import {catchError, concatMap, map} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {
  }

  search$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActions.search),
    concatMap(action => this.apiService.searchOffers(action.searchRequest)
      .pipe(
        map(search => ({type: SearchActions.searchFinished.type, searchResponse: search}),
          catchError(() => EMPTY)
        )
      )
    )
  ));
}
