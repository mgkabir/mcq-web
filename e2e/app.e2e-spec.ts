import { MCQWEBPage } from './app.po';

describe('mcq-web App', function() {
  let page: MCQWEBPage;

  beforeEach(() => {
    page = new MCQWEBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
