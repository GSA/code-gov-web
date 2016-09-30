describe('AppComponent', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have <home>', () => {
    let subject = element(by.css('app home')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });
});
