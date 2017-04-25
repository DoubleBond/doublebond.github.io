import { MeV3Page } from './app.po';

describe('me-v3 App', () => {
  let page: MeV3Page;

  beforeEach(() => {
    page = new MeV3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
