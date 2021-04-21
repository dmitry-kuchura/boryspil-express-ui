import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderFinancialTransactionsComponent} from './order-financial-transactions.component';

describe('OrderFinancialTransactionsComponent', () => {
  let component: OrderFinancialTransactionsComponent;
  let fixture: ComponentFixture<OrderFinancialTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFinancialTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFinancialTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
