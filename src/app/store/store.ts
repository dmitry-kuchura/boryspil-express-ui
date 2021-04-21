import * as fromAppReducer from './app/reducers/app.reducer';
import * as fromSearchReducer from './app/reducers/search.reducer';
import * as fromItinerariesReducer from './app/reducers/itineraries.reducers';
import * as fromOffersReducer from './app/reducers/offers.reducers';

export interface AppState {
    [fromAppReducer.key]: fromAppReducer.State;
    [fromSearchReducer.key]: fromSearchReducer.State;
    [fromItinerariesReducer.key]: fromItinerariesReducer.State;
    [fromOffersReducer.key]: fromOffersReducer.State;
}






