import { DialogDatepickerPage } from './app.po';

describe('dialog-datepicker App', () => {
  let page: DialogDatepickerPage;

  beforeEach(() => {
    page = new DialogDatepickerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
