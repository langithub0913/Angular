import { TestBed } from '@angular/core/testing';

import { HtmlTemplateService } from './html-template.service';

describe('HtmlTemplateService', () => {
  let service: HtmlTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
