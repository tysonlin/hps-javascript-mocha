describe('Grounds', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../actionwords.js').Actionwords);
    this.actionwords.sut = require('../../src/coffee_machine.js').CoffeeMachine();
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // And I handle everything except the grounds
    this.actionwords.iHandleEverythingExceptTheGrounds();
  });

  it('When the grounds are emptied, message is removed', function () {
    // Tags: priority:medium
    // When I take "30" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(30);
    // And I empty the coffee grounds
    this.actionwords.iEmptyTheCoffeeGrounds();
    // Then message "Ready" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Ready");
  });

  it('Message "Empty grounds" is displayed after 30 coffees are taken', function () {
    // Tags: priority:high
    // When I take "30" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(30);
    // Then message "Empty grounds" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Empty grounds");
  });
});
