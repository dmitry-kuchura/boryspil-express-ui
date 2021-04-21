import {createAction, props} from '@ngrx/store';
import {CartResponse} from '../../../api-repository/model/models';

export const createCart = createAction('[Cart] Cart Create');
export const updateCart = createAction('[Cart] Cart Update', props<{ cartResponse: CartResponse }>());
export const removeCart = createAction('[Cart] Cart Remove');
