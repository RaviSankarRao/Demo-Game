import { DemoGamePage } from './app.po';

describe('demo-game App', () => {
  let page: DemoGamePage;

  beforeEach(() => {
    page = new DemoGamePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
