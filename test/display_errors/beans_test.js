describe('Beans', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../actionwords.js').Actionwords);
    this.actionwords.sut = require('../../src/coffee_machine.js').CoffeeMachine();
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // And I handle everything except the beans
    this.actionwords.iHandleEverythingExceptTheBeans();
  });

  it('Message "Fill beans" is displayed after 38 coffees are taken', function () {
    // When I take "38" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(38);
    // Then message "Fill beans" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Fill beans");
  });

  it('It is possible to take 40 coffees before there is really no more beans', function () {
    // Given I take "40" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(40);
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then coffee should not be served
    this.actionwords.coffeeShouldNotBeServed();
    // And message "Fill beans" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Fill beans");
  });

  it('After adding beans, the message "Fill beans" disappears', function () {
    // Given I take "40" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(40);
    // When I fill the beans tank
    this.actionwords.iFillTheBeansTank();
    // Then message "Ready" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Ready");
  });
});
