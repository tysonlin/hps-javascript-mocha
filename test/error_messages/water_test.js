describe('Water', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../actionwords.js').Actionwords);
    this.actionwords.sut = require('../../src/coffee_machine.js').CoffeeMachine();
    // As a coffee lover
    // I have to handle the water tank
    // So I can have coffee when I need it
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // And I handle everything except the water tank
    this.actionwords.iHandleEverythingExceptTheWaterTank();
  });

  it('Message "Fill water tank" is displayed after 50 coffees are taken', function () {
    // When I take "50" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(50);
    // Then message "Fill tank" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Fill tank");
  });

  it('It is possible to take 10 coffees after the message "Fill water tank" is displayed', function () {
    // Given I take "60" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(60);
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then coffee should not be served
    this.actionwords.coffeeShouldNotBeServed();
  });

  it('When the water tank is filled, the message disappears', function () {
    // Given I take "55" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(55);
    // When I fill the water tank
    this.actionwords.iFillTheWaterTank();
    // Then message "Ready" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Ready");
  });
});
