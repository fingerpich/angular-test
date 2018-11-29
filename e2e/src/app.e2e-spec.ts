import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should not display header before login', () => {
    page.navigateTo();
    expect(page.getHeader()).toBeFalsy();
  });
});
