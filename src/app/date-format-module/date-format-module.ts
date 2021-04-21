import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule} from 'saturn-datepicker';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {NgModule} from '@angular/core';

export const DateFormats = {
  parse: {
    dateInput: ['DD/MM/YYYY']
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  imports: [
    SatDatepickerModule,
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: DateFormats},
  ],
})
export class DateFormatModule {

}

