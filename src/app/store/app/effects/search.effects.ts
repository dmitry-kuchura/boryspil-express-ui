import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ApiService} from '../../../api-repository/api.service';
import * as SearchActions from '../actions/search.actions';
import {catchError, concatMap, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {
  }

  // search effects
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

  getSearchById$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActions.getSearchById),
    mergeMap(action => this.apiService.getSearchById(action.id)
      .pipe(
        map(search => ({type: SearchActions.searchFinished.type, searchResponse: search}),
          catchError(() => EMPTY)
        )
      )
    )
  ));

  getSearchByIdAndScrollTocken$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActions.getSearchByIdAndScrollToken),
    mergeMap(action => this.apiService.getSearchByIdAndScrollToken(action.id, action.scrollToken)
      .pipe(
        map(search => ({type: SearchActions.searchFinished.type, searchResponse: search}),
          catchError(() => EMPTY)
        )
      )
    )
  ));
}
