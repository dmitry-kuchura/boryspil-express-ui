import {createAction, props} from '@ngrx/store';
import {ItinerariesResponse} from '../../../api-repository/model/models';

export const getItineraryById = createAction('[Itinerary] Check in store and call api', props<{ itineraryId: string }>());
export const addItinerary = createAction('[Itinerary] Add itinerary to store', props<{ data: ItinerariesResponse }>());
export const deleteAllItineraries = createAction('[Itinerary] Delete all data');
