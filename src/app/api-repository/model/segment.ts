import {TrafficHub} from './traffic-hub';

export interface Segment {
  arrivalTime?: string;
  departureTime?: string;
  trafficHub: TrafficHub;
}
