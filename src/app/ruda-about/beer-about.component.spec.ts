import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerAboutComponent } from './beer-about.component';

describe('BeerAboutComponent', () => {
  let component: BeerAboutComponent;
  let fixture: ComponentFixture<BeerAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
