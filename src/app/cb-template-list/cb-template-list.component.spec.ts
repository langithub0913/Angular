import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTemplateListComponent } from './cb-template-list.component';

describe('CbTemplateListComponent', () => {
  let component: CbTemplateListComponent;
  let fixture: ComponentFixture<CbTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbTemplateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
