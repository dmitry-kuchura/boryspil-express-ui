import {createAction, props} from '@ngrx/store';
import {OffersResponse} from '../../../api-repository/model/models';

export const getOfferById = createAction('[Offers] Get OfferById User', props<{ offerId: string }>());
export const addOffer = createAction('[Offers] Add offer to store', props<{ data: OffersResponse }>());
export const deleteAllOffers = createAction('[Offers] Delete all data');
