import { Component, OnInit } from '@angular/core';

import { htmlTemplates } from '../cb-templates';

@Component({
  selector: 'cb-template-root',
  templateUrl: './cb-template-list.component.html',
  styleUrls: ['./cb-template-list.component.css']
})
export class CbTemplateListComponent implements OnInit {

  htmlTemplates = htmlTemplates;

  constructor() { }

  ngOnInit(): void {
  }

}
