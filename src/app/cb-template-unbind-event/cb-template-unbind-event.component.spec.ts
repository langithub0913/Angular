import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTemplateUnbindEventComponent } from './cb-template-unbind-event.component';

describe('CbTemplateUnbindEventComponent', () => {
  let component: CbTemplateUnbindEventComponent;
  let fixture: ComponentFixture<CbTemplateUnbindEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbTemplateUnbindEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbTemplateUnbindEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
