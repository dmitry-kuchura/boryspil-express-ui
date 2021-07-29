import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {TrafficHubResponse} from './model/response/traffic-hub-response';
import {API_BINDINGS} from './api.bindings';

export class TrafficHubService extends ApiService {
  public findTrafficHub(name: string): Observable<TrafficHubResponse> {
    return this.doRequest(this.http.get<TrafficHubResponse>(this.API_URL + API_BINDINGS.TRAFFIC_HUB_FIND + '/' + name));
  }
}
