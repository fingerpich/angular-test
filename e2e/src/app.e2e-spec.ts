import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the app', () => {
    page.navigateTo();
    expect(page.getRoot()).toBeTruthy();
  });

  it('should go login page at first', () => {
    page.navigateTo();
    page.getUrl().then((url) => {
      expect(url).toContain('/login');
    });
  });
});
