import {tassign} from 'tassign';
import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {AppState} from '../../store';
import {searchFinished} from '../actions/search.actions';
import {CartResponse, SearchResponse} from '../../../api-repository/model/models';
import {removeCart, updateCart} from '../actions/cart.actions';

export const key = 'cart';

export interface State {
  cartResponse: CartResponse;
}

export const initialState: State = {
  cartResponse: null
};

export const cartReducer = createReducer(
  initialState,
  on(updateCart, (state, {cartResponse}) => (tassign(state, {cartResponse}))),
  on(removeCart, (state) => (tassign(state, {cartResponse: null}))),
);

export function reducer(state: State | undefined, action: Action) {
  return cartReducer(state, action);
}

export const selectCartState = (state: AppState) => state[key];

export const getCartResult = createSelector(
  selectCartState,
  (state: State) => state.cartResponse
);
