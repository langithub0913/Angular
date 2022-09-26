import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HtmlTemplate } from '../cb-templates';

@Component({
  selector: 'app-cb-template-unbind-event',
  templateUrl: './cb-template-unbind-event.component.html',
  styleUrls: ['./cb-template-unbind-event.component.css']
})
export class CbTemplateUnbindEventComponent implements OnInit {

  @Input() htmlTemplate!: HtmlTemplate;
  @Output() notifyBind = new EventEmitter();
  @Output() notifyUnbind = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

 
}
