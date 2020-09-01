describe('Support internationalisation', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    this.actionwords.sut = require('../src/coffee_machine.js').CoffeeMachine();
  });

  describe('Messages are based on language', function () {
    function messagesAreBasedOnLanguage (ready_message, language) {
      // Tags: priority:medium
      // When I start the coffee machine using language "<language>"
      this.actionwords.iStartTheCoffeeMachineUsingLanguageLang(language);
      // Then message "<ready_message>" should be displayed
      this.actionwords.messageMessageShouldBeDisplayed(ready_message);
    }

    it('English', function () {
      messagesAreBasedOnLanguage.apply(this, ['Ready', 'en']);
    });

    it('French', function () {
      messagesAreBasedOnLanguage.apply(this, ['Pret', 'fr']);
    });
  });


  it('No messages are displayed when machine is shut down', function () {
    // Tags: priority:medium
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I shutdown the coffee machine
    this.actionwords.iShutdownTheCoffeeMachine();
    // Then message "" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("");
  });
});
