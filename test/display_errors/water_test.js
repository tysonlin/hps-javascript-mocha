describe('Water', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../actionwords.js').Actionwords);
    this.actionwords.sut = require('../../src/coffee_machine.js').CoffeeMachine();
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // And I handle everything except the water tank
    this.actionwords.iHandleEverythingExceptTheWaterTank();
  });

  it('When the water tank is filled, the message disappears', function () {
    // Tags: priority:high
    // When I take "55" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(55);
    // And I fill the water tank
    this.actionwords.iFillTheWaterTank();
    // Then message "Ready" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Ready");
  });

  it('It is possible to take 10 coffees after the message "Fill water tank" is displayed', function () {
    // Tags: priority:low
    // When I take "60" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(60);
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then coffee should not be served
    this.actionwords.coffeeShouldNotBeServed();
  });

  it('Message "Fill water tank" is displayed after 50 coffees are taken', function () {
    // Tags: priority:high
    // When I take "50" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(50);
    // Then message "Fill tank" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Fill tank");
  });
});
