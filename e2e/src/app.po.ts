import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getUrl() {
    return browser.getCurrentUrl();
  }

  getRoot() {
    return element(by.css('app-root'));
  }
  getHeader() {
    return element(by.css('app-header div.header'));
  }
}
