import { BewamoUiPage } from './app.po';

describe('bewamo-ui App', () => {
  let page: BewamoUiPage;

  beforeEach(() => {
    page = new BewamoUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
