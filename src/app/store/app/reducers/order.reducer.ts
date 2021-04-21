import {tassign} from 'tassign';
import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {AppState} from '../../store';
import {OrdersResponse} from '../../../api-repository/model/models';
import {ordersFinished} from '../actions/order.actions';


export const key = 'order';

export interface State {
  ordersResponse: OrdersResponse;
}

export const initialState: State = {
  ordersResponse: null
};

export const orderReducer = createReducer(
  initialState,
  on(ordersFinished, (state, {ordersResponse}) => (tassign(state, {ordersResponse}))),
);

export function reducer(state: State | undefined, action: Action) {
  return orderReducer(state, action);
}

export const selectOrderState = (state: AppState) => state[key];

export const getOrderResult = createSelector(
  selectOrderState,
  (state: State) => state.ordersResponse
);
