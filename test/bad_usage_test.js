describe('Bad usage', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    this.actionwords.sut = require('../src/coffee_machine.js').CoffeeMachine();
  });

  it('Full grounds does not block coffee', function () {
    // You keep getting coffee even if the "Empty grounds" message is displayed. That said it's not a fantastic idea, you'll get ground everywhere when you'll decide to empty it.
    // Tags: priority:low
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // And I handle everything except the grounds
    this.actionwords.iHandleEverythingExceptTheGrounds();
    // When I take "50" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(50);
    // Then message "Empty grounds" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Empty grounds");
    // And coffee should be served
    this.actionwords.coffeeShouldBeServed();
  });
});
