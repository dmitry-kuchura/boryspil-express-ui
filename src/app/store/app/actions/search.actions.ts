import {createAction, props} from '@ngrx/store';
import {SearchRequest} from '../../../api-repository/model/request/search-request';
import {SearchResponse} from '../../../api-repository/model/response/search-response';

export const search = createAction(
  '[Search] Search', props<{searchRequest: SearchRequest}>());
export const getSearchById = createAction(
  '[Search] Get search by id', props<{id: string}>());
export const getSearchByIdAndScrollToken = createAction(
  '[Search] Get search by id and scroll token', props<{id: string, scrollToken: string}>());
export const searchFinished = createAction(
  '[Search] Search finished', props<{searchResponse: SearchResponse}>());
