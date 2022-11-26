import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbilltarrifComponent } from './addbilltarrif.component';

describe('AddbilltarrifComponent', () => {
  let component: AddbilltarrifComponent;
  let fixture: ComponentFixture<AddbilltarrifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbilltarrifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbilltarrifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
