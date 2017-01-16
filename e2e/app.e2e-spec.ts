import { SuperMarketPage } from './app.po';

describe('super-market App', function() {
  let page: SuperMarketPage;

  beforeEach(() => {
    page = new SuperMarketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
