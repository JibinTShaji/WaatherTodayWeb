import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherwebComponent } from './weatherweb.component';

describe('WeatherwebComponent', () => {
  let component: WeatherwebComponent;
  let fixture: ComponentFixture<WeatherwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherwebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

