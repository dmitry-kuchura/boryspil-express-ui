import {createAction, props} from '@ngrx/store';
import {OrdersResponse} from '../../../api-repository/model/models';

export const getOrderByPnr = createAction(
  '[Order] Get order by Pnr', props<{pnr: string}>());
export const ordersFinished = createAction(
  '[Order] Order finished', props<{ordersResponse: OrdersResponse}>());
