import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerRudaComponent } from './beer-ruda.component';

describe('BeerRudaComponent', () => {
  let component: BeerRudaComponent;
  let fixture: ComponentFixture<BeerRudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerRudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerRudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
