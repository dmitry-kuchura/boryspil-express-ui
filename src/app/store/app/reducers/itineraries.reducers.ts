import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {ItinerariesResponse} from '../../../api-repository/model/models';
import {addItinerary, deleteAllItineraries} from '../actions/itineraries.actions';

export const key = 'itineraries';

export interface State extends EntityState<ItinerariesResponse> {
  selectedItineraryId: number | null;
}

export const adapter: EntityAdapter<ItinerariesResponse> = createEntityAdapter<ItinerariesResponse>(
  {selectId: (model: ItinerariesResponse) => model.data.id}
);

export const initialState: State = adapter.getInitialState({
  selectedItineraryId: null,
});

export const itinerariesReducer = createReducer(
  initialState,
  on(addItinerary, (state, {data}) => {
    return adapter.addOne(data, state);
  }),
  on(deleteAllItineraries, (state) => {
    return adapter.removeAll(state);
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return itinerariesReducer(state, action);
}

export const selectItinerariesState = createFeatureSelector<State>(key);


// get the selectors
const {
  selectEntities
} = adapter.getSelectors();

export const selectItineraries = createSelector(
  selectItinerariesState,
  selectEntities
);


