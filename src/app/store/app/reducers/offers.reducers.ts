import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {OffersResponse} from '../../../api-repository/model/models';
import {addOffer, deleteAllOffers} from '../actions/offers.actions';

export const key = 'offers';

export interface State extends EntityState<OffersResponse> {
  // additional state property
  selectedOfferId: number | null;
}

export const adapter: EntityAdapter<OffersResponse> = createEntityAdapter<OffersResponse>(
  {selectId: (model: OffersResponse) => model.data.id}
);

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedOfferId: null,
});

export const offersReducer = createReducer(
  initialState,
  on(addOffer, (state, {data}) => {
    return adapter.addOne(data, state);
  }),
  on(deleteAllOffers, (state) => {
    return adapter.removeAll(state);
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return offersReducer(state, action);
}

export const selectItinerariesState = createFeatureSelector<State>(key);


// get the selectors
const {
  selectEntities
} = adapter.getSelectors();

export const selectOffers = createSelector(
  selectItinerariesState,
  selectEntities
);



