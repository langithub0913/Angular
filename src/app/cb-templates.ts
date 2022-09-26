export interface HtmlTemplate {
  id: number;
  name: string;
  htmlCode: string;
  forEach: string;
  eventCBId?: number;
}

export const htmlTemplates = [
  {
    id: 1,
    name: 'Anchor List',
    htmlCode: '<div>${foreach}</div>',
    forEach: '<a>Link</a>'
  },
  {
    id: 1,
    name: 'Radio',
    htmlCode: '<div>${foreach}</div>',
    forEach: '<option>Link</option>',
    eventCBId: 10
  },
  {
    id: 1,
    name: 'Button',
    htmlCode: '<button>${label}</button>',
    forEach: ''
  
  },
  {
    id: 1,
    name: 'Button',
    htmlCode: '<button>${label}</button>',
    forEach: ''
  }
];