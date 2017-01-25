describe('Support internationalisation', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    this.actionwords.sut = require('../src/coffee_machine.js').CoffeeMachine();
  });

  it('No messages are displayed when machine is shut down', function () {
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I shutdown the coffee machine
    this.actionwords.iShutdownTheCoffeeMachine();
    // Then message "" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("");
  });

  describe('Messages are based on language', function () {
    function messagesAreBasedOnLanguage (language, ready_message) {
      // Well, sometimes, you just get a coffee.
      // When I start the coffee machine using language "<language>"
      this.actionwords.iStartTheCoffeeMachineUsingLanguageLang(language);
      // Then message "<ready_message>" should be displayed
      this.actionwords.messageMessageShouldBeDisplayed(ready_message);
    }

    it('English', function () {
      messagesAreBasedOnLanguage.apply(this, ['en', 'Ready']);
    });

    it('French', function () {
      messagesAreBasedOnLanguage.apply(this, ['fr', 'Pret']);
    });
  });
});
