import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerMarketComponent } from './beer-market.component';

describe('BeerMarketComponent', () => {
  let component: BeerMarketComponent;
  let fixture: ComponentFixture<BeerMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
