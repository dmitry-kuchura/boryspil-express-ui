import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {OrderItem, OrdersData, OrdersResponse} from '../../api-repository/model/models';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/store';
import {ActivatedRoute} from '@angular/router';
import {getOrderResult} from '../../store/app/reducers/order.reducer';
import {getOrderByPnr} from '../../store/app/actions/order.actions';

export enum Direction {
  Outward = 'OUTWARD',
  Inward = 'INWARD'
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  ordersResponse$: Observable<OrdersResponse>;
  ordersData: OrdersData;
  orderItemOutbound: OrderItem;
  orderItemInbound: OrderItem;

  constructor(
    private store: Store<AppState>,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ordersResponse$ = this.store.select(getOrderResult);
    this.ordersResponse$.subscribe(val => {
      if (val) {
        this.ordersData = val.data;
        this.initOrderItemsBounds();
      }
    });
    this.activatedRoute.queryParams.subscribe(val => {
      this.loadDataWithUrlParams();
    });

    // this.ordersData.paymentOptionsincludedInfo().subscribe((incudedInfos: IncludedInformations) => {
    //   if (incudedInfos) {
    //     this.financialTransactions = Utils.getPropertyFromObject(incudedInfos, 'financialTransactions');
    //     this.refundableTickets = Utils.getPropertyFromObject(incudedInfos, 'tickets')
    //       .filter(ticket => ticket.status === TicketStatus.Ticketed &&
    //         Utils.getPropertyFromObject(ticket, 'afterSalesConditions.refundConditions.isRefundable') === true);
    //     // Retrieve all exchangeable ticketed tickets
    //     this.ticketedTicketsExchangeable = Utils.getPropertyFromObject(incudedInfos, 'tickets')
    //       .filter(ticket => ticket.status === TicketStatus.Ticketed &&
    //         Utils.getPropertyFromObject(ticket, 'afterSalesConditions.exchangeConditions.isExchangeable') === true);
    //     // Init ticket id for each bound
    //     this.initTicketsIdForBounds();
    //     this.documents = Utils.getPropertyFromObject(incudedInfos, 'documents');
    //     // Retrieve link with all tickets included (outbound and inbound)
    //     this.getTicketsLinks(this.documents);
    //   }
    // })
  }

  private loadDataWithUrlParams() {
    const pnr = this.activatedRoute.snapshot.queryParams.pnr;
    if (pnr) {
      this.store.dispatch(getOrderByPnr({pnr}));
    }
  }

  private initOrderItemsBounds() {
    this.orderItemOutbound = this.ordersData.orderItems.find(orderItem => orderItem.direction === Direction.Outward);
    this.orderItemInbound = this.ordersData.orderItems.find(orderItem => orderItem.direction === Direction.Inward);
  }

}
