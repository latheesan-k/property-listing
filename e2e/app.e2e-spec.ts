import { PropListingPage } from './app.po';

describe('prop-listing App', function() {
  let page: PropListingPage;

  beforeEach(() => {
    page = new PropListingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
