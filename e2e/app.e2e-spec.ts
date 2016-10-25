import { SimpleLoginAngular2Page } from './app.po';

describe('simple-login-angular2 App', function() {
  let page: SimpleLoginAngular2Page;

  beforeEach(() => {
    page = new SimpleLoginAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
