import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  errorMessege: string;

  @Output()
  changeData = new EventEmitter<Date>();

  @Input()
  rangeMode;

  todayDate = new Date();

  form: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    if (this.rangeMode) {
      this.form = this.fb.group({
        date: [{begin: this.todayDate, end: moment(this.todayDate).add(1, 'days').toDate()}]
      });
    } else {
      this.form = this.fb.group({
        date: this.todayDate
      });
    }
  }

  saveData(event) {
    this.setError(null);
    this.changeData.emit(event.value);
  }

  setError(error: string) {
    this.errorMessege = error;
  }
}
