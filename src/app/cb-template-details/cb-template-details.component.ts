import { Component, OnInit } from '@angular/core';

import { HtmlTemplate, htmlTemplates } from '../cb-templates';

@Component({
  selector: 'app-cb-template-details',
  templateUrl: './cb-template-details.component.html',
  styleUrls: ['./cb-template-details.component.css']
})
export class CbTemplateDetailsComponent implements OnInit {

  htmlTemplate : HtmlTemplate | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
