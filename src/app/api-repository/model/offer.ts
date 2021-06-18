import {TrafficHub} from './traffic-hub';
import {Segment} from './models';

export interface Offer {
  id?: string;
  number: number;
  isOutbound: boolean;
  departureTrafficHub: TrafficHub;
  arrivalTrafficHub: TrafficHub;
  segments: Array<Segment>;
  departureTime: string;
  arrivalTime: string;
}
