describe('Nominal case', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    this.actionwords.sut = require('../src/coffee_machine.js').CoffeeMachine();
  });

  it('Simple use', function () {
    // Well, sometimes, you just get a coffee.
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
  });

  describe('Messages are based on language', function () {
    function messagesAreBasedOnLanguage (lang, ready_message) {
      // Well, sometimes, you just get a coffee.
      // When I start the coffee machine "<lang>"
      this.actionwords.iStartTheCoffeeMachine(lang);
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


  it('No messages are displayed when machine is shut down', function () {
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I shutdown the coffee machine
    this.actionwords.iShutdownTheCoffeeMachine();
    // Then message "" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed();
  });
});
