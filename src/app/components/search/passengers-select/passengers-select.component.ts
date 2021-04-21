import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-passengers-select',
  templateUrl: './passengers-select.component.html',
  styleUrls: ['./passengers-select.component.scss']
})
export class PassengersSelectComponent implements OnInit {

  @Input()
  passengers = new SearchPassengersData(1, 0, 0, 0, 0);

  @Output()
  passengersDataChange: EventEmitter<SearchPassengersData> = new EventEmitter<SearchPassengersData>();

  constructor() {
  }

  addPassenger(prop) {
    this.passengers[prop]++;
    this.passengersDataChange.emit(this.passengers);
  }

  removePassenger(prop) {
    this.passengers[prop]--;
    this.passengersDataChange.emit(this.passengers);
  }

  ngOnInit() {
  }

}


export class SearchPassengersData {
  public adult: number;
  public senior: number;
  public youth: number;
  public children: number;
  public infant: number;

  public getCount(): number {
    return this.adult + this.senior + this.youth + this.children + this.infant;
  }

  constructor(adult: number, senior: number, youth: number, children: number, infant: number) {
    this.adult = adult;
    this.senior = senior;
    this.youth = youth;
    this.children = children;
    this.infant = infant;
  }
}


