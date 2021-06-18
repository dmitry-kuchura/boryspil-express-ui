import {TrafficHub} from './traffic-hub';

export interface Offer {
  arrivalTime?: string;
  departureTime?: string;
  trafficHub: TrafficHub;
}
