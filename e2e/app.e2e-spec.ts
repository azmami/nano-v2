import { NanoV2Page } from './app.po';

describe('nano-v2 App', function() {
  let page: NanoV2Page;

  beforeEach(() => {
    page = new NanoV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
