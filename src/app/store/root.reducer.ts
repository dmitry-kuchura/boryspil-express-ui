import * as fromAppReducer from './app/reducers/app.reducer';
import * as fromSearchReducer from './app/reducers/search.reducer';
import * as fromItinerariesReducer from './app/reducers/itineraries.reducers';
import * as fromOrderReducer from './app/reducers/order.reducer';
import * as fromOffersReducer from './app/reducers/offers.reducers';
import * as fromCartReducer from './app/reducers/cart.reducer';

export const ROOT_REDUCER = {
  app: fromAppReducer.reducer,
  search: fromSearchReducer.reducer,
  order: fromOrderReducer.reducer,
  itineraries: fromItinerariesReducer.reducer,
  offers: fromOffersReducer.reducer,
  cart: fromCartReducer.reducer
};

