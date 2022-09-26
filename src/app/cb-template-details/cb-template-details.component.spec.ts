import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTemplateDetailsComponent } from './cb-template-details.component';

describe('CbTemplateDetailsComponent', () => {
  let component: CbTemplateDetailsComponent;
  let fixture: ComponentFixture<CbTemplateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbTemplateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbTemplateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
