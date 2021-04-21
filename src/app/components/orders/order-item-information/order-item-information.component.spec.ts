import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderItemInformationComponent} from './order-item-information.component';

describe('OrderItemInformationComponent', () => {
  let component: OrderItemInformationComponent;
  let fixture: ComponentFixture<OrderItemInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderItemInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
