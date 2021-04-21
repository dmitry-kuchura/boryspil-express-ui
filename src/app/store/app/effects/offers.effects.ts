import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ApiService} from '../../../api-repository/api.service';
import * as OffersActions from '../actions/offers.actions';
import {addOffer} from '../actions/offers.actions';
import {catchError, concatMap, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {AppState} from '../../store';
import {select, Store} from '@ngrx/store';
import {selectOffers} from '../reducers/offers.reducers';


@Injectable()
export class OffersEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store<AppState>
  ) {
  }

  getOfferById$ = createEffect(() => this.actions$.pipe(
    ofType(OffersActions.getOfferById), // type of action
    concatMap(action => of(action).pipe( // select all entities from store
      withLatestFrom(this.store.pipe(select(selectOffers))))
    ),
    mergeMap(([action, iternaries]) => {
      if (iternaries[action.offerId]) { // check is entity with action.id exist
        return EMPTY; // return empty observable if entity exist
      } else {
        return this.apiService.getOfferById(action.offerId) // call api and return action that save result to store
          .pipe(
            map(offerResponse => (addOffer({data: offerResponse})),
              catchError(() => EMPTY)
            )
          );
      }
    })
    )
  );
}
