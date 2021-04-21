import {MatAutocompleteSelectedEvent} from '@angular/material';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ApiService} from '../../../api-repository/api.service';
import {TrafficHub} from '../../../api-repository/model/models';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {

  @Input()
  inputLabel: 'Label';

  @Output()
  itemSelected = new EventEmitter<TrafficHub>();

  selectedItem: TrafficHub;

  stateCtrl: FormControl;
  filteredHubs: TrafficHub[];

  constructor(private api: ApiService) {
    this.stateCtrl = new FormControl(this.selectedItem, [Validators.required]);
    this.stateCtrl.valueChanges.subscribe(value => {
      this.itemSelected.emit(null);
      if (value.length > 2) {
        this.api.findTrafficHub(value).subscribe(data => {
          this.filteredHubs = data.data;
        });
      } else {
        this.filteredHubs = null;
      }
    });
  }


  private onItemSelect(event: MatAutocompleteSelectedEvent) {
    this.selectedItem = event.option.value;
    this.itemSelected.emit(event.option.value);
  }

  public setTrafficHub(trafficHub: TrafficHub) {
    this.stateCtrl.setValue(trafficHub, {emitEvent: false});
    this.itemSelected.emit(trafficHub);
  }

  displayName(hub?: any): string | undefined {
    return hub ? hub.name : undefined;
  }
}
