import {tassign} from 'tassign';
import {Action, createReducer, createSelector, on} from '@ngrx/store';
import {AppState} from '../../store';
import {searchFinished} from '../actions/search.actions';
import {SearchResponse} from '../../../api-repository/model/models';


export const key = 'search';

export interface State {
  searchResponse: SearchResponse
}

export const initialState: State = {
  searchResponse: null
};

export const searchReducer = createReducer(
  initialState,
  on(searchFinished, (state, {searchResponse}) => (tassign(state, {searchResponse}))),
);

export function reducer(state: State | undefined, action: Action) {
  return searchReducer(state, action);
}

export const selectSearchState = (state: AppState) => state[key];


export const getSearchResult = createSelector(
  selectSearchState,
  (state: State) => state.searchResponse
);
