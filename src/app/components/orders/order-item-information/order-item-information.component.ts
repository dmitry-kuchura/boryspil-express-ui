import {Component, Input, OnInit} from '@angular/core';
import {Actor, OrderItem} from '../../../api-repository/model/models';
import {Direction} from '../orders.component';

@Component({
  selector: 'app-order-item-information',
  templateUrl: './order-item-information.component.html',
  styleUrls: ['./order-item-information.component.scss']
})
export class OrderItemInformationComponent implements OnInit {

  @Input() orderItem: OrderItem;
  @Input() actors: Actor[];

  direction = Direction;

  constructor() { }

  ngOnInit() {
  }

}
