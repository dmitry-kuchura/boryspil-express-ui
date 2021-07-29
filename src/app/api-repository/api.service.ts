import {Injectable} from '@angular/core';
import {API_BINDINGS} from './api.bindings';
import {apiRequestFinished, apiRequestSent} from '../store/app/actions/app.actions';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {ItinerariesResponse, OffersResponse} from './model/models';
import {AppState} from '../store/store';
import {Store} from '@ngrx/store';
import {SearchRequest} from './model/request/search-request';
import {SearchResponse} from './model/response/search-response';
import {TrafficHubResponse} from './model/response/traffic-hub-response';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  public API_URL = environment.api_url;

  constructor(
    public http: HttpClient,
    public store: Store<AppState>
  ) {
  }

  public findTrafficHub(name: string): Observable<TrafficHubResponse> {
    return this.doRequest(this.http.get<TrafficHubResponse>(this.API_URL + API_BINDINGS.TRAFFIC_HUB_FIND + '/' + name));
  }

  public searchOffers(searchRequest: SearchRequest): Observable<SearchResponse> {
    return this.doRequest(this.http.post<SearchResponse>(this.API_URL + API_BINDINGS.SEARCH_OFFERS, searchRequest));
  }

  public getOfferById(id: string): Observable<ItinerariesResponse> {
    return this.doRequest(this.http.get<OffersResponse>(this.API_URL + API_BINDINGS.OFFER + '/' + id));
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
