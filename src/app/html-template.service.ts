import { HtmlTemplate, htmlTemplates } from './cb-templates';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HtmlTemplateService {
  addHtmlTemplate(htmlTemplate: HtmlTemplate) {
    const htmlTemplateToPush: HtmlTemplate = {
      id: 8,
      htmlCode: '<div>Template 8</div>',
      name: 'Template 8',
    };
    htmlTemplates.push(htmlTemplateToPush);
  }

  getHtmlTemplates() {
    return htmlTemplates;
  }

  clearHtmlTemplates() {
    htmlTemplates.forEach((element, index) => {
      delete htmlTemplates[index];
    });
  }

  clearHtmlTemplate(htmlTemplate: HtmlTemplate) {
    console.log(htmlTemplate);
    htmlTemplates.forEach((element, index) => {
      if (element.id == htmlTemplate.id) delete htmlTemplates[index];
    });

    console.log(htmlTemplates);
    return htmlTemplates;
  }
}
