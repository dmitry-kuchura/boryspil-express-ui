import {DateTime} from './datetime';

export interface SearchCriteria {
  currency?: string;
  dateTime?: DateTime;
  destination?: string;
  distributor?: string;
  language?: string;
  origin?: string;
}
