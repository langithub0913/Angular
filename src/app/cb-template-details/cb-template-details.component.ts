import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HtmlTemplate, htmlTemplates } from '../cb-templates';
import { HtmlTemplateService } from '../html-template.service';

@Component({
  selector: 'app-cb-template-details',
  templateUrl: './cb-template-details.component.html',
  styleUrls: ['./cb-template-details.component.css']
})
export class CbTemplateDetailsComponent implements OnInit {

  htmlTemplate : HtmlTemplate | undefined;

  constructor(
    private route: ActivatedRoute,
    private htmlTemplateService: HtmlTemplateService
  ) { }

  ngOnInit(): void {

      // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const htmlTemplateIdFromRoute = Number(routeParams.get('htmlTemplateId'));

    // Find the product that correspond with the id provided in route.
    this.htmlTemplate = htmlTemplates.find(htmlTemplate => htmlTemplate.id === htmlTemplateIdFromRoute);
  }

  addHtmlTemplate(htmlTemplate: HtmlTemplate) {
    this.htmlTemplateService.addHtmlTemplate(htmlTemplate);
    window.alert('Your product has been added to the cart!');
  }


  clearHtmlTemplate(htmlTemplate: HtmlTemplate) {
    this.htmlTemplateService.clearHtmlTemplate(htmlTemplate);
    window.alert('This template will be deleted!');
  }

}
