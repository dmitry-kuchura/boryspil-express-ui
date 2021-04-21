import {Injectable} from '@angular/core';
import {API_BINDINGS} from './api.bindings';
import {apiRequestFinished, apiRequestSent} from '../store/app/actions/app.actions';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators';
import {
  ItinerariesResponse,
  OffersResponse,
  RailkitSetting,
  SearchRequest,
  SearchResponse,
  TrafficHub, TrafficHubResponse
} from './model/models';
import {AppState} from '../store/store';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = environment.api_url;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) {
  }

  public findTrafficHub(name: string): Observable<TrafficHubResponse> {
    return this.doRequest(this.http.get<TrafficHubResponse>(this.API_URL + API_BINDINGS.TRAFFIC_HUB_FIND + '/' + name));
  }

  public searchOffers(searchRequest: SearchRequest): Observable<SearchResponse> {
    return this.doRequest(this.http.post<SearchResponse>(this.API_URL + API_BINDINGS.SEARCH_OFFERS, searchRequest));
  }

  public getSearchById(id: string): Observable<SearchResponse> {
    return this.doRequest(this.http.get<SearchResponse>(this.API_URL + API_BINDINGS.SEARCH_OFFERS + '/' + id));
  }

  public getSearchByIdAndScrollToken(id: string, scrollToken: string): Observable<SearchResponse> {
    return this.doRequest(this.http.get<SearchResponse>(this.API_URL + API_BINDINGS.SEARCH_OFFERS + '/' + id,
      {params: {scrollToken}}));
  }

  public getOfferById(id: string): Observable<ItinerariesResponse> {
    return this.doRequest(this.http.get<OffersResponse>(this.API_URL + API_BINDINGS.OFFERS + '/' + id));
  }

  doRequest(request: Observable<any>): Observable<any> {
    this.store.dispatch(apiRequestSent());
    return request.pipe(
      catchError(err => throwError(this.handleError(err))),
      finalize(() => {
        this.store.dispatch(apiRequestFinished());
      })
    );
    return request;
  }

  handleError(error: any): Error {
    if (error.status === 401) {
      // TODO error handler
    }
    error.error.errors.forEach(responseError => {
      // TODO error handler
    });
    return error;
  }
}
